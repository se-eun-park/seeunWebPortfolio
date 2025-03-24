import { Suspense } from 'react'
import PageContents from '@/components/pageContents'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageContents />
    </Suspense>
  )
}
