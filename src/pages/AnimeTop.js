import React from 'react'
import AnimeShelf from '../components/AnimeShelf'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

const AnimeTop = ({ data }) => {
    return (
        <>
            <Head>
                <title>Top Anime</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Nav />
            <section className='main'>
                <AnimeShelf data={data.data} />
            </section>
            <Footer />
        </>
    )
}
export async function getStaticProps() {
    try {
        const res = await fetch('https://api.jikan.moe/v4/top/anime')
        const data = await res.json()
        return {
            props: { data },
        }
    } catch (e) {
        console.error(e)
    }
}

export default AnimeTop
