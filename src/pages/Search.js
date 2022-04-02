import React from 'react'
import SearchBar from '../components/SearchBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'

const Search = () => {
    return (
        <>
            <Head>
                <title>Search...</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Nav />
            <SearchBar />
            <Footer />
        </>
    )
}

export default Search
