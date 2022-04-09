import { useState, useEffect } from 'react'
import AnimeShelf from '../components/AnimeShelf'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Head from 'next/head'
import useDebounce from '../utils/hooks/useDebounce'
import { useFetch } from '../utils/hooks/useFetch'

const Search = () => {
    const [vals, setVals] = useState('')
    const [animeData, setAnimeData] = useState([])
    const [loading, products, setUrl] = useFetch('')

    const getData = async (value) => {
        try {
            setVals(value)
            setUrl(`https://api.jikan.moe/v4/anime?q=${value}&sfw`)
        } catch (e) {
            console.error(e)
        }
    }
    const debouncedHandler = useDebounce(getData, 300)

    useEffect(() => {
        if (!loading && products.data)
            setAnimeData(
                products.data
                    .slice(0, 10)
                    .sort((a, b) => {
                        return a.rank - b.rank
                    })
                    .map((el) => {
                        if (el.rank !== 0) return el
                    })
            )
        else setAnimeData([])
    }, [loading])

    const handelSearch = (e) => {
        debouncedHandler(e.target.value)
    }

    return (
        <>
            <Head>
                <title>Search...</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Nav />

            <section className='container main'>
                <form onSubmit={(e) => e.preventDefault()}>
                    <input type='search' onChange={handelSearch} />
                </form>
                <div>
                    {!animeData.length > 0 ? (
                        !vals ? (
                            <h3>type to search</h3>
                        ) : !loading ? (
                            <h3>no thing with {vals} found</h3>
                        ) : (
                            <h3>...loading</h3>
                        )
                    ) : (
                        <AnimeShelf data={animeData} />
                    )}
                </div>
            </section>

            <Footer />
        </>
    )
}
 
export default Search
