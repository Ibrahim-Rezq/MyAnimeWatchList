import AnimeShelf from './AnimeShelf'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { getAll } from '../utils/App/DataStoreAPI'

const Library = () => {
    const { account } = useSelector((state) => state)
    const [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const data = await getAll()
            setData(data)
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <>
            {account.isSignedIn ? (
                data && data.length > 0 ? (
                    <AnimeShelf buttonBool={false} data={data} />
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
// export async function getServerSideProps() {
//     const Auth = IsAuth(req)
//     if (Auth) {
//         const data = await getUserAnime(Auth)
//         data && data.length > 0
//     } else res.status(401).json({ msg: 'OH! NO!' })
//     return {
//         props: { data },
//     }
// }

export default Library
