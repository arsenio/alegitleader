export type Product = {
  name: string
  description: string
  price: string
  priceId: string
  mode: 'payment' | 'subscription'
  highlight?: boolean
}

export const products: Product[] = [
  {
    name: 'Single Coaching Session',
    description: 'One 60-minute 1:1 coaching session. Great for targeted challenges or getting started.',
    price: '$300',
    priceId: 'price_1TUVfFJ2KPsFArMgLJOVHHgp',
    mode: 'payment',
  },
  {
    name: '3-Session Bundle',
    description: 'Three 60-minute sessions to work through a defined goal or challenge together.',
    price: '$720',
    priceId: 'price_1TUVfGJ2KPsFArMgL1doARO1',
    mode: 'payment',
  },
  {
    name: '5-Session Intensive',
    description: 'Five sessions for a deeper, sustained engagement on leadership growth.',
    price: '$1,200',
    priceId: 'price_1TUVfGJ2KPsFArMghFzZjt8S',
    mode: 'payment',
  },
  {
    name: 'Farmers Market',
    description: 'Up to 5 coaching sessions every month. Ideal for leaders who want consistent, ongoing support.',
    price: '$800/month',
    priceId: 'price_1TUVfHJ2KPsFArMgR1qLJfLj',
    mode: 'subscription',
    highlight: true,
  },
]
