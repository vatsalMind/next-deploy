import { MuiThemeProvider} from '@material-ui/core';
import useDarkMode from 'use-dark-mode';
import { AppContainer, HeaderContainer, ContentContainer, FooterContainer } from "../components/styled/Container";
import App from 'next/app'
import {darkTheme, lightTheme} from "../components/theme/theme";
import "../styles/globals.css"
import Header from '../components/layout/header/Header';
import Footer from '../components/layout/footer/Footer';
import {useRouter} from "next/router";

// --------------------------------------------------------
// RENDER APPLICATION
// --------------------------------------------------------

function Application({ Component, pageProps }) {
  const router = useRouter();

  const {value: isDark,toggle: toggleDarkMode} = useDarkMode(false);
  const Theme = isDark ? darkTheme : lightTheme

  return (
    <MuiThemeProvider theme={Theme}>
      <AppContainer maxWidth={false} disableGutters={true} className={'dddd'}>
        {router.pathname !== '/404' &&
        <HeaderContainer maxWidth={false} disableGutters={true} style={{background :`${Theme.palette.background.paper}`}}>
          <header>
            <Header {...pageProps} isDark={isDark} toggleDarkMode={toggleDarkMode}/>
          </header>
        </HeaderContainer>
        }
        <ContentContainer maxWidth={false} disableGutters={true} style={{background :`${Theme.palette.background.paper}`}}>
          <main>
            <Component {...pageProps} />
          </main>
        </ContentContainer>
        <FooterContainer maxWidth={false} disableGutters={true} style={{background :`${Theme.palette.background.paper}`}}>
          <footer>
            <Footer {...pageProps}/>
          </footer>
        </FooterContainer>
      </AppContainer>
    </MuiThemeProvider>
  )
}
export default Application

// --------------------------------------------------------
// GET APPLICATION PROPS
// --------------------------------------------------------

Application.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps }
}
