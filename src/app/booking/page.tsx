import { type Metadata } from 'next'
import CalEmbed from '@/components/CalEmbed'

export const metadata: Metadata = {
  title: 'Book a Session | A Legit Leader',
  description: 'Schedule a coaching session, discovery call, or consultation with Arsenio Santos.',
}

export default function BookingPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">Book a Session</h1>
      <p className="text-gray-600 mb-10">
        Choose a time that works for you. All sessions are conducted via video call.
      </p>
      <CalEmbed />
    </main>
  )
}
