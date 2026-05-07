import { type Metadata } from 'next'
import { products } from '@/data/products'
import CheckoutButton from '@/components/CheckoutButton'

export const metadata: Metadata = {
  title: 'Services | A Legit Leader',
  description: 'Coaching sessions, bundles, and monthly subscription plans with Arsenio Santos.',
}

export default function ServicesPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Coaching Services</h1>
      <p className="text-gray-600 mb-12 max-w-2xl">
        Whether you need a single session or ongoing monthly support, there&apos;s a plan that fits
        where you are. All sessions are conducted via video call.
      </p>

      <div className="grid sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <div
            key={product.priceId}
            className={`flex flex-col border p-8 ${
              product.highlight ? 'border-black bg-black text-white' : 'border-gray-200'
            }`}
          >
            {product.highlight && (
              <span className="text-xs font-semibold tracking-widest uppercase mb-4 opacity-60">
                Most popular
              </span>
            )}
            <h2 className={`text-xl font-bold mb-2 ${product.highlight ? 'text-white' : ''}`}>
              {product.name}
            </h2>
            <p className={`text-sm leading-relaxed mb-6 flex-1 ${product.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
              {product.description}
            </p>
            <p className={`text-3xl font-bold mb-6 ${product.highlight ? 'text-white' : ''}`}>
              {product.price}
            </p>
            <CheckoutButton priceId={product.priceId} highlight={product.highlight} />
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm text-gray-500">
        Interested in technical leadership mentoring or team training?{' '}
        <a href="/booking" className="underline">
          Book a discovery call
        </a>{' '}
        to discuss a custom retainer.
      </p>
    </main>
  )
}
