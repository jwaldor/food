import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col p-4 space-y-4">
      {/* Tabs */}
      <div className="tabs w-full overflow-x-auto">
        <a className="tab tab-bordered">Tab 1</a>
        <a className="tab tab-bordered">Tab 2</a>
        <a className="tab tab-bordered">Tab 3</a>
        <a className="tab tab-bordered">Tab 4</a>
        <a className="tab tab-bordered">Tab 5</a>
        <a className="tab tab-bordered">Tab 6</a>
        <a className="tab tab-bordered">Tab 7</a>
        <a className="tab tab-bordered">Tab 8</a>
        <a className="tab tab-bordered">Tab 9</a>
        <a className="tab tab-bordered">Tab 10</a>
      </div>

      {/* Search Bar */}
      <input type="text" placeholder="Search..." className="input input-bordered w-full" />

      {/* Content Section */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Title</h1>
        <p className="text-gray-500">Small grey text underneath the title</p>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex gap-4">
            <div className="card w-1/2 h-36rem bg-base-100 border border-gray-300 border-opacity-75 rounded-lg p-0">
              <div className="card-body flex flex-row">
                <div className="w-4/5 flex-grow flex-col">
                  <h2 className="card-title">Div 1</h2>
                  <p>Content for Div 1</p>
                </div>
                <div className="w-1/5 h-full flex flex-col">
                  <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            <div className="card w-1/2 h-36rem bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Div 2</h2>
                <p>Content for Div 2</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="card w-1/2 h-36rem bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Div 3</h2>
                <p>Content for Div 3</p>
              </div>
            </div>
            <div className="card w-1/2 h-36rem bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Div 4</h2>
                <p>Content for Div 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
