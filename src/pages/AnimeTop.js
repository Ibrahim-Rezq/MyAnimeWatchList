import React from 'react'
import AnimeShelf from '../components/AnimeShelf'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const AnimeTop = ({ data }) => {
    return (
        <>
            <Nav PageName={'Anime Top'} />
            <section className='main'>
                <AnimeShelf data={data.data} />
            </section>
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
