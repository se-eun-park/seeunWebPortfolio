import Section from '@/components/Section'
import ProjectHeader from '@/components/ProjectHeader'
import Card from '@/components/Card'

const FEATURES = [
  {
    title: '비동기 흐름',
    body: 'Submit → Poll (5초 간격) → Done / Cancel. AbortController로 60초 API 타임아웃 + 30분 폴링 한도.',
  },
  {
    title: '풍부한 입력 옵션',
    body: '프롬프트(5~5,000자) · 시작/끝 프레임 · 캐릭터/물체 레퍼런스 · 길이(4~15초) · 비율(6종) · 해상도(480p/720p/1080p).',
  },
  {
    title: '비즈니스 규칙 UX 변환',
    body: '“끝 이미지 + 캐릭터 레퍼런스” 동시 사용 불가 같은 API 상호 배타를 UX 가이드 메시지로 변환.',
  },
  {
    title: '운영 전용',
    body: '본인 전용 세션 인증.',
  },
]

export default function SeedanceStudio() {
  return (
    <Section>
      <ProjectHeader
        index='03 · Seedance Studio'
        name='Seedance Studio'
        tagline='Seedance API를 직접 호출하는 개인용 영상 생성기. dawnstreet hero 영상 제작에 실제 사용.'
        meta={[
          { label: '제작 이유', value: 'Seedance 유료 구독보다 종량제 API가 효율적이라 직접 제작' },
          { label: '활용', value: 'dawnstreet.kr hero 영상 제작' },
        ]}
        stack={[
          'SvelteKit',
          'Cloudflare Workers',
          'TypeScript',
          'Tailwind CSS v4',
          'OpenRouter API',
          'Seedance 2.0',
        ]}
      />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
        {FEATURES.map((f) => (
          <Card key={f.title}>
            <h3 className='font-paperlogy-800 text-xl mb-3'>{f.title}</h3>
            <p className='font-pretendard-400 text-base leading-relaxed text-black-400/75'>
              {f.body}
            </p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
