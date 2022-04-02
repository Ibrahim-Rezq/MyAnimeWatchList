import { useRouter } from 'next/router'
import Image from 'next/image'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Nav from '../../components/Nav'
import styles from '../../css/AnimeInfo.module.css'

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
        synopsis,
        type,
        background,
        year,
        url,
        rating,
        aired,
        title_japanese,
        images,
        trailer,
    } = animeData
    console.log(animeData)
    if (!animeData)
        return (
            <>
                <section className='main'>
                    <h1>...loading</h1>
                </section>
            </>
        )
    else
        return (
            <>
                <Head>
                    <title>{title}</title>
                    <link rel='icon' href='/favicon.ico' />
                </Head>

                <Nav />
                <section className='main'>
                    <section className={styles.infoPage}>
                        <section className={styles.sideBar}>
                            <article>
                                <figure>
                                    <Image
                                        src={images.jpg.image_url}
                                        width='256'
                                        height='358'
                                    ></Image>
                                    <figcaption>
                                        {title} <br /> {title_japanese}
                                    </figcaption>
                                </figure>
                                <footer>
                                    <span>
                                        Rank:
                                        <span
                                            style={{ color: 'var(--primary)' }}
                                        >
                                            {' '}
                                            {rank || 'Unranked'}
                                        </span>{' '}
                                        Score:
                                        <span
                                            style={{ color: 'var(--primary)' }}
                                        >
                                            {' '}
                                            {score || 'UnScored'}/10
                                        </span>
                                    </span>
                                </footer>
                            </article>
                            <ul>
                                <li>
                                    <iframe
                                        style={{
                                            width: '100%',
                                            height: '210px',
                                        }}
                                        src={trailer.embed_url}
                                        frameBorder='0'
                                        allowFullScreen
                                        name='iframe_video1'
                                    ></iframe>
                                </li>
                                <li>
                                    <span>
                                        Started aring:
                                        <span
                                            style={{ color: 'var(--primary)' }}
                                        >
                                            {' '}
                                            {aired.from.slice(0, 10) ||
                                                'UnKnown'}
                                        </span>{' '}
                                    </span>
                                </li>
                                <li>
                                    <p>
                                        Status:
                                        <span
                                            style={{ color: 'var(--primary)' }}
                                        >
                                            {' '}
                                            {status || 'UnKnown'}
                                        </span>{' '}
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <a href={url} target='_blank'>
                                            Got To page
                                        </a>
                                    </p>
                                </li>
                                <li>
                                    <p>Year :{year || 'Unknown'}</p>
                                </li>
                                <li>
                                    <button>Add to favouiret</button>
                                </li>
                            </ul>
                        </section>

                        <section className={styles.main}>
                            <hr />
                            <p>
                                <strong>Synopsis</strong> :<br />
                                {synopsis || 'Unknown'}
                            </p>
                            <hr />
                            <h4>BackGround</h4>
                            <p>{background || 'Unknown'}</p>
                        </section>
                    </section>
                </section>
            </>
        )
}
export default AnimeInfo
