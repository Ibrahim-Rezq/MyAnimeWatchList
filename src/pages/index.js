import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Library from '../components/Library'
import Head from 'next/head'

const HomePage = () => {
    return (
        <>
            <Head>
                <title>My Anime WatchList</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Nav />
            <main className='container main'>
                <Library />
            </main>
            <Footer />
        </>
    )
}

export default HomePage
