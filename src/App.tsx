import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div
      className="min-h-screen bg-bg-neutral-base flex items-center justify-center p-8"
      data-pimitive-token="Mode-1"
      data-semantic-token="light-mode"
      data-component-token="mint"
    >
      <div className="max-w-2xl w-full text-center">
        <div className="flex justify-center gap-8 mb-8">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="h-24 w-24 hover:drop-shadow-lg transition-all" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="h-24 w-24 hover:drop-shadow-lg transition-all animate-spin-slow" alt="React logo" />
          </a>
        </div>

        <h1 className="font-pretendard text-typo-heading-xlarge text-text-neutral-base mb-8">
          Vite + React + Tailwind CSS
        </h1>

        <div className="bg-bg-neutral-surface rounded-large shadow-xl p-8 mb-6">
          {/* Button Component Examples */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button type="primary" onClick={() => setCount((c) => c + 1)}>
              Primary
            </Button>
            <Button type="secondary">Secondary</Button>
            <Button type="normal">Normal</Button>
            <Button type="ghost">Ghost</Button>
          </div>

          <p className="font-pretendard text-typo-body-medium-regular text-text-neutral-description">
            count is {count}
          </p>
          <p className="mt-4 text-text-neutral-description text-typo-body-small-regular">
            Edit <code className="bg-bg-neutral-level1 px-2 py-1 rounded-small">src/App.tsx</code> and save to test HMR
          </p>
        </div>

        <p className="text-text-neutral-description text-typo-body-small-regular">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
