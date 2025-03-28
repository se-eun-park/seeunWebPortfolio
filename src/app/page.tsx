import { Suspense } from 'react'
import PageContents from '@/components/pageContents'
import NavBar from '@/components/NavBar/navBar'

export default function Page() {
  return (
    <Suspense fallback={null}>
      <NavBar />
      <PageContents />
    </Suspense>
  )
}
