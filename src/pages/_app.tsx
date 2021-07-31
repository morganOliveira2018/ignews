/* File system rote: automaticamente para o nextJS cada arquivo
que esta dentro da pasta /pages, ele vai virar uma rota 
Obs: Menos o arquivo _app.js e _document.js */
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
