import React from 'react'
import Nav from '../components/Nav'
import Link from 'next/link'
import Head from 'next/head'
import Footer from '../components/Footer'

const AnimeQuotes = ({ quoteData }) => {
    const { anime, character, quote } = quoteData
    return (
        <>
            <Head>
                <title>Anime Quotes</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Nav />
            <section className='main'>
                <section
                    className='container'
                    style={{
                        height: '75vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                    }}
                >
                    <blockquote>
                        "{quote}"
                        <footer>
                            <cite>
                                By: {character}, From: {anime}
                            </cite>
                        </footer>
                    </blockquote>
                    <Link href='/AnimeQuotes'>
                        <a role='button'>AnotherQuotes</a>
                    </Link>
                </section>
            </section>
            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    try {
        const res = await fetch('https://animechan.vercel.app/api/random')
        const quoteData = await res.json()
        return {
            props: { quoteData },
        }
    } catch (e) {
        console.error(e)
    }
}
export default AnimeQuotes
