import Library from '../components/Library'
import Head from 'next/head'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

const HomePage = () => {
    return (
        <>
            <Head>
                <title>My Anime WatchList</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Box sx={{ color: 'red', minHeight: 'calc(100vh - 178px)' }}>
                <Container>
                    <Library />
                </Container>
            </Box>
        </>
    )
}

export default HomePage
