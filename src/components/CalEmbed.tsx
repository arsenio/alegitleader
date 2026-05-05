'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'

export default function CalEmbed() {
  useEffect(() => {
    getCalApi({ namespace: 'alegitleader' }).then((cal) => {
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })
  }, [])

  return (
    <Cal
      namespace="alegitleader"
      calLink="alegitleader"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view' }}
    />
  )
}
