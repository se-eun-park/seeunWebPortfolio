import Section from '@/components/Section'
import ProjectHeader from '@/components/ProjectHeader'
import Card from '@/components/Card'

const CHARTS = [
  { icon: '📈', name: '선정 기업', en: 'Selected Companies' },
  { icon: '👥', name: '고용', en: 'Employment' },
  { icon: '💰', name: '매출', en: 'Sales' },
  { icon: '📚', name: '지적재산권', en: 'Intellectual Property' },
  { icon: '✈️', name: '수출', en: 'Export' },
  { icon: '🏦', name: '투자 유치', en: 'Investment' },
]

const FORM_SECTIONS = [
  '기본 정보',
  'LIPS-II 정보',
  '예산 & 파일',
  '매출 (Revenue)',
  '고용 (Employment)',
  '투자 (Investment)',
  '수출 (Export)',
  '지적재산권 (IP)',
]

const REVIEW_STEPS = [
  { name: 'Interim Review', label: '중간 점검', body: '사업 중간 시점' },
  { name: 'Monthly Report', label: '월별 보고', body: '매월 진행 보고' },
  { name: 'Final Review', label: '최종 점검', body: '사업 종료 시점' },
]

const TECH = [
  {
    title: 'Svelte 5 runes 풀 활용',
    body: '$state / $derived / $effect 신문법으로 어드민 전체 컴포넌트를 구성.',
  },
  {
    title: '동적 anchor date 필터',
    body: '데이터의 최신 날짜를 자동 감지해 기준점으로 설정. 6개월 / 1년 기간 필터 자동 적용.',
  },
  {
    title: '3단 참조 데이터 모델',
    body: 'sales_performance → revenue → selected_company → selection_year_round.',
  },
  {
    title: 'ag-grid 활용',
    body: 'ag-grid-svelte로 대용량 데이터 그리드 구현.',
  },
  {
    title: '엑셀 / 파일 처리',
    body: 'exceljs로 엑셀 내보내기, jszip으로 파일 묶음 처리.',
  },
  {
    title: '자동 이메일 발송',
    body: 'Resend API로 운영자에게 자동 이메일 발송.',
  },
]

export default function Lips() {
  return (
    <Section>
      <ProjectHeader
        index='04 · LIPS Admin'
        name='LIPS Admin'
        tagline='정부지원 사업 운영 어드민 — 단독 풀스택 개발.'
        meta={[
          { label: '기간', value: '약 2개월 (개발 + 유지보수)' },
          { label: '역할', value: '단독 풀스택 개발' },
          { label: '규모', value: '어드민 라우트 20개+ · 차트 6종 · 폼 섹션 8개' },
        ]}
        stack={[
          'SvelteKit 2.22',
          'Svelte 5 (runes)',
          'TypeScript',
          'Tailwind CSS v4',
          'Supabase',
          'ag-grid',
          'Chart.js',
        ]}
      />

      {/* 대시보드 + 차트 */}
      <div className='mb-16'>
        <h3 className='font-paperlogy-800 text-2xl md:text-3xl mb-2'>대시보드 — 6개 차트</h3>
        <p className='font-pretendard-400 text-base text-black-400/75 mb-6'>
          6개 영역의 사업 성과를 한눈에 추적. Chart.js + chartjs-plugin-datalabels, 6개월 / 1년
          기간 필터, 메인·성과 탭 독립 상태.
        </p>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4'>
          {CHARTS.map((c, i) => (
            <div
              key={c.name}
              className='rounded-2xl border border-black-400/10 bg-black-400/[0.02] p-5 md:p-6'
            >
              <div className='flex items-center justify-between mb-3'>
                <span className='text-3xl'>{c.icon}</span>
                <span className='font-manrope text-xs tracking-widest text-gray-500'>
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className='font-paperlogy-800 text-lg'>{c.name}</p>
              <p className='font-pretendard-400 text-sm text-black-400/60 mt-1'>{c.en}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 선정 기업 관리 */}
      <div className='mb-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
        <Card>
          <h3 className='font-paperlogy-800 text-2xl mb-2'>선정 기업 상세</h3>
          <p className='font-pretendard-400 text-sm text-black-400/70 mb-5'>
            한 기업당 8개 섹션의 풀스택 폼. URL 쿼리 기반 edit 모드 지원
            (<code className='font-mono'>?edit=true</code>).
          </p>
          <ol className='grid grid-cols-2 gap-x-4 gap-y-2 font-pretendard-500 text-base'>
            {FORM_SECTIONS.map((s, i) => (
              <li key={s} className='flex gap-3'>
                <span className='font-manrope text-sm text-gray-500'>
                  {String(i + 1).padStart(2, '0')}
                </span>
                {s}
              </li>
            ))}
          </ol>
        </Card>
        <Card>
          <h3 className='font-paperlogy-800 text-2xl mb-5'>3단 심사 워크플로우</h3>
          <ol className='flex flex-col gap-4'>
            {REVIEW_STEPS.map((r, i) => (
              <li
                key={r.name}
                className='flex gap-4 items-start pb-4 last:pb-0 border-b last:border-b-0 border-black-400/10'
              >
                <span className='font-manrope text-sm tracking-widest text-gray-500 pt-1 min-w-8'>
                  0{i + 1}
                </span>
                <div>
                  <p className='font-paperlogy-800 text-lg'>{r.name}</p>
                  <p className='font-pretendard-500 text-sm text-black-400/75'>
                    {r.label} · {r.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Card>
      </div>

      {/* 6가지 기술 디테일 */}
      <div>
        <h3 className='font-paperlogy-800 text-2xl md:text-3xl mb-6'>6가지 기술 디테일</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
          {TECH.map((t, i) => (
            <Card key={t.title}>
              <span className='font-manrope text-sm tracking-widest text-gray-500'>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h4 className='font-paperlogy-800 text-lg mt-2 mb-2'>{t.title}</h4>
              <p className='font-pretendard-400 text-sm leading-relaxed text-black-400/75'>
                {t.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
