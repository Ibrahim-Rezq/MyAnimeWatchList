import AnimeShelf from './AnimeShelf'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getAll } from '../utils/DataStoreAPI'
import { useSelector } from 'react-redux'

const Library = () => {
    const { account } = useSelector((state) => state)
    const [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const data = await getAll(account.user)
            setData(data)
        } catch (e) {
            console.error(e)
        }
    }

    return (
        <>
            {account.isSignedIn ? (
                data && data.length > 0 ? (
                    <AnimeShelf data={data} />
                ) : (
                    <h2>No Data Found</h2>
                )
            ) : (
                <h2>
                    Please{' '}
                    <Link href='/account/login'>
                        <a>LogIn</a>
                    </Link>
                </h2>
            )}
        </>
    )
}

export default Library
