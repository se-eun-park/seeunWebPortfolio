# 박세은 포트폴리오 기획서

**지원**: 키다리X레진 2026 상반기 프론트엔드 인턴
**포맷**: PPT 16:9 (1920×1080)
**총 분량**: 약 25장

---

## 전체 목차

| # | 슬라이드 |
|---|---|
| 1 | 표지 |
| 2 | About Me |
| 3 | Skills |
| 4 | Project 1 — dcamp-ui (개요) |
| 5 | dcamp-ui (문제 정의 + 의사결정) |
| 6 | dcamp-ui (MCP 서버 구조) |
| 7 | dcamp-ui (10개 Tool) |
| 8 | dcamp-ui (경계 설계) |
| 9 | dcamp-ui (결과) |
| 10 | Project 2 — dawnstreet.kr (개요) |
| 11 | dawnstreet (Hero 영상 제작 흐름) |
| 12 | dawnstreet (Hero 섹션 기술 디테일) |
| 13 | dawnstreet (사이트 전체 + 다국어) |
| 14 | Project 2.5 — Seedance Studio |
| 15 | Project 3 — LIPS Admin (개요) |
| 16 | LIPS (대시보드 + 6개 차트) |
| 17 | LIPS (선정 기업 관리) |
| 18 | LIPS (기술 디테일) |
| 19 | Project 4 — SSAFICE (개요) |
| 20 | SSAFICE (본인 기여 4가지) |
| 21 | PickCha (간단) |
| 22 | 마무리 / 연락처 |

---

# 슬라이드 1 — 표지

## 내용
- **메인 타이틀**: Portfolio
- **이름**: 박세은 (Park Se-eun)
- **직무**: Frontend Developer
- **연도**: 2026
- **한 줄 소개**: 디자인 안목과 구현 능력을 동시에 다루는 프론트엔드 개발자

## 자료
없음

---

# 슬라이드 2 — About Me

## 내용

### 기본 정보
- 이름: 박세은
- 직무: Frontend Developer
- 소속: 주식회사 여명거리 (2025.07 ~ 재직 중)

### 한 줄 소개
좋아하는 분야의 화면을 직접 만드는 일이 잘 맞는 사람입니다.

### 강점 3가지
1. **디자인 + 개발 동시** — 시안 없이 디자인부터 구현까지 단독 가능
2. **AI 도구·MCP 적극 활용** — MCP 서버 직접 구축, 필요한 도구 자체 제작
3. **어드민·UI 시스템 관심** — 부트캠프 + 회사에서 운영 시스템 직접 설계·개발

### 연락처
- 이메일: [본인 확인 필요]
- GitHub: github.com/se-eun-park
- Threads: [본인 확인 필요]

## 자료
없음 (텍스트만)

## 본인 확인 필요
- 이메일·Threads 정확한 값

---

# 슬라이드 3 — Skills

## 내용

### Frontend
React · Next.js · Svelte / SvelteKit · TypeScript · Tailwind CSS · GSAP · Lenis · Zustand · TanStack Query · React Router · FSD 아키텍처

### Backend (보조)
Supabase (Auth, DB, Storage) · Node.js · Cloudflare Workers · Cloudflare Pages · AWS EC2

### Design
Figma · GPT 이미지 생성 · Gemini · Grok 영상 생성 · Seedance API

### AI 협업 도구
Claude Code · MCP 서버 직접 제작 · Figma MCP · Supabase MCP · GitHub MCP · 자체 AI 스킬 제작 · 자체 영상 생성기 제작

## 자료
없음

---

# 슬라이드 4 — Project 1: dcamp-ui (개요)

## 내용

### 프로젝트명
**dcamp-ui** (D-Camp Design System MCP)

### 자기소개서 연결
자기소개서 2번 문항에서 언급한 프로젝트

### 한 줄 소개
AI 에이전트가 일관된 디자인 패턴으로 컴포넌트를 설치·생성하도록 돕는 MCP 서버

### 메타 정보
- 기간: 2026.02 ~ 04 (본인 확인 필요)
- 역할: 단독 설계·구현 (MCP 부분)
- 결과: 클라이언트 자사 도입 제안 받음

### 기술 스택
Next.js 16 · TypeScript · Tailwind CSS v4 · @modelcontextprotocol/sdk · AWS EC2 · FSD 패턴

### 규모
- 컴포넌트 72개 (common 30 / widget 42)
- MCP Tool 10개
- 디자인 토큰 + 디자인 스펙 6개 카테고리

## 자료
- **공식 문서 페이지 메인 스크린샷** (사이드바 + 컴포넌트 카탈로그)

---

# 슬라이드 5 — dcamp-ui (문제 정의 + 의사결정)

## 내용

### 문제 상황
1. **환경**: 매주 기획과 디자인이 바뀌고, 디자이너 없이 프론트엔드 4명이 UI/UX까지 책임지는 환경
2. **작업 방식**: 팀은 이미 AI로 화면 초안을 만들고 사람이 다듬는 흐름
3. **문제**: 정적인 라이브러리로는 부족했고, AI가 패턴을 참조하면서도 변주 가능한 형태가 필요

### 의사결정
팀장님 지시는 "임시 디자인 패턴을 컴포넌트로 만들어두라" 였지만, **MCP 서버로 만들자고 제안**.

### 비교
| 항목 | 컴포넌트 라이브러리 | MCP 서버 |
|---|---|---|
| 변형 가능성 | 고정 (install 기반) | 가변 (참조 기반) |
| AI 통합 | 별도 가이드 필요 | 네이티브 통합 |
| 변경 대응 | 코드 수정 | 메타데이터 수정 |
| 우리 환경 적합도 | ❌ | ⭕ |

### 결과
제안 채택 → 단독 구축

## 자료
없음

---

# 슬라이드 6 — dcamp-ui (MCP 서버 구조)

## 내용

### 아키텍처
```
[팀원의 Claude Code / Cursor]
            ↓ MCP 자연어 호출 (HTTP)
[dcamp-ui MCP Server — Next.js 16 API Route on AWS EC2]
  ├ 10개 Tool
  ├ 4개 핵심 파일 (registry / templates / specs / patterns)
  └ 72개 컴포넌트 메타데이터
```

### 엔드포인트
POST http://[AWS-IP]:9000/api/mcp

### 클라이언트 연결 방법
```bash
claude mcp add --transport http dcamp-ui http://[AWS-IP]:9000/api/mcp -s project
```

## 자료
- **간단한 아키텍처 다이어그램** (Claude 디자인이 직접 그림)

## 본인 확인 필요
- AWS IP 공개 여부 (`43.201.219.122`)

---

# 슬라이드 7 — dcamp-ui (10개 Tool)

## 내용

### 핵심 워크플로우 도구 (4개)

**1. resolve_component**
자연어 → USE_EXISTING / CREATE_NEW / MANDATORY 3분기 결정

**2. get_mandatory_component**
변형 금지 컴포넌트 사용법 반환 (AppLayout, Sidebar, DataTable)

**3. clarify_component_usage**
사용자에게 자연어 질문으로 props 옵션 묻기

**4. get_design_guide**
신규 컴포넌트 생성용 가이드 + 유사 컴포넌트 코드 반환

### 보조 도구 (6개)

- **list_components** — 전체 72개 컴포넌트 목록
- **get_component_meta** — 상세 메타데이터 (props, 의존성, 템플릿)
- **install_component_plan** — 설치 계획 (파일 + 경로)
- **get_global_css** — 디자인 토큰 globals.css 반환
- **get_spec** — 디자인 스펙 6개 카테고리 조회
- **get_component_pattern** — 자연어 → FSD 레이어 매핑

## 자료
없음

---

# 슬라이드 8 — dcamp-ui (경계 설계)

## 내용

### 가장 많은 시간을 쓴 일
**고정과 변주의 경계 설계** — 무엇을 고정하고 무엇을 열어둘지 정하는 일

### 고정 영역
- AppLayout 구조
- Sidebar 형태
- DataTable 구조
- 디자인 토큰 (color, typography, spacing)
- 아이콘 시스템
- 다크모드 방식

### 변주 허용
- 페이지 레이아웃 조합
- 컴포넌트 배치
- 부가 스타일링
- 콘텐츠 구조
- 페이지별 위젯 조합

### 구현 방법
MCP 서버의 `instructions` 필드에 강제 규칙 명시. AI 에이전트가 출력 단계에서 규칙을 어기지 않도록 통제.

### 예시 (instructions 일부)
```
## 강제 규칙 (예외 없음)

### AppLayout은 모든 페이지의 루트 레이아웃
- 변형(fork/수정)하지 않습니다
- props만 전달하여 사용합니다

// ❌ 금지
<div className="flex">
  <aside>...</aside><main>...</main>
</div>
```

## 자료
없음

---

# 슬라이드 9 — dcamp-ui (결과)

## 내용

### 1. 일관성 확보
모든 페이지의 공통 컴포넌트와 레이아웃이 일관되게 유지됨.

### 2. 협업 가속
팀원 모두가 같은 언어로 UI/UX를 논의하게 되어 디자인 발전 속도가 눈에 띄게 빨라짐.

### 3. 외부 도입 제안
클라이언트로부터 자사 서비스에 활용할 수 있게 가공해줄 수 있냐는 제안을 받음.

## 자료
- **Before/After 스크린샷** 또는 **사용 사례 스크린샷** (선택)

## 본인 확인 필요
- 클라이언트 제안 디테일 (누가, 어떤 자리에서 했는지 한 줄)

---

# 슬라이드 10 — Project 2: dawnstreet.kr (개요)

## 내용

### 프로젝트명
**dawnstreet.kr** (주식회사 여명거리 회사 소개 사이트)

### 자기소개서 연결
자기소개서 3번 문항에서 언급한 프로젝트

### 한 줄 소개
디자인 시안도 디자이너 가이드도 없이, 디자인부터 영상까지 혼자 완성한 회사 소개 사이트

### 메타 정보
- 기간: [본인 확인 필요]
- 역할: 디자인·영상·개발 단독
- 배포: https://www.dawnstreet.kr/ (서비스 중)

### 기술 스택
Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · GSAP · Lenis · Cloudflare Pages

### AI / 제작 도구
GPT 이미지 생성 · Gemini · Grok · Seedance API · 자체 영상 생성기

## 자료
- **Hero 영상 GIF** (사이트 메인 영상)

## 본인 확인 필요
- 작업 기간 정확히
- 사이트 현재 일부 디자인이 변경된 상태 표기 방향 (예: "Hero 섹션 및 핵심 연출은 본인 작업" 캡션 추가 여부)

---

# 슬라이드 11 — dawnstreet (Hero 영상 제작 흐름)

## 내용

### 영상 제작 전체 흐름

**STEP 1 — 캐릭터 디자인**
회사 서비스의 마스코트 캐릭터 디자인
- 도구: GPT 이미지 생성

**STEP 2 — 씬 스토리보드 작성**
각 씬의 상황·동작·시각 요소 정리한 스토리보드
- 도구: ChatGPT Gem (커스텀 GPT)

**STEP 3 — 씬별 사물·배경 이미지 생성**
스토리보드의 각 씬에 들어갈 사물·배경 이미지 생성
- 도구: Gemini 이미지 생성

**STEP 4 — 씬별 영상 생성**
Seedance API를 직접 호출하는 영상 생성기로 씬 영상 생성
- 도구: Seedance API (OpenRouter 경유), 자체 제작 영상 생성기
- 이유: 유료 구독은 비싸고 종량제 API가 더 효율적이라 직접 제작

**STEP 5 — 컷편집·합성**
씬 영상들을 이어 붙여 hero 영상 완성
- 도구: [본인 확인 필요]

## 자료
- **마스코트 캐릭터 이미지** (STEP 1)
- **스토리보드 캡처** (STEP 2)
- **씬별 사물·배경 이미지 3-4장** (STEP 3)
- **영상 생성기 UI 스크린샷** (STEP 4)
- **완성된 hero 영상 GIF** (STEP 5)

## 본인 확인 필요
- 컷편집 도구 이름

---

# 슬라이드 12 — dawnstreet (Hero 섹션 기술 디테일)

## 내용

### Hero 섹션 스크롤 연출 — 4단계 GSAP 타임라인

**Phase 0**: 초기 상태 (키네틱 슬로건 + 작은 비디오)
**Phase 1 (0 → 0.5)**: 키네틱 슬로건 0.45배 축소 + 비디오 박스 width 100% 확장 + Y축 lift
**Phase 2 (0.5 → 0.85)**: 비디오 박스 height 105vh 확장 (뷰포트 가장자리 클립)
**Phase 3 (0.85 → 1.0)**: 풀스크린 비디오 위에 최종 H1 페이드인
**HOLD (1.0 → 2.0)**: 사용자가 영상을 충분히 볼 수 있도록 1뷰포트 더 유지

### 추가 기술 디테일

**비디오 최적화**
- IntersectionObserver로 lazy-load (rootMargin 200px)
- WebM 우선, MP4 fallback
- poster 이미지 + 로딩 스피너 (canplay 이벤트 동기화)

**다국어 동기화**
- KO/EN/JA 마다 폰트 크기가 달라서 `lang` 변경 시 GSAP 타임라인 자체 재생성
- lift 거리도 언어별 동적 재계산

**접근성**
- `prefers-reduced-motion` 감지 시 애니메이션 스킵
- 모바일·터치 환경 자동 감지하여 Lenis 비활성

### 통합
GSAP + ScrollTrigger pin + Lenis 스무스 스크롤 통합

## 자료
없음 (타임라인 다이어그램은 Claude 디자인이 직접 그림)

---

# 슬라이드 13 — dawnstreet (사이트 전체 + 다국어)

## 내용

### 사이트 섹션 흐름
Hero → Business → Flagship → Purpose → Founder → News → Backers → Partners → Mission → Contact

### 다국어 시스템
- 3개 언어 지원: KO · EN · JA
- 번역 키 1,137개
- 브라우저 타임존 기반 자동 언어 선택
  - Asia/Seoul → KO
  - Asia/Tokyo → JA
  - 기타 → EN
- 언어별 폰트 자동 전환
  - KO: Pretendard
  - EN: M PLUS U
  - JA: Kiwi Maru
- `?lang=` 쿼리로 공유 가능한 링크 지원

### 배포 아키텍처
Next.js Static Export → Cloudflare Pages CDN
+ 문의 폼은 Cloudflare Pages Functions로 처리

## 자료
- **하단 다른 섹션 스크린샷 3-4장 작게** (선택)

---

# 슬라이드 14 — Project 2.5: Seedance Studio

## 내용

### 프로젝트명
**Seedance Studio**

### 한 줄 소개
Seedance API를 직접 호출하는 개인용 영상 생성기

### 제작 이유
Seedance 유료 구독은 비싸고, 종량제 API가 더 효율적이라 직접 만듦. dawnstreet hero 영상 제작에 실제 사용.

### 기술 스택
SvelteKit · Cloudflare Workers · TypeScript · Tailwind CSS v4 · OpenRouter API · Seedance 2.0

### 핵심 기능

**1. 비동기 흐름**
- Submit → Poll (5초 간격) → Done / Cancel
- AbortController로 60초 API 타임아웃 + 30분 폴링 한도

**2. 풍부한 입력 옵션**
- 프롬프트 (5~5,000자)
- 시작/끝 프레임 (first_frame / last_frame 보간)
- 캐릭터 / 물체 레퍼런스 (여러 개 가능)
- 길이 (4~15초), 비율 (6종), 해상도 (480p/720p/1080p)

**3. 비즈니스 규칙 UX 변환**
- "끝 이미지 + 캐릭터 레퍼런스" 동시 사용 불가 같은 API 상호 배타를 UX 가이드 메시지로 변환

**4. 운영 전용**
- 본인 전용 세션 인증

## 자료
- **생성기 UI 스크린샷** (form 화면)

## 본인 확인 필요
- GitHub 공개 여부

---

# 슬라이드 15 — Project 3: LIPS Admin (개요)

## 내용

### 프로젝트명
**LIPS Admin**

### 자기소개서 연결
자기소개서 4번 문항에서 언급한 프로젝트

### 한 줄 소개
정부지원 사업 운영 어드민

### 메타 정보
- 기간: 약 2개월 (개발 + 유지보수)
- 역할: 단독 풀스택 개발

### 기술 스택
SvelteKit 2.22 · Svelte 5 (runes) · TypeScript · Tailwind CSS v4 · Supabase · ag-grid · Chart.js

### 어드민 규모
- 어드민 라우트 20개+
- 대시보드 차트 6종
- 폼 섹션 8개
- 심사 워크플로우 3단계

## 자료
- **LIPS 대시보드 Figma PNG** (메인 화면)

## 본인 확인 필요
- 부제 표현 — "정부지원 사업 운영 어드민" OK? 더 구체적으로 적을 수 있는 표현?

---

# 슬라이드 16 — LIPS (대시보드 + 6개 차트)

## 내용

### 대시보드 구성
6개 영역의 사업 성과를 한눈에 추적

### 차트 6종
1. 📈 선정 기업 (Selected Companies)
2. 👥 고용 (Employment)
3. 💰 매출 (Sales)
4. 📚 지적재산권 (Intellectual Property)
5. ✈️ 수출 (Export)
6. 🏦 투자 유치 (Investment)

### 기술 디테일
- Chart.js + chartjs-plugin-datalabels
- 6개월 / 1년 기간 필터
- 데이터의 최신 날짜를 자동 감지해 기준점으로 설정 (동적 anchor date)
- 메인 탭 (companies/employment/sales) + 성과 탭 (ip/export/investment) 독립적 상태

## 자료
- **대시보드 Figma PNG** (큰 사이즈, 차트들 잘 보이게)

---

# 슬라이드 17 — LIPS (선정 기업 관리)

## 내용

### 선정 기업 상세 페이지
한 기업당 8개 섹션의 풀스택 폼

1. 기본 정보
2. LIPS-II 정보
3. 예산 & 파일
4. 매출 (Revenue)
5. 고용 (Employment)
6. 투자 (Investment)
7. 수출 (Export)
8. 지적재산권 (IP)

### 추가 기능
- URL 쿼리 기반 edit 모드 (`?edit=true`)

### 3단 심사 워크플로우
1. **Interim Review** (중간 점검) — 사업 중간 시점
2. **Monthly Report** (월별 보고) — 매월 진행 보고
3. **Final Review** (최종 점검) — 사업 종료 시점

## 자료
- **선정 기업 상세 화면 Figma PNG**

---

# 슬라이드 18 — LIPS (기술 디테일)

## 내용

### 6가지 기술 디테일

**1. Svelte 5 runes 풀 활용**
$state / $derived / $effect 신문법으로 어드민 전체 컴포넌트 구성

**2. 동적 anchor date 필터**
데이터의 최신 날짜 자동 감지 → 6개월 / 1년 기간 필터 자동 적용

**3. 3단 참조 데이터 모델**
sales_performance → revenue → selected_company → selection_year_round

**4. ag-grid 활용**
ag-grid-svelte로 대용량 데이터 그리드 구현

**5. 엑셀 / 파일 처리**
- exceljs로 엑셀 내보내기
- jszip으로 파일 묶음 처리

**6. 자동 이메일 발송**
Resend API로 운영자에게 자동 이메일 발송

## 자료
- **추가 LIPS Figma PNG 3-4장** (데이터 그리드 / 폼 / 통계 / 기타 화면)

---

# 슬라이드 19 — Project 4: SSAFICE (개요)

## 내용

### 프로젝트명
**SSAFICE** (SSAFY × ICE)

### 자기소개서 연결
자기소개서 4번 문항에서 언급한 프로젝트

### 한 줄 소개
여러 메신저 채널에 흩어진 공지를 한 곳에서 관리하는 교육생용 일정 관리 서비스

### 주요 성과
🏆 **SSAFY 슈퍼앱 프로젝트 전국 3팀 선정** + 삼성 SDI 협업

### 메타 정보
- 소속: 삼성청년SW아카데미 (SSAFY) 부트캠프 프로젝트
- 역할: 프론트엔드 팀장 + 교육생 페이지 대부분 구현
- GitHub: https://github.com/se-eun-park/SSAFICE-Demo

### 기술 스택
React 18 · TypeScript · Vite · Zustand · React Query · Tailwind CSS · FSD 아키텍처

### 부가 라이브러리
dnd-kit · react-day-picker · react-markdown · axios · date-fns

## 자료
- **SSAFICE 메인 화면 스크린샷** (교육생용 To-do 화면)

---

# 슬라이드 20 — SSAFICE (본인 기여 4가지)

## 내용

### 1. FSD 아키텍처 도입
- 팀장으로서 컨벤션 정립 + FSD 6레이어 아키텍처 설계 제안
- FSD가 익숙지 않은 팀원을 위해 문서화 공유
- `eslint-plugin-fsd-import` 로 강제 적용

### 2. 합성 컴포넌트 패턴
- 모달·드롭다운을 블록처럼 조립 가능한 합성 컴포넌트로 구현
- 디자인 변경이 잦은 환경에 효과적으로 대응
- 예: `DropDown.Image`, `DropDown.Title` 등 슬롯 패턴

### 3. 날짜 포맷 커스텀 훅
- `useDateFormatter` — 8가지 포맷 타입 지원
  - YYYY-MM-DD, MM월 DD일 ?요일, D-? (D-day) 등
  - 백엔드 LocalDateTime 포맷 (`API REQUEST: start/end`) 까지 명시적 처리

### 4. Vite 청크 최적화 — 빌드 속도 28.8% 향상 ⚡

**문제**
청크 사이즈 500KB 초과 → 초기 로딩 성능 저하

**해결**
- `rollup-plugin-visualizer`로 번들 분석
- Lazy-loading + manualChunks 적용

**결과**
- 청크 크기: **2000KB → 650KB**
- 빌드 속도: **8.82s → 6.28s**
- **빌드 속도 28.8% 향상**

## 자료
없음

---

# 슬라이드 21 — PickCha

## 내용

### 프로젝트명
**PickCha**

### 자기소개서 연결
자기소개서 1번 문항에서 언급한 캐릭터 챗 토이 프로젝트

### 한 줄 소개
타사 웹툰 서비스의 캐릭터 챗 기능을 써본 뒤 만들어본 캐릭터 챗 사이트

### 메타 정보
- URL: pickcha.vercel.app
- 현재 상태: 퍼블리싱 완료 (AI 챗 기능은 비용 문제로 보류)

### 본인 멘트
"더미 데이터로 채울 캐릭터 설정을 짜는 일조차 유독 즐거웠습니다"

## 자료
- **PickCha 메인 스크린샷**

---

# 슬라이드 22 — 마무리 / 연락처

## 내용

### 감사 인사
읽어주셔서 감사합니다

### 연락처
- 이름: 박세은 (Park Se-eun)
- 직무: Frontend Developer
- 이메일: [본인 확인 필요]
- GitHub: github.com/se-eun-park
- Threads: [본인 확인 필요]

## 자료
없음

## 본인 확인 필요
- 이메일·Threads 핸들

---

# 본인이 채워야 할 자료 체크리스트

| 슬라이드 | 자료 | 우선순위 |
|---|---|---|
| 4 | dcamp-ui 공식 문서 페이지 스크린샷 | ⭐⭐⭐ |
| 9 | dcamp-ui Before/After 또는 사용 사례 스크린샷 | ⭐⭐ |
| 10, 11 | dawnstreet hero 영상 GIF | ⭐⭐⭐ |
| 11 | 마스코트 캐릭터 / 스토리보드 / 씬 이미지 | ⭐⭐⭐ |
| 11, 14 | 영상 생성기 UI 스크린샷 | ⭐⭐⭐ |
| 13 | dawnstreet 다른 섹션 스크린샷 (선택) | ⭐ |
| 15, 16 | LIPS 대시보드 Figma PNG | ⭐⭐⭐ |
| 17 | LIPS 선정 기업 상세 PNG | ⭐⭐⭐ |
| 18 | LIPS 추가 PNG 3-4장 | ⭐⭐ |
| 19 | SSAFICE 메인 스크린샷 | ⭐⭐⭐ |
| 21 | PickCha 메인 스크린샷 | ⭐⭐ |

---

# 본인 확인 필요한 정보

| 항목 | 슬라이드 |
|---|---|
| 이메일·Threads 핸들 | 2, 22 |
| dcamp-ui 작업 기간 정확히 | 4 |
| AWS IP 공개 여부 | 6 |
| 클라이언트 제안 디테일 (한 줄) | 9 |
| dawnstreet 작업 기간 정확히 | 10 |
| dawnstreet 라이브 사이트 표기 방향 | 10 |
| 컷편집 도구 이름 | 11 |
| Seedance Studio GitHub 공개 여부 | 14 |
| LIPS 부제 표현 톤 | 15 |

---

**END**
