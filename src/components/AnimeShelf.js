import React from 'react'
import Card from './Card'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const AnimeShelf = ({ data, buttonBool = true }) => {
    return (
        <>
            <Container maxWidth='xl'>
                <Grid
                    pt='1rem'
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {data.map((anime, index) => {
                        if (anime)
                            return (
                                <Grid
                                    item
                                    xs={4}
                                    sm={4}
                                    md={4}
                                    margin='dense'
                                    key={index}
                                >
                                    <Card
                                        key={anime.title}
                                        anime={anime}
                                        buttonBool={buttonBool}
                                    />
                                </Grid>
                            )
                    })}
                </Grid>
            </Container>
        </>
    )
}

export default AnimeShelf
