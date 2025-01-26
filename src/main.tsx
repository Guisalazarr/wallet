import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/GlobalStyles.css'
import AppRoutes from './routes/AppRoutes'
import { ThemeProvider } from '@mui/material'
import defaultTheme from './config/theme/defaultTheme'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <AppRoutes />
    </ThemeProvider>

  </StrictMode>,
)
