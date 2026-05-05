import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { strengths } = await req.json()

  const resendKey = process.env.RESEND_API_KEY
  const notifyEmail = process.env.NOTIFY_EMAIL

  if (!resendKey || !notifyEmail) {
    // Notification not configured — log and return OK so the client isn't blocked
    console.log('[assessment-notify] not configured — strengths:', strengths)
    return NextResponse.json({ ok: true })
  }

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'assessment@alegitleader.com',
      to: notifyEmail,
      subject: 'Public Assessment Completed',
      text: `Someone completed the strengths assessment.\n\nTop strengths: ${strengths.join(', ')}`,
    }),
  })

  return NextResponse.json({ ok: true })
}
