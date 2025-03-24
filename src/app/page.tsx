'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import HomePage from '@/pages/homePage'
import ProjectsPage from '@/pages/projectsPage'
import SkillsPage from '@/pages/skillsPage'
import ExperiencePage from '@/pages/experiencePage'
import ContactPage from '@/pages/contactPage'
import { pageSectionIndexMap } from '@/constants/pageSectionIndexMap'
import useIndexedRefs from '@/hooks/useIndexedRefs'

export default function Page() {
  const params = useSearchParams()
  const section = params?.get('section')

  const { indexedRefs, setIndexedRef } = useIndexedRefs(pageSectionIndexMap.length)

  useEffect(() => {
    if (!section) return

    const sectionIndex = pageSectionIndexMap[section]
    indexedRefs.current[sectionIndex]?.scrollIntoView({ behavior: 'smooth' })
  }, [section, indexedRefs])

  return (
    <>
      <div ref={setIndexedRef(0)}>
        <HomePage />
      </div>
      <div ref={setIndexedRef(1)}>
        <ProjectsPage />
      </div>
      <div ref={setIndexedRef(2)}>
        <SkillsPage />
      </div>
      <div ref={setIndexedRef(3)}>
        <ExperiencePage />
      </div>
      <div ref={setIndexedRef(4)}>
        <ContactPage />
      </div>
    </>
  )
}
