import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import Library from '../components/Library'
import Head from 'next/head'

const HomePage = () => {
    return (
        <>
            <Head>
                <title>My Anime WatchList</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div style={{ textAlign: 'center' }}>
                <Nav PageName={'Anime Watch List'} />

                <main className='container'>
                    <Library />
                </main>
            </div>
            <Footer />
        </>
    )
}

export default HomePage
