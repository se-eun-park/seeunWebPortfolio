import Section from '@/components/Section'
import ProjectHeader from '@/components/ProjectHeader'
import Card from '@/components/Card'

const CORE_TOOLS = [
  {
    name: 'resolve_component',
    desc: '자연어 입력을 USE_EXISTING / CREATE_NEW / MANDATORY 3분기로 결정',
  },
  {
    name: 'get_mandatory_component',
    desc: '변형 금지 컴포넌트(AppLayout, Sidebar, DataTable) 사용법 반환',
  },
  {
    name: 'clarify_component_usage',
    desc: '사용자에게 자연어 질문으로 props 옵션을 묻고 보강',
  },
  {
    name: 'get_design_guide',
    desc: '신규 컴포넌트 생성용 가이드 + 유사 컴포넌트 코드 반환',
  },
]

const AUX_TOOLS = [
  { name: 'list_components', desc: '전체 72개 컴포넌트 목록' },
  { name: 'get_component_meta', desc: '상세 메타데이터 (props · 의존성 · 템플릿)' },
  { name: 'install_component_plan', desc: '설치 계획 (파일 · 경로)' },
  { name: 'get_global_css', desc: '디자인 토큰 globals.css 반환' },
  { name: 'get_spec', desc: '디자인 스펙 6개 카테고리 조회' },
  { name: 'get_component_pattern', desc: '자연어 → FSD 레이어 매핑' },
]

const FIXED = ['AppLayout 구조', 'Sidebar 형태', 'DataTable 구조', '디자인 토큰', '아이콘 시스템', '다크모드 방식']
const FLEXIBLE = ['페이지 레이아웃 조합', '컴포넌트 배치', '부가 스타일링', '콘텐츠 구조', '페이지별 위젯 조합']

const RESULTS = [
  {
    title: '일관성 확보',
    body: '모든 페이지의 공통 컴포넌트와 레이아웃이 일관되게 유지됐습니다.',
  },
  {
    title: '협업 가속',
    body: '팀원 모두가 같은 언어로 UI/UX를 논의하게 되어 디자인 발전 속도가 눈에 띄게 빨라졌습니다.',
  },
  {
    title: '외부 도입 제안',
    body: '클라이언트로부터 자사 서비스에 활용할 수 있게 가공해 줄 수 있냐는 제안을 받았습니다.',
  },
]

export default function DcampUi() {
  return (
    <Section>
      <ProjectHeader
        index='01 · dcamp-ui'
        name='dcamp-ui'
        tagline='AI 에이전트가 일관된 디자인 패턴으로 컴포넌트를 설치·생성하도록 돕는 MCP 서버'
        meta={[
          { label: '기간', value: '2026.02 ~ 04' },
          { label: '역할', value: '단독 설계·구현 (MCP 부분)' },
          { label: '결과', value: '클라이언트 자사 도입 제안' },
          { label: '규모', value: '컴포넌트 72개 · MCP Tool 10개' },
        ]}
        stack={[
          'Next.js 16',
          'TypeScript',
          'Tailwind CSS v4',
          '@modelcontextprotocol/sdk',
          'AWS EC2',
          'FSD',
        ]}
      />

      {/* 문제 정의 + 의사결정 */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-14'>
        <Card>
          <h3 className='font-paperlogy-800 text-xl mb-4'>문제 상황</h3>
          <ul className='flex flex-col gap-3 font-pretendard-400 text-base leading-relaxed text-black-400/80'>
            <li>매주 기획과 디자인이 바뀌고, 디자이너 없이 프론트 4명이 UI/UX까지 책임지는 환경.</li>
            <li>팀은 이미 AI로 화면 초안을 만들고 사람이 다듬는 흐름으로 일하고 있었습니다.</li>
            <li>정적 라이브러리로는 부족했고, AI가 패턴을 참조하면서도 변주할 수 있는 형태가 필요했습니다.</li>
          </ul>
        </Card>
        <Card>
          <h3 className='font-paperlogy-800 text-xl mb-4'>의사결정</h3>
          <p className='font-pretendard-400 text-base leading-relaxed text-black-400/80 mb-5'>
            팀장님 지시는 “임시 디자인 패턴을 컴포넌트로 만들어두라”였지만,{' '}
            <strong className='font-pretendard-600 text-black-400'>
              컴포넌트 라이브러리 대신 MCP 서버로 만들자고 제안
            </strong>
            했습니다.
          </p>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm font-pretendard-400'>
              <thead>
                <tr className='text-left text-gray-500 border-b border-black-400/10'>
                  <th className='py-2 pr-4 font-pretendard-500'>항목</th>
                  <th className='py-2 pr-4 font-pretendard-500'>컴포넌트 라이브러리</th>
                  <th className='py-2 font-pretendard-500'>MCP 서버</th>
                </tr>
              </thead>
              <tbody className='text-black-400/80'>
                <tr className='border-b border-black-400/5'>
                  <td className='py-2 pr-4'>변형 가능성</td>
                  <td className='py-2 pr-4'>고정</td>
                  <td className='py-2'>가변</td>
                </tr>
                <tr className='border-b border-black-400/5'>
                  <td className='py-2 pr-4'>AI 통합</td>
                  <td className='py-2 pr-4'>별도 가이드</td>
                  <td className='py-2'>네이티브</td>
                </tr>
                <tr className='border-b border-black-400/5'>
                  <td className='py-2 pr-4'>변경 대응</td>
                  <td className='py-2 pr-4'>코드 수정</td>
                  <td className='py-2'>메타데이터 수정</td>
                </tr>
                <tr>
                  <td className='py-2 pr-4'>우리 환경 적합도</td>
                  <td className='py-2 pr-4 text-gray-500'>—</td>
                  <td className='py-2 text-black-400'>적합</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* 아키텍처 */}
      <div className='mb-14'>
        <h3 className='font-paperlogy-800 text-2xl mb-5'>MCP 서버 구조</h3>
        <pre className='overflow-x-auto rounded-2xl bg-black-500 text-white p-6 md:p-8 text-sm md:text-base font-mono leading-relaxed'>
{`[팀원의 Claude Code / Cursor]
            ↓ MCP 자연어 호출 (HTTP)
[dcamp-ui MCP Server — Next.js 16 API Route on AWS EC2]
  ├ 10개 Tool
  ├ 4개 핵심 파일 (registry / templates / specs / patterns)
  └ 72개 컴포넌트 메타데이터`}
        </pre>
        <p className='mt-4 font-pretendard-400 text-sm text-gray-500'>
          엔드포인트: POST http://[AWS-IP]:9000/api/mcp
        </p>
      </div>

      {/* 10개 Tool */}
      <div className='mb-14'>
        <h3 className='font-paperlogy-800 text-2xl mb-5'>10개 Tool</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <p className='font-pretendard-600 text-sm text-gray-500 mb-3'>핵심 워크플로우 (4)</p>
            <ul className='flex flex-col gap-3'>
              {CORE_TOOLS.map((t) => (
                <li
                  key={t.name}
                  className='rounded-xl border border-black-400/10 px-4 py-3 bg-black-400/[0.02]'
                >
                  <code className='font-mono text-sm text-black-400'>{t.name}</code>
                  <p className='mt-1 font-pretendard-400 text-sm text-black-400/70'>{t.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className='font-pretendard-600 text-sm text-gray-500 mb-3'>보조 (6)</p>
            <ul className='flex flex-col gap-3'>
              {AUX_TOOLS.map((t) => (
                <li
                  key={t.name}
                  className='rounded-xl border border-black-400/10 px-4 py-3 bg-black-400/[0.02]'
                >
                  <code className='font-mono text-sm text-black-400'>{t.name}</code>
                  <p className='mt-1 font-pretendard-400 text-sm text-black-400/70'>{t.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* 경계 설계 */}
      <div className='mb-14'>
        <h3 className='font-paperlogy-800 text-2xl mb-2'>가장 많은 시간을 쓴 일</h3>
        <p className='font-pretendard-400 text-base text-black-400/75 mb-6'>
          고정과 변주의 경계 설계 — 무엇을 고정하고 무엇을 열어둘지 정하는 일.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <Card>
            <p className='font-pretendard-600 text-sm text-gray-500 mb-3'>고정 영역</p>
            <ul className='flex flex-col gap-2 font-pretendard-500 text-base'>
              {FIXED.map((i) => (
                <li key={i}>· {i}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <p className='font-pretendard-600 text-sm text-gray-500 mb-3'>변주 허용</p>
            <ul className='flex flex-col gap-2 font-pretendard-500 text-base'>
              {FLEXIBLE.map((i) => (
                <li key={i}>· {i}</li>
              ))}
            </ul>
          </Card>
        </div>
        <p className='mt-6 font-pretendard-400 text-sm text-black-400/70'>
          MCP 서버의 <code className='font-mono text-black-400'>instructions</code> 필드에 강제 규칙을
          명시해, AI 에이전트가 출력 단계에서 규칙을 어기지 않도록 통제했습니다.
        </p>
      </div>

      {/* 결과 */}
      <div>
        <h3 className='font-paperlogy-800 text-2xl mb-5'>결과</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
          {RESULTS.map((r, i) => (
            <Card key={r.title}>
              <span className='font-manrope text-sm tracking-widest text-gray-500'>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h4 className='font-paperlogy-800 text-xl mt-2 mb-2'>{r.title}</h4>
              <p className='font-pretendard-400 text-base leading-relaxed text-black-400/75'>
                {r.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
