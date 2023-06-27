import React, { ReactElement, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Shell } from './components/shell'

function App(): ReactElement {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path={'/*'} element={<Shell />} />
    </Routes>
  )
}

export default App
