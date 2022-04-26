import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'

const AnimeQuotes = ({ quoteData, image }) => {
    const { anime, character, quote } = quoteData

    return (
        <>
            <Head>
                <title>Anime Quotes</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Box
                sx={{
                    color: 'red',
                    minHeight: 'calc(100vh - 178px)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Container maxWidth='md'>
                    <Card
                        variant='outlined'
                        sx={{
                            flexDirection: 'row',
                            display: { xs: 'block', sm: 'flex' },
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 'auto',
                            boxShadow: '-10px 10px 40px -5px gray',
                        }}
                    >
                        <CardMedia
                            component='img'
                            height='372'
                            image={image}
                            alt='green iguana'
                            sx={{ maxWidth: { xs: 'auto', sm: '276px' } }}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant='h5'
                                component='div'
                            >
                                "{quote}"
                            </Typography>
                            <Typography
                                m={2}
                                variant='body2'
                                color='text.secondary'
                            >
                                {character} from {anime}
                            </Typography>
                            <CardActions sx={{ margin: 'auto' }}>
                                <Link href='/animeQuotes'>
                                    <Button
                                        sx={{ margin: 'auto' }}
                                        role='button'
                                    >
                                        AnotherQuotes
                                    </Button>
                                </Link>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </>
    )
}

export async function getServerSideProps() {
    try {
        const res = await fetch('https://animechan.vercel.app/api/random')
        const quoteData = await res.json()
        const res2 = await fetch(
            `https://api.jikan.moe/v4/characters?q=${quoteData.character}`
        )
        const data = await res2.json()
        const image = await data.data[0].images.jpg.image_url
        return {
            props: { quoteData, image },
        }
    } catch (e) {
        console.error(e)
    }
}

export default AnimeQuotes
