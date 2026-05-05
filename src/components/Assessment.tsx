'use client'

import { useState, useRef } from 'react'
import { questions } from '@/data/assessment-questions'
import { strengths } from '@/data/assessment-strengths'

const SCALE = [
  { label: 'Strongly Disagree', value: 0 },
  { label: 'Disagree', value: 1 },
  { label: 'Neutral', value: 2 },
  { label: 'Agree', value: 3 },
  { label: 'Strongly Agree', value: 4 },
]

type Scores = Record<string, number>
type Result = [string, number]

function scoreAnswers(answers: Record<string, number>): Result[] {
  const scores: Scores = {}

  for (const q of questions) {
    const radioValue = answers[q.id]
    if (radioValue === undefined) continue

    const agreeValue = q.valAgree * radioValue / 4
    const disagreeValue = q.valDisagree * (4 - radioValue) / 4

    scores[q.strAgree] = (scores[q.strAgree] ?? 0) + agreeValue
    scores[q.strDisagree] = (scores[q.strDisagree] ?? 0) + disagreeValue
  }

  return Object.entries(scores).sort((a, b) => b[1] - a[1])
}

function pickTopStrengths(sorted: Result[]): Result[] {
  if (sorted.length < 4) return sorted

  let count = 3
  if (sorted[2][1] === sorted[3][1]) {
    if (sorted.length >= 5 && sorted[3][1] === sorted[4][1]) {
      count = 2
    } else {
      count = 4
    }
  }
  return sorted.slice(0, count)
}

export default function Assessment() {
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [unanswered, setUnanswered] = useState<Set<string>>(new Set())
  const [results, setResults] = useState<Result[] | null>(null)
  const [submitting, setSubmitting] = useState(false)
  const topRef = useRef<HTMLDivElement>(null)

  function handleChange(questionId: string, value: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
    setUnanswered((prev) => {
      const next = new Set(prev)
      next.delete(questionId)
      return next
    })
  }

  async function handleSubmit() {
    const missing = new Set(
      questions.filter((q) => answers[q.id] === undefined).map((q) => q.id)
    )
    if (missing.size > 0) {
      setUnanswered(missing)
      const firstMissing = document.getElementById(`q-${[...missing][0]}`)
      firstMissing?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setSubmitting(true)
    const sorted = scoreAnswers(answers)
    const top = pickTopStrengths(sorted)
    setResults(top)
    topRef.current?.scrollIntoView({ behavior: 'smooth' })

    try {
      await fetch('/api/assessment-notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ strengths: top.map(([name]) => name) }),
      })
    } catch {
      // notification failure is non-blocking
    }

    setSubmitting(false)
  }

  function handleRetake() {
    setAnswers({})
    setUnanswered(new Set())
    setResults(null)
    topRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div ref={topRef} className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">My Strengths Assessment</h1>
      <p className="text-gray-600 mb-2">A 10-minute assessment to identify your personal strengths.</p>
      <p className="text-gray-500 text-sm mb-10">
        Don&apos;t think too hard about the questions, and don&apos;t worry about technical accuracy. Go with your gut!
      </p>

      {results ? (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Your top strengths are:</h2>
          <ul className="space-y-4">
            {results.map(([name]) => (
              <li key={name} className="border-l-4 border-black pl-4">
                <p className="font-bold text-lg">{name}</p>
                <p className="text-gray-700">{strengths[name]}</p>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-400 pt-2">
            Results are not saved. Print this page or take a screenshot to keep a record.
          </p>
          <button
            onClick={handleRetake}
            className="mt-4 px-6 py-2 border border-black text-sm font-medium hover:bg-black hover:text-white transition-colors"
          >
            Retake assessment
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          {questions.map((q, index) => {
            const isInvalid = unanswered.has(q.id)
            return (
              <div key={q.id} id={`q-${q.id}`} className={`pb-8 border-b ${isInvalid ? 'border-red-400' : 'border-gray-200'}`}>
                <p className="font-medium mb-4">
                  <span className="text-gray-400 mr-2">{index + 1} of {questions.length}.</span>
                  {q.statement}
                </p>
                {isInvalid && (
                  <p className="text-red-500 text-sm mb-2">Please select an answer.</p>
                )}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:justify-between">
                  {SCALE.map((option) => (
                    <label
                      key={option.value}
                      className={`flex sm:flex-col items-center gap-2 sm:gap-1 cursor-pointer group sm:w-1/5 sm:text-center`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={option.value}
                        checked={answers[q.id] === option.value}
                        onChange={() => handleChange(q.id, option.value)}
                        className="accent-black w-4 h-4 shrink-0"
                      />
                      <span className="text-sm text-gray-600 group-hover:text-black leading-tight">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )
          })}

          {unanswered.size > 0 && (
            <p className="text-red-500 text-sm">
              Please answer all {unanswered.size} remaining question{unanswered.size !== 1 ? 's' : ''} before submitting.
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {submitting ? 'Calculating…' : 'Complete the assessment'}
          </button>
        </div>
      )}
    </div>
  )
}
