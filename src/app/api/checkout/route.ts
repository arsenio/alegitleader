import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { products } from '@/data/products'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
  const { priceId } = await req.json()

  const product = products.find((p) => p.priceId === priceId)
  if (!product) {
    return NextResponse.json({ error: 'Invalid price ID' }, { status: 400 })
  }

  const origin = req.headers.get('origin') ?? 'https://alegitleader.com'

  const session = await stripe.checkout.sessions.create({
    mode: product.mode,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cancel`,
  })

  return NextResponse.json({ url: session.url })
}
