import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'mkt8g06z',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

const posts = [
  {
    _type: 'post',
    title: 'What About (d)EI?',
    slug: { _type: 'slug', current: 'what-about-dei' },
    publishedAt: '2024-01-12T00:00:00Z',
    excerpt:
      'Examining the ongoing debate surrounding DEI initiatives and advocating for a rebalanced approach that lets diversity, equity, inclusion, belonging, and accessibility reinforce one another.',
    readTime: 3,
    body: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 's1',
            text: 'The debate around diversity, equity, and inclusion (DEI) initiatives was reignited by a public disagreement between Mark Cuban and Elon Musk regarding United Airlines’ pilot training program targeting underrepresented demographic groups.',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 's2',
            text: 'Both perspectives carry merit. While workplace diversity has demonstrated real benefits since the 1950s, singling out specific groups risks creating new imbalances and potentially compromising organizational health.',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b3',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 's3',
            text: 'DEI encompasses multiple interconnected components—Diversity, Equity, Inclusion, plus Belonging and Accessibility. These elements don’t exist independently; they reinforce one another. Promoting inclusion through inclusive decision-making practices simultaneously advances equity and accessibility.',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b4',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 's4',
            text: 'A critical concern is that the acronym’s letter sequence suggests diversity as the primary priority, potentially overshadowing the other components. Many organizations emphasize diverse hiring without addressing how to maintain diversity post-hire or foster equity and inclusion—resulting in “checkbox diversity” characterized by ambiguous pursuit of arbitrary distinctions.',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b5',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 's5',
            text: 'The path forward is a rebalanced approach that demonstrates how these concepts support each other and genuinely enhance organizational culture—rather than treating diversity as the ultimate objective.',
          },
        ],
      },
    ],
  },
  {
    _type: 'post',
    title: 'Better Daily Meetings',
    slug: { _type: 'slug', current: 'better-daily-meetings' },
    publishedAt: '2024-05-14T00:00:00Z',
    excerpt:
      'Daily team meetings—scrums, huddles, syncs—often devolve into tedious status updates. Here are five experiments to make them worth everyone’s time.',
    readTime: 3,
    body: [
      {
        _type: 'block',
        _key: 'b1',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 's1',
            text: 'Whatever you call them—scrums, roll-calls, huddles, syncs, check-ins—daily team meetings follow a familiar format: sequential individual updates about completed work, upcoming tasks, and obstacles.',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b2',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 's2',
            text: 'The theory is sound. The reality often disappoints. Meetings run long, dominant voices take over, and discussions drift off-topic. Rather than fostering collaboration, they devolve into tedious status updates that leave attendees feeling drained and cynical.',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b3',
        style: 'h2',
        children: [{ _type: 'span', _key: 's3', text: 'Five experiments worth trying' }],
      },
      {
        _type: 'block',
        _key: 'b4',
        style: 'h3',
        children: [{ _type: 'span', _key: 's4', text: '1. Vary the structure' }],
      },
      {
        _type: 'block',
        _key: 'b5',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 's5',
            text: 'Change speaker order, try alternative prompts like “What are you looking forward to?”, or abandon round-robin formats entirely to focus on team-wide obstacles.',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b6',
        style: 'h3',
        children: [{ _type: 'span', _key: 's6', text: '2. Enforce strict timing' }],
      },
      {
        _type: 'block',
        _key: 'b7',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 's7',
            text: 'Maintain consistent meeting times, shorten duration, timebox individual updates to 60 seconds, and display visible countdowns.',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b8',
        style: 'h3',
        children: [{ _type: 'span', _key: 's8', text: '3. Rotate facilitation' }],
      },
      {
        _type: 'block',
        _key: 'b9',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 's9',
            text: 'Rotate facilitation duties among team members, supported by documented meeting purposes and ground rules.',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b10',
        style: 'h3',
        children: [{ _type: 'span', _key: 's10', text: '4. Go asynchronous' }],
      },
      {
        _type: 'block',
        _key: 'b11',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 's11',
            text: 'Use workplace chat platforms with automated bots that collect updates and consolidate results—no meeting required.',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b12',
        style: 'h3',
        children: [{ _type: 'span', _key: 's12', text: '5. Use collaborative documents' }],
      },
      {
        _type: 'block',
        _key: 'b13',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 's13',
            text: 'Collect updates in a shared Google Doc pre-meeting, then refocus the actual meeting on discussion and responses rather than status reporting.',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'b14',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 's14',
            text: 'Success depends on team culture. Run retrospectives to evaluate what’s working—and don’t be afraid to change the format again.',
          },
        ],
      },
    ],
  },
]

for (const post of posts) {
  const result = await client.create(post)
  console.log(`Created: ${result.title} (${result._id})`)
}

console.log('Done.')
