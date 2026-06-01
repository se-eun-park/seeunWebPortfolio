import Section from '@/components/Section'
import SectionHeading from '@/components/SectionHeading'

const PROJECTS = [
  { no: '01', name: 'dcamp-ui', desc: 'AI 에이전트용 디자인 시스템 MCP 서버' },
  { no: '02', name: 'dawnstreet.kr', desc: '디자인·영상·개발 단독, 회사 소개 사이트' },
  { no: '03', name: 'Seedance Studio', desc: '영상 생성 API를 직접 호출하는 개인용 도구' },
  { no: '04', name: 'LIPS Admin', desc: '정부지원 사업 운영 어드민' },
  { no: '05', name: 'SSAFICE', desc: '교육생용 일정·공지 관리 서비스' },
  { no: '06', name: 'PickCha', desc: '캐릭터 챗 토이 프로젝트' },
]

export default function ProjectsIntro() {
  return (
    <Section id='projects'>
      <SectionHeading
        eyebrow='Selected Work'
        title='지금까지 만든 것들.'
        description='회사·부트캠프·개인 프로젝트에서 디자인·구현·운영을 직접 다뤘던 사례 6가지.'
      />

      <ol className='flex flex-col divide-y divide-black-400/10'>
        {PROJECTS.map((p) => (
          <li
            key={p.no}
            className='grid grid-cols-[60px_1fr] md:grid-cols-[80px_220px_1fr] gap-4 md:gap-8 py-5 md:py-6 items-baseline'
          >
            <span className='font-manrope text-sm tracking-widest text-gray-500'>{p.no}</span>
            <span className='font-paperlogy-800 text-xl md:text-2xl tracking-tight'>{p.name}</span>
            <span className='col-span-2 md:col-span-1 font-pretendard-400 text-sm md:text-base text-black-400/70'>
              {p.desc}
            </span>
          </li>
        ))}
      </ol>
    </Section>
  )
}
