'use client'

import { useState } from 'react'

type Props = {
  priceId: string
  highlight?: boolean
}

export default function CheckoutButton({ priceId, highlight }: Props) {
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      })
      const { url } = await res.json()
      if (url) window.location.href = url
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`w-full py-3 text-sm font-semibold transition-colors disabled:opacity-50 ${
        highlight
          ? 'bg-white text-black hover:bg-gray-100'
          : 'bg-black text-white hover:bg-gray-800'
      }`}
    >
      {loading ? 'Redirecting…' : 'Get started'}
    </button>
  )
}
