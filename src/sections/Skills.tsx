import Section from '@/components/Section'
import SectionHeading from '@/components/SectionHeading'
import Tag from '@/components/Tag'

const GROUPS = [
  {
    label: 'Frontend',
    items: [
      'React',
      'Next.js',
      'Svelte / SvelteKit',
      'TypeScript',
      'Tailwind CSS',
      'GSAP',
      'Lenis',
      'Zustand',
      'TanStack Query',
      'React Router',
      'FSD 아키텍처',
    ],
  },
  {
    label: 'Backend · Infra',
    items: [
      'Supabase (Auth · DB · Storage)',
      'Node.js',
      'Cloudflare Workers',
      'Cloudflare Pages',
      'AWS EC2',
    ],
  },
  {
    label: 'Design',
    items: ['Figma', 'GPT 이미지 생성', 'Gemini', 'Grok 영상 생성', 'Seedance API'],
  },
  {
    label: 'AI 협업 도구',
    items: [
      'Claude Code',
      'MCP 서버 직접 제작',
      'Figma MCP',
      'Supabase MCP',
      'GitHub MCP',
      '자체 AI 스킬 제작',
      '자체 영상 생성기 제작',
    ],
  },
]

export default function Skills() {
  return (
    <Section id='skills' theme='dark'>
      <SectionHeading
        theme='dark'
        eyebrow='Skills'
        title='작업에 자주 쓰는 도구들.'
        description='기획·디자인·구현·운영까지 직접 다루기 위해 익혀온 스택입니다.'
      />

      <div className='flex flex-col divide-y divide-white/10'>
        {GROUPS.map((g) => (
          <div
            key={g.label}
            className='grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 md:gap-12 py-8 md:py-10 first:pt-0 last:pb-0'
          >
            <h3 className='font-paperlogy-800 text-xl md:text-2xl text-white'>{g.label}</h3>
            <div className='flex flex-wrap gap-2'>
              {g.items.map((i) => (
                <Tag key={i} theme='dark'>
                  {i}
                </Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
