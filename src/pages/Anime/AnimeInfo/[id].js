import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState, useEffect } from 'react'
const AnimeInfo = () => {
    const router = useRouter()
    const { id } = router.query
    const [animeData, setAnimeData] = useState('')
    useEffect(() => {
        getData(id)
    }, [])

    const getData = async (value) => {
        try {
            if (value) {
                const res = await fetch(
                    `https://api.jikan.moe/v4/anime/${value}`
                )
                const data = await res.json()
                setAnimeData(data.data)
            }
        } catch (e) {
            console.error(e)
        }
    }
    const {
        title,
        status,
        rank,
        score,
        type,
        year,
        rating,
        aired,
        title_japanese,
        images,
    } = animeData
    console.log(animeData)
    if (!animeData)
        return (
            <>
                <h1>Nothing Found</h1>
            </>
        )
    else
        return (
            <>
                <article>
                    <h3>{animeData.title}</h3>
                    <Image
                        src={images.jpg.image_url}
                        width={256}
                        height={256}
                    ></Image>
                    <p>
                        name {title} / {title_japanese}
                    </p>
                    <p>
                        Started aring:
                        <span style={{ color: 'var(--primary)' }}>
                            {' '}
                            {aired.from.slice(0, 10) || 'UnKnown'}
                        </span>{' '}
                    </p>
                    <p>
                        Status:
                        <span style={{ color: 'var(--primary)' }}>
                            {' '}
                            {status || 'UnKnown'}
                        </span>{' '}
                    </p>
                    <p>
                        <h5>
                            Rank:
                            <span style={{ color: 'var(--primary)' }}>
                                {' '}
                                {rank || 'Unranked'}
                            </span>{' '}
                            Score:
                            <span style={{ color: 'var(--primary)' }}>
                                {' '}
                                {score || 'UnScored'}/10
                            </span>
                        </h5>
                    </p>

                    <p>Year :{year || 'Unknown'}</p>
                </article>
            </>
        )
}
export default AnimeInfo
