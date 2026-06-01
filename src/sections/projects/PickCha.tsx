import Section from '@/components/Section'
import ProjectHeader from '@/components/ProjectHeader'

export default function PickCha() {
  return (
    <Section>
      <ProjectHeader
        index='06 · PickCha'
        name='PickCha'
        tagline='타사 웹툰 서비스의 캐릭터 챗 기능을 써본 뒤 만들어본 캐릭터 챗 사이트.'
        meta={[
          {
            label: 'URL',
            value: (
              <a
                href='https://pickcha.vercel.app'
                target='_blank'
                rel='noopener noreferrer'
                className='underline decoration-black-400/30 hover:decoration-black-400'
              >
                pickcha.vercel.app
              </a>
            ),
          },
          { label: '상태', value: '퍼블리싱 완료 (AI 챗 기능은 비용 문제로 보류)' },
        ]}
      />

      <figure className='border-l-2 border-black-400/20 pl-6 md:pl-8'>
        <blockquote className='font-paperlogy-800 text-2xl md:text-3xl leading-relaxed text-black-400 max-w-3xl'>
          “더미 데이터로 채울 캐릭터 설정을 짜는 일조차 유독 즐거웠습니다.”
        </blockquote>
      </figure>
    </Section>
  )
}
