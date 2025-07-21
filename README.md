# 🧠 MBTI 성격 유형 테스트

MBTI(Myers-Briggs Type Indicator) 기반의 성격 유형 테스트를 제공하는 React 웹 애플리케이션입니다.

## ✨ 주요 기능

- 🔐 **사용자 인증**: 회원가입/로그인 시스템
- 📝 **MBTI 테스트**: 20개 질문을 통한 성격 유형 진단
- 📊 **결과 관리**: 개인별 테스트 결과 저장 및 조회
- 👤 **프로필 관리**: 사용자 프로필 수정
- 🔒 **보안**: JWT 토큰 기반 인증
- 📱 **반응형 디자인**: 모바일/데스크톱 호환

## 🛠️ 기술 스택

### Frontend

- **React 18** - 컴포넌트 기반 UI 라이브러리
- **React Router** - 클라이언트 사이드 라우팅
- **Tailwind CSS** - 유틸리티 우선 CSS 프레임워크
- **Axios** - HTTP 클라이언트
- **Vite** - 빠른 개발 환경 및 빌드 도구

### Backend & Database

- **JSON Server** - 개발용 REST API 서버
- **JWT** - 토큰 기반 인증

## 🚀 설치 및 실행

### 사전 요구사항

- Node.js (v16 이상)
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone [repository-url]
cd my-mbti

# 의존성 설치
npm install
# 또는
yarn install
```

### 개발 환경 실행

```bash
# JSON Server 실행 (포트 5000)
npm run json-server

# 새 터미널에서 React 앱 실행 (포트 5173)
npm run dev
```

### 빌드

```bash
npm run build
```

## 📁 프로젝트 구조

```
src/
├── api/              # API 호출 함수들
├── components/       # 재사용 가능한 컴포넌트
├── data/            # 정적 데이터 (MBTI 질문)
├── pages/           # 페이지 컴포넌트
├── utils/           # 유틸리티 함수 (MBTI 계산)
└── App.jsx          # 메인 앱 컴포넌트
```

## 🎯 MBTI 유형 계산 로직

4가지 차원에서 성격을 분석합니다:

- **E/I**: 외향성(Extraversion) vs 내향성(Introversion)
- **S/N**: 감각(Sensing) vs 직관(iNtuition)
- **T/F**: 사고(Thinking) vs 감정(Feeling)
- **J/P**: 판단(Judging) vs 인식(Perceiving)

## 📝 주요 학습 포인트

- **React Hooks**: useState, useEffect를 활용한 상태 관리
- **React Router**: SPA 라우팅 및 보호된 라우트 구현
- **API 통신**: Axios를 통한 RESTful API 연동
- **인증 시스템**: JWT 토큰 기반 로그인/회원가입
- **상태 관리**: Props drilling을 통한 사용자 상태 관리
- **반응형 UI**: Tailwind CSS를 활용한 모던 UI 구현

## 🔧 개발 과정에서 해결한 문제들

1. **라우팅 보안**: ProtectedRoute 컴포넌트로 인증된 사용자만 접근 가능
2. **상태 동기화**: 로그인 상태를 여러 컴포넌트 간 공유
3. **데이터 검증**: 폼 입력값 유효성 검사
4. **에러 처리**: API 요청 실패 시 사용자 친화적 오류 메시지

## 🎨 UI/UX 특징

- **직관적인 인터페이스**: 단계별 테스트 진행
- **즉시 피드백**: 실시간 응답 및 결과 표시
- **모바일 최적화**: 터치 친화적 인터페이스
- **접근성 고려**: 키보드 네비게이션 지원

---
