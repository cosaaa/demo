import './App.css'

function App() {

  return (
    <>
      <div>
        这是主应用的页面
        <h1>子应用👇</h1>
        <micro-app name='my-app' ssr url='http://localhost:3000'></micro-app>
      </div>
    </>
  )
}

export default App
