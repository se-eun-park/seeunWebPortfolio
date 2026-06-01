import Section from '@/components/Section'
import ProjectHeader from '@/components/ProjectHeader'
import Card from '@/components/Card'

const VIDEO_STEPS = [
  {
    no: '01',
    title: '캐릭터 디자인',
    body: '회사 서비스의 마스코트 캐릭터를 디자인.',
    tool: 'GPT 이미지 생성',
  },
  {
    no: '02',
    title: '씬 스토리보드 작성',
    body: '각 씬의 상황·동작·시각 요소를 정리한 스토리보드.',
    tool: 'ChatGPT Gem (커스텀 GPT)',
  },
  {
    no: '03',
    title: '씬별 사물·배경 이미지 생성',
    body: '스토리보드의 각 씬에 들어갈 사물·배경 이미지를 생성.',
    tool: 'Gemini 이미지 생성',
  },
  {
    no: '04',
    title: '씬별 영상 생성',
    body: 'Seedance API를 직접 호출하는 자체 영상 생성기로 씬 영상 생성. 유료 구독보다 종량제 API가 효율적이라 직접 제작.',
    tool: 'Seedance API · 자체 영상 생성기',
  },
  {
    no: '05',
    title: '컷편집·합성',
    body: '씬 영상들을 이어 붙여 hero 영상 완성.',
    tool: '편집 도구',
  },
]

const HERO_PHASES = [
  { phase: 'Phase 0', range: '초기', body: '키네틱 슬로건 + 작은 비디오' },
  {
    phase: 'Phase 1',
    range: '0 → 0.5',
    body: '키네틱 슬로건 0.45배 축소 + 비디오 박스 width 100% 확장 + Y축 lift',
  },
  {
    phase: 'Phase 2',
    range: '0.5 → 0.85',
    body: '비디오 박스 height 105vh 확장 (뷰포트 가장자리 클립)',
  },
  { phase: 'Phase 3', range: '0.85 → 1.0', body: '풀스크린 비디오 위에 최종 H1 페이드인' },
  { phase: 'HOLD', range: '1.0 → 2.0', body: '사용자가 영상을 충분히 볼 수 있게 1뷰포트 더 유지' },
]

export default function Dawnstreet() {
  return (
    <Section theme='dark'>
      <ProjectHeader
        theme='dark'
        index='02 · dawnstreet.kr'
        name='dawnstreet.kr'
        tagline='디자인 시안도 디자이너 가이드도 없이, 디자인부터 영상까지 혼자 완성한 회사 소개 사이트.'
        meta={[
          { label: '역할', value: '디자인 · 영상 · 개발 단독' },
          {
            label: '배포',
            value: (
              <a
                href='https://www.dawnstreet.kr/'
                target='_blank'
                rel='noopener noreferrer'
                className='underline decoration-white/30 hover:decoration-white'
              >
                dawnstreet.kr
              </a>
            ),
          },
          { label: '제작 도구', value: 'GPT · Gemini · Grok · Seedance API · 자체 생성기' },
        ]}
        stack={[
          'Next.js 16',
          'React 19',
          'TypeScript',
          'Tailwind CSS v4',
          'GSAP',
          'Lenis',
          'Cloudflare Pages',
        ]}
      />

      {/* Hero 영상 제작 흐름 */}
      <div className='mb-16'>
        <h3 className='font-paperlogy-800 text-2xl md:text-3xl mb-6'>Hero 영상 제작 흐름</h3>
        <ol className='flex flex-col divide-y divide-white/10'>
          {VIDEO_STEPS.map((s) => (
            <li
              key={s.no}
              className='grid grid-cols-[60px_1fr] md:grid-cols-[80px_240px_1fr_200px] gap-4 md:gap-8 py-6 items-start'
            >
              <span className='font-manrope text-sm tracking-widest text-gray-400'>STEP {s.no}</span>
              <h4 className='font-paperlogy-800 text-lg md:text-xl'>{s.title}</h4>
              <p className='col-span-2 md:col-span-1 font-pretendard-400 text-base leading-relaxed text-white/80'>
                {s.body}
              </p>
              <span className='col-span-2 md:col-span-1 font-pretendard-500 text-sm text-gray-400 md:text-right'>
                {s.tool}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Hero 섹션 기술 디테일 */}
      <div className='mb-16'>
        <h3 className='font-paperlogy-800 text-2xl md:text-3xl mb-2'>Hero 섹션 스크롤 연출</h3>
        <p className='font-pretendard-400 text-base text-white/70 mb-6'>
          GSAP + ScrollTrigger pin + Lenis 스무스 스크롤 통합 — 4단계 타임라인.
        </p>
        <div className='rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden'>
          {HERO_PHASES.map((p, i) => (
            <div
              key={p.phase}
              className={`grid grid-cols-[120px_1fr] md:grid-cols-[160px_140px_1fr] gap-3 md:gap-6 px-5 py-4 md:px-7 md:py-5 ${
                i < HERO_PHASES.length - 1 ? 'border-b border-white/10' : ''
              }`}
            >
              <span className='font-paperlogy-800 text-base md:text-lg'>{p.phase}</span>
              <span className='font-mono text-sm text-gray-400'>{p.range}</span>
              <span className='col-span-2 md:col-span-1 font-pretendard-400 text-sm md:text-base text-white/85'>
                {p.body}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 추가 기술 디테일 */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16'>
        <Card theme='dark'>
          <h4 className='font-paperlogy-800 text-lg mb-3'>비디오 최적화</h4>
          <ul className='flex flex-col gap-2 font-pretendard-400 text-sm leading-relaxed text-white/80'>
            <li>· IntersectionObserver lazy-load (rootMargin 200px)</li>
            <li>· WebM 우선, MP4 fallback</li>
            <li>· poster + 로딩 스피너 (canplay 동기화)</li>
          </ul>
        </Card>
        <Card theme='dark'>
          <h4 className='font-paperlogy-800 text-lg mb-3'>다국어 동기화</h4>
          <ul className='flex flex-col gap-2 font-pretendard-400 text-sm leading-relaxed text-white/80'>
            <li>· KO/EN/JA 폰트 크기가 달라 lang 변경 시 GSAP 타임라인 재생성</li>
            <li>· lift 거리도 언어별 동적 재계산</li>
          </ul>
        </Card>
        <Card theme='dark'>
          <h4 className='font-paperlogy-800 text-lg mb-3'>접근성</h4>
          <ul className='flex flex-col gap-2 font-pretendard-400 text-sm leading-relaxed text-white/80'>
            <li>· prefers-reduced-motion 감지 시 애니메이션 스킵</li>
            <li>· 모바일·터치 환경 자동 감지하여 Lenis 비활성</li>
          </ul>
        </Card>
      </div>

      {/* 사이트 전체 + 다국어 */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
        <Card theme='dark'>
          <h4 className='font-paperlogy-800 text-lg mb-4'>사이트 섹션 흐름</h4>
          <p className='font-mono text-sm md:text-base text-white/85 leading-relaxed'>
            Hero → Business → Flagship → Purpose → Founder → News → Backers → Partners → Mission →
            Contact
          </p>
          <div className='mt-6 pt-6 border-t border-white/10'>
            <p className='font-pretendard-600 text-sm text-gray-400 mb-2'>배포 아키텍처</p>
            <p className='font-pretendard-400 text-sm text-white/80 leading-relaxed'>
              Next.js Static Export → Cloudflare Pages CDN.
              <br />
              문의 폼은 Cloudflare Pages Functions로 처리.
            </p>
          </div>
        </Card>
        <Card theme='dark'>
          <h4 className='font-paperlogy-800 text-lg mb-4'>다국어 시스템</h4>
          <ul className='flex flex-col gap-2 font-pretendard-400 text-sm leading-relaxed text-white/80'>
            <li>· 3개 언어 지원 — KO · EN · JA · 번역 키 1,137개</li>
            <li>· 브라우저 타임존 기반 자동 언어 선택 (Asia/Seoul → KO, Asia/Tokyo → JA, 그 외 → EN)</li>
            <li>· 언어별 폰트 자동 전환 — KO: Pretendard / EN: M PLUS U / JA: Kiwi Maru</li>
            <li>
              · <code className='font-mono text-white/90'>?lang=</code> 쿼리로 공유 가능한 링크 지원
            </li>
          </ul>
        </Card>
      </div>
    </Section>
  )
}
