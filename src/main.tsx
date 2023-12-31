import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Shell } from './components/shell'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement)

root.render(
  <React.StrictMode>
    <BrowserRouter basename={'/'}>
      <Routes>
        <Route path="/*" element={<Shell />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
