import PublicRoutes from './routes/public/routes'
import { createGlobalStyle } from 'styled-components';
import BGContextProvedor from './modules/core/contexts/bg-context';
import Layout from './components/layouts/layout';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url('/roboto-regular.ttf') format('truetype');
  }
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  * {
    font-family: 'Roboto';
  }
`

function App() {
  return (
    <BGContextProvedor>
      <GlobalStyles />
      <Layout>
        <PublicRoutes />
      </Layout>
    </BGContextProvedor>
  )
}

export default App
