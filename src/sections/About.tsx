import Section from '@/components/Section'
import SectionHeading from '@/components/SectionHeading'
import Card from '@/components/Card'

const STRENGTHS = [
  {
    no: '01',
    title: '디자인 + 개발 동시',
    body: '시안 없이 디자인부터 구현까지 단독으로 가능합니다.',
  },
  {
    no: '02',
    title: 'AI 도구·MCP 적극 활용',
    body: 'MCP 서버를 직접 구축하고, 필요한 도구를 자체 제작합니다.',
  },
  {
    no: '03',
    title: '어드민·UI 시스템 관심',
    body: '부트캠프부터 회사 업무까지, 운영 시스템을 직접 설계·개발해 왔습니다.',
  },
]

export default function About() {
  return (
    <Section id='about'>
      <SectionHeading
        eyebrow='About Me'
        title={
          <>
            좋아하는 분야의 화면을
            <br />
            직접 만드는 일이 잘 맞는 사람.
          </>
        }
        description='이름 박세은 · 직무 Frontend Developer · 소속 주식회사 여명거리 (2025.07 ~ 재직 중)'
      />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6'>
        {STRENGTHS.map((s) => (
          <Card key={s.no}>
            <div className='flex flex-col gap-3 h-full'>
              <span className='font-manrope text-sm tracking-widest text-gray-500'>{s.no}</span>
              <h3 className='font-paperlogy-800 text-2xl tracking-tight'>{s.title}</h3>
              <p className='font-pretendard-400 text-base leading-relaxed text-black-400/75'>
                {s.body}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
