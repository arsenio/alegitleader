import { type Metadata } from 'next'
import Assessment from '@/components/Assessment'

export const metadata: Metadata = {
  title: 'My Strengths Assessment | A Legit Leader',
  description: 'A 10-minute assessment to identify your personal leadership strengths.',
}

export default function AssessmentPage() {
  return <Assessment />
}
