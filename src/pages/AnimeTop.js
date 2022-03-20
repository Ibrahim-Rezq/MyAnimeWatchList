import React from 'react'
import TopAnime from '../components/TopAnime'
import Nav from '../components/Nav'

const AnimeTop = ({ data }) => {
    return (
        <div>
            <Nav />
            <TopAnime data={data.data} />
        </div>
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
