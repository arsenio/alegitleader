import Link from 'next/link'
import { type Metadata } from 'next'

export const metadata: Metadata = { title: 'Payment Cancelled | A Legit Leader' }

export default function CancelPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Payment cancelled</h1>
      <p className="text-gray-600 mb-8">
        No charge was made. Head back to services if you&apos;d like to try again, or book a
        discovery call if you have questions.
      </p>
      <div className="flex gap-4 justify-center">
        <Link href="/services" className="px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors">
          View services
        </Link>
        <Link href="/booking" className="px-8 py-3 border border-black font-medium hover:bg-gray-50 transition-colors">
          Book a call
        </Link>
      </div>
    </main>
  )
}
