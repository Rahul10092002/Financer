
import { useMemo } from 'react'
import './App.css'
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { themeSettings } from './theme'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './scenes/Navbar/Navbar'
import Dashboard from './scenes/dashboard'

function App() {

  const theme=useMemo(()=>createTheme(themeSettings),[])
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/predictions" element={<div>predic page</div>} />
              {/* <Route path="/" element={<div>dashboard page</div>} /> */}
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App
