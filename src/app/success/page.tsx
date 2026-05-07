import Link from 'next/link'
import { type Metadata } from 'next'

export const metadata: Metadata = { title: 'Payment Confirmed | A Legit Leader' }

export default function SuccessPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">You&apos;re all set!</h1>
      <p className="text-gray-600 mb-8">
        Your payment was successful. Check your email for a receipt from Stripe. Arsenio will be
        in touch shortly to schedule your session.
      </p>
      <Link href="/booking" className="inline-block px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors">
        Book your session now
      </Link>
    </main>
  )
}
