import { createRoot } from 'react-dom/client'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { Router } from './routes/router'
import './index.css'
import { StrictMode } from 'react'
import { temaOrion } from './styles/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={temaOrion}>
      <CssBaseline />
      <RouterProvider router={Router} />
    </ThemeProvider>
  </StrictMode>,
)
