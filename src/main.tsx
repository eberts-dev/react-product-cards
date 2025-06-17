import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

// базовая тема MUI
const theme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#1976d2',
		},
	},
	typography: {
		fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
	},
})

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline /> {/* Нормализация CSS и базовые стили */}
			<App />
		</ThemeProvider>
	</StrictMode>
)
