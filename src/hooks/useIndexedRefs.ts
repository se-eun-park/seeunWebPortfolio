import { useRef } from 'react'

export default function useIndexedRefs(count: number) {
  const indexedRefs = useRef<(HTMLDivElement | null)[]>(Array(count).fill(null))

  const setIndexedRef = (index: number) => (el: HTMLDivElement | null) => {
    indexedRefs.current[index] = el
  }

  return { indexedRefs, setIndexedRef }
}
