import { useState } from 'react'
import Nav from '../components/Nav'
import SearchBar from '../components/SearchBar'
import Head from 'next/head'

function Header({ title }) {
    return <h1>{title ? title : 'Default title'}</h1>
}

const HomePage = () => {
    return (
        <>
            <Head>
                <title>My Anime WatchList</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div style={{ textAlign: 'center' }}>
                <Nav />
                <Header title='Develop. Preview. Ship. 🚀' />
                <main className='container'>
                    <SearchBar />
                </main>
            </div>
        </>
    )
}
export default HomePage
