import { Header } from './Components/layout/Header'
import { Main } from './Components/layout/Main'
import { Footer } from './Components/layout/Footer'
import GlobalStyle from './globalStyles'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  )
}
