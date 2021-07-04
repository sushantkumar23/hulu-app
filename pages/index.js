import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Let's build Hulu 2.0</h1>
      {/* Header */}
      <Header></Header>
      {/* Nav */}
      {/* Results */}
    </div>
  )
}
