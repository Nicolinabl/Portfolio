import { Header } from './Components/layout/Header'
import { MainSection } from './Components/layout/MainSection'
import { Footer } from './Components/layout/Footer'
import GlobalStyle from './globalStyles'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainSection />
      <Footer />
    </>
  )
}
