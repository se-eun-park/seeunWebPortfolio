import Section from '@/components/Section'
import ProjectHeader from '@/components/ProjectHeader'
import Card from '@/components/Card'

const CONTRIBUTIONS = [
  {
    no: '01',
    title: 'FSD 아키텍처 도입',
    body: '팀장으로서 컨벤션 정립 + FSD 6레이어 아키텍처 설계 제안. 익숙지 않은 팀원을 위해 문서화 공유. eslint-plugin-fsd-import로 강제 적용.',
  },
  {
    no: '02',
    title: '합성 컴포넌트 패턴',
    body: '모달·드롭다운을 블록처럼 조립 가능한 합성 컴포넌트로 구현. 디자인 변경이 잦은 환경에 효과적으로 대응 (예: DropDown.Image, DropDown.Title 슬롯 패턴).',
  },
  {
    no: '03',
    title: '날짜 포맷 커스텀 훅',
    body: 'useDateFormatter — YYYY-MM-DD, MM월 DD일 ?요일, D-? 등 8가지 포맷 타입 지원. 백엔드 LocalDateTime 포맷(API REQUEST: start/end)까지 명시적 처리.',
  },
]

export default function Ssafice() {
  return (
    <Section theme='dark'>
      <ProjectHeader
        theme='dark'
        index='05 · SSAFICE'
        name='SSAFICE'
        tagline='여러 메신저 채널에 흩어진 공지를 한 곳에서 관리하는 교육생용 일정 관리 서비스.'
        highlight={
          <div className='inline-flex items-center gap-3 rounded-full bg-point-green/15 border border-point-green/30 px-4 py-2'>
            <span className='font-paperlogy-800 text-sm text-point-green'>🏆</span>
            <span className='font-pretendard-500 text-sm md:text-base text-white'>
              SSAFY 슈퍼앱 프로젝트 전국 3팀 선정 + 삼성 SDI 협업
            </span>
          </div>
        }
        meta={[
          { label: '소속', value: '삼성청년SW아카데미 (SSAFY) 부트캠프' },
          { label: '역할', value: '프론트엔드 팀장 + 교육생 페이지 대부분 구현' },
          {
            label: 'GitHub',
            value: (
              <a
                href='https://github.com/se-eun-park/SSAFICE-Demo'
                target='_blank'
                rel='noopener noreferrer'
                className='underline decoration-white/30 hover:decoration-white'
              >
                SSAFICE-Demo
              </a>
            ),
          },
        ]}
        stack={[
          'React 18',
          'TypeScript',
          'Vite',
          'Zustand',
          'React Query',
          'Tailwind CSS',
          'FSD',
          'dnd-kit',
          'react-day-picker',
        ]}
      />

      <h3 className='font-paperlogy-800 text-2xl md:text-3xl mb-6'>본인 기여</h3>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6'>
        {CONTRIBUTIONS.map((c) => (
          <Card key={c.no} theme='dark'>
            <span className='font-manrope text-sm tracking-widest text-gray-400'>{c.no}</span>
            <h4 className='font-paperlogy-800 text-xl mt-2 mb-3'>{c.title}</h4>
            <p className='font-pretendard-400 text-sm leading-relaxed text-white/80'>{c.body}</p>
          </Card>
        ))}
      </div>

      {/* 메인 강조: 청크 최적화 */}
      <Card theme='dark'>
        <div className='grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start'>
          <div>
            <span className='font-manrope text-sm tracking-widest text-gray-400'>04</span>
            <h4 className='font-paperlogy-800 text-2xl md:text-3xl mt-2 mb-4'>
              Vite 청크 최적화 — 빌드 속도 28.8% 향상 ⚡
            </h4>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-2'>
              <div>
                <p className='font-pretendard-600 text-sm text-gray-400 mb-2'>문제</p>
                <p className='font-pretendard-400 text-sm leading-relaxed text-white/80'>
                  청크 사이즈 500KB 초과 → 초기 로딩 성능 저하.
                </p>
              </div>
              <div>
                <p className='font-pretendard-600 text-sm text-gray-400 mb-2'>해결</p>
                <p className='font-pretendard-400 text-sm leading-relaxed text-white/80'>
                  rollup-plugin-visualizer로 번들 분석 → Lazy-loading + manualChunks 적용.
                </p>
              </div>
              <div>
                <p className='font-pretendard-600 text-sm text-gray-400 mb-2'>결과</p>
                <ul className='font-pretendard-400 text-sm leading-relaxed text-white/80'>
                  <li>· 청크 2000KB → 650KB</li>
                  <li>· 빌드 8.82s → 6.28s</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-center md:items-end justify-center'>
            <span className='font-paperlogy-800 text-5xl md:text-6xl text-point-green tracking-tight'>
              -28.8%
            </span>
            <span className='font-pretendard-500 text-sm text-gray-400 mt-1'>build time</span>
          </div>
        </div>
      </Card>
    </Section>
  )
}
