import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import StaticLayout from './Layout/StaticLayout'
import MainRouter from './routes/MainRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <StaticLayout>
          <MainRouter />
        </StaticLayout>
      </BrowserRouter>
    </>
  )
}

export default App
