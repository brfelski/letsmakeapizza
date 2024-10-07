import { createTheme, ThemeProvider } from '@mui/material'
import Home from './pages/home/Home'

function App() {

  const tema = createTheme({});

  return (
    <ThemeProvider theme={tema}>
      <Home />
    </ThemeProvider>
  )
}

export default App;