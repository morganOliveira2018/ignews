/* File system rote: automaticamente para o nextJS cada arquivo
que esta dentro da pasta /pages, ele vai virar uma rota 
Obs: Menos o arquivo _app.js e _document.js */
import { AppProps } from 'next/app';
import { Header } from '../components/Header/Header';
import "../styles/global.scss";
import { SessionProvider as NextAuthProvider } from "next-auth/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <NextAuthProvider session={pageProps.session}>
    <Header />
    <Component {...pageProps} />
  </NextAuthProvider>
  )
}

export default MyApp
