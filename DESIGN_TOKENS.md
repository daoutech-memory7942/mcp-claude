# Figma Design Tokens → Tailwind CSS v4

이 프로젝트는 Figma 디자인 토큰을 Tailwind CSS v4에 자동으로 적용하는 시스템입니다.

## 작동 방식

1. `figma-design-token.json` - Figma에서 내보낸 디자인 토큰
2. `scripts/generate-tokens-css.js` - JSON 파싱 스크립트 (Tailwind CSS v4 형식으로 변환)
3. `src/index.css` - 생성된 Tailwind CSS 토큰 (CSS 변수로 정의)

## 사용법

### 1. 토큰 생성 (수동)

Figma 디자인 토큰을 Tailwind CSS v4 형식으로 변환:

```bash
npm run tokens:generate
```

### 2. 자동 감시 모드

`figma-design-token.json` 파일이 변경될 때마다 자동으로 토큰을 업데이트:

```bash
npm run tokens:watch
```

개발 서버와 함께 실행하려면 별도 터미널에서:

```bash
# 터미널 1
npm run dev

# 터미널 2
npm run tokens:watch
```

### 3. 코드에서 사용

생성된 토큰은 Tailwind CSS 클래스로 사용할 수 있습니다:

```jsx
// 색상
<div className="bg-light-primary-500 text-dark-gray-100">
  Hello World
</div>

// 중첩된 객체는 하이픈(-)으로 연결
<button className="bg-light-primary-600 hover:bg-light-primary-700">
  Click me
</button>
```

## 지원하는 토큰 타입

- **색상 (COLOR)**: CSS 변수로 자동 변환 (`--color-*`)

## 파일 구조

```
mcp-claude/
├── figma-design-token.json       # Figma 원본 토큰
├── src/
│   └── index.css                  # 생성된 CSS 토큰 (Tailwind v4 @theme)
└── scripts/
    ├── generate-tokens-css.js     # CSS 생성 스크립트
    └── watch-tokens.js            # 감시 스크립트
```

## 워크플로우

1. Figma에서 디자인 토큰 업데이트
2. `figma-design-token.json` 파일 교체
3. 자동 감시 모드 실행 중이면 자동으로 업데이트됨
4. 그렇지 않으면 `npm run tokens:generate` 실행
5. Vite 개발 서버가 CSS 변경을 감지하고 HMR로 자동 반영

## 주의사항

- Tailwind CSS v4는 CSS 변수 기반의 새로운 설정 방식을 사용합니다
- 모든 토큰은 `@theme` 블록 안에 CSS 변수로 정의됩니다
- 색상은 자동으로 RGBA → HEX 형식으로 변환됩니다
- 개발 서버 실행 중 CSS 파일이 변경되면 즉시 반영됩니다
