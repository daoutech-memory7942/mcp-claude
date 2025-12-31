import Button from './components/Button'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Button Component Demo
        </h1>
        <p className="text-gray-600 mb-8">
          All variants from Figma design with hover states
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-8">
            {/* Primary Buttons */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Primary</h2>
              <div className="flex gap-4">
                <Button type="primary">Button</Button>
                <Button type="primary">Hover me</Button>
              </div>
            </div>

            {/* Secondary Buttons */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Secondary</h2>
              <div className="flex gap-4">
                <Button type="secondary">Button</Button>
                <Button type="secondary">Hover me</Button>
              </div>
            </div>

            {/* Normal Buttons */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Normal</h2>
              <div className="flex gap-4">
                <Button type="normal">Button</Button>
                <Button type="normal">Hover me</Button>
              </div>
            </div>

            {/* Ghost Buttons */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Ghost</h2>
              <div className="flex gap-4">
                <Button type="ghost">Button</Button>
                <Button type="ghost">Hover me</Button>
              </div>
            </div>

            {/* All variants in one row */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">All Variants</h2>
              <div className="flex flex-wrap gap-4">
                <Button type="primary">Primary</Button>
                <Button type="secondary">Secondary</Button>
                <Button type="normal">Normal</Button>
                <Button type="ghost">Ghost</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
