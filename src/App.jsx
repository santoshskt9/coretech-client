import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import StaticLayout from './Layout/StaticLayout'
import MainRouter from './routes/MainRouter'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <StaticLayout>
          <MainRouter />
          <Toaster/>
        </StaticLayout>
      </BrowserRouter>
    </>
  )
}

export default App
