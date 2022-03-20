import { useState } from 'react'
import Nav from '../components/Nav'
import SearchBar from '../components/SearchBar'
import Head from 'next/head'

const HomePage = () => {
    return (
        <>
            <Head>
                <title>My Anime WatchList</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div style={{ textAlign: 'center' }}>
                <Nav />
                <main className='container'>
                    <SearchBar />
                </main>
            </div>
        </>
    )
}
export default HomePage
