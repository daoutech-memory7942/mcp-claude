function ColorTokenDemo() {
  const lightPrimaryColors = [
    { name: '100', class: 'bg-light-primary-100', textClass: 'text-light-primary-100' },
    { name: '200', class: 'bg-light-primary-200', textClass: 'text-light-primary-200' },
    { name: '300', class: 'bg-light-primary-300', textClass: 'text-light-primary-300' },
    { name: '400', class: 'bg-light-primary-400', textClass: 'text-light-primary-400' },
    { name: '500', class: 'bg-light-primary-500', textClass: 'text-light-primary-500' },
    { name: '600', class: 'bg-light-primary-600', textClass: 'text-light-primary-600' },
    { name: '700', class: 'bg-light-primary-700', textClass: 'text-light-primary-700' },
    { name: '800', class: 'bg-light-primary-800', textClass: 'text-light-primary-800' },
    { name: '900', class: 'bg-light-primary-900', textClass: 'text-light-primary-900' },
  ];

  const darkPrimaryColors = [
    { name: '100', class: 'bg-dark-primary-100', textClass: 'text-dark-primary-100' },
    { name: '200', class: 'bg-dark-primary-200', textClass: 'text-dark-primary-200' },
    { name: '300', class: 'bg-dark-primary-300', textClass: 'text-dark-primary-300' },
    { name: '400', class: 'bg-dark-primary-400', textClass: 'text-dark-primary-400' },
    { name: '500', class: 'bg-dark-primary-500', textClass: 'text-dark-primary-500' },
    { name: '600', class: 'bg-dark-primary-600', textClass: 'text-dark-primary-600' },
    { name: '700', class: 'bg-dark-primary-700', textClass: 'text-dark-primary-700' },
    { name: '800', class: 'bg-dark-primary-800', textClass: 'text-dark-primary-800' },
    { name: '900', class: 'bg-dark-primary-900', textClass: 'text-dark-primary-900' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Figma Design Tokens Demo
        </h1>
        <p className="text-gray-600 mb-8">
          Primary color palette from figma-design-token.json
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Light Theme Primary Colors */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Light Primary Colors
            </h2>
            <div className="space-y-3">
              {lightPrimaryColors.map((color) => (
                <div key={color.name} className="flex items-center gap-4">
                  <div className={`${color.class} w-20 h-12 rounded-md shadow-sm border border-gray-200`} />
                  <div className="flex-1">
                    <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                      light-primary-{color.name}
                    </code>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Usage Example:</h3>
              <button className="bg-light-primary-500 hover:bg-light-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md">
                Primary Button
              </button>
            </div>
          </div>

          {/* Dark Theme Primary Colors */}
          <div className="bg-gray-900 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Dark Primary Colors
            </h2>
            <div className="space-y-3">
              {darkPrimaryColors.map((color) => (
                <div key={color.name} className="flex items-center gap-4">
                  <div className={`${color.class} w-20 h-12 rounded-md shadow-sm border border-gray-700`} />
                  <div className="flex-1">
                    <code className="text-sm font-mono bg-gray-800 text-gray-200 px-2 py-1 rounded">
                      dark-primary-{color.name}
                    </code>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-700">
              <h3 className="text-sm font-semibold text-gray-300 mb-3">Usage Example:</h3>
              <button className="bg-dark-primary-500 hover:bg-dark-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md">
                Primary Button
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Interactive Example
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-light-primary-100 text-light-primary-900 p-4 rounded-lg text-center font-semibold">
              Light Card
            </div>
            <div className="bg-light-primary-500 text-white p-4 rounded-lg text-center font-semibold">
              Primary Card
            </div>
            <div className="bg-light-primary-900 text-light-primary-100 p-4 rounded-lg text-center font-semibold">
              Dark Card
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="mt-8 bg-gray-900 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-4">
            Code Example
          </h2>
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`<div className="bg-light-primary-500 text-white p-4 rounded-lg">
  Primary Background
</div>

<button className="bg-light-primary-600 hover:bg-light-primary-700">
  Hover Effect
</button>

<p className="text-dark-primary-500">
  Text Color
</p>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default ColorTokenDemo;
