import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import { theme } from './styles/theme'
import { GlobalStyle } from './styles/global'
import { store } from './store'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import { Cart } from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      {' '}
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil/:id" element={<Perfil />} />
          </Routes>
          <Cart />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  )
}

export default App
