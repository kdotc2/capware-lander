import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-py-20 scroll-smooth">
      <Head />
      <body className="overscroll-y-none bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
