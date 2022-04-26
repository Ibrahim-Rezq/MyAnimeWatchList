import { useState, useEffect } from 'react'
import AnimeShelf from '../components/AnimeShelf'
import Head from 'next/head'
import useDebounce from '../utils/hooks/useDebounce'
import { useFetch } from '../utils/hooks/useFetch'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import FormHelperText from '@mui/material/FormHelperText'

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
            <Box
                sx={{
                    minHeight: 'calc(100vh - 176px)',
                }}
            >
                <FormControl
                    sx={{
                        m: 2,
                        minWidth: '60%',
                    }}
                    variant='outlined'
                >
                    <InputLabel htmlFor='outlined-password'>Search</InputLabel>
                    <OutlinedInput
                        name='search'
                        label='Search'
                        id='search'
                        type='search'
                        placeholder='Search'
                        onChange={handelSearch}
                    />
                    <FormHelperText
                        sx={{ textAlign: 'center' }}
                        id='component-helper-text'
                    >
                        {!animeData.length > 0 &&
                            (!vals ? (
                                <strong>Type to search</strong>
                            ) : !loading ? (
                                <strong>No thing with {vals} found</strong>
                            ) : (
                                <strong>...loading</strong>
                            ))}
                    </FormHelperText>
                </FormControl>

                <div>
                    {!animeData.length > 0 || <AnimeShelf data={animeData} />}
                </div>
            </Box>
        </>
    )
}

export default Search
