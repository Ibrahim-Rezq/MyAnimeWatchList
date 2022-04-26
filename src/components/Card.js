import Image from 'next/image'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { post, del } from '../utils/App/DataStoreAPI'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const Carde = ({ anime, buttonBool }) => {
    const { account } = useSelector((state) => state)
    const { images, title, synopsis, rank, score, mal_id } = anime
    return (
        <>
            <Card
                variant='outlined'
                sx={{
                    maxWidth: 345,
                    margin: 'auto',
                    boxShadow: '-10px 10px 40px -5px gray',
                }}
            >
                <Link href={'/animeInfo/' + mal_id}>
                    <CardMedia
                        component='img'
                        width='279'
                        height='372'
                        image={images.jpg.large_image_url}
                        alt='green iguana'
                    />
                </Link>
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {title}
                    </Typography>
                    <Typography gutterBottom variant='h6' component='div'>
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
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {(synopsis && synopsis.slice(0, 135)) ||
                            'No discription found'}
                        {synopsis && synopsis.length > 135 && '...'}
                    </Typography>
                </CardContent>
                <CardActions sx={{ margin: 'auto' }}>
                    {buttonBool ? (
                        <Button
                            size='small'
                            onClick={() => {
                                post(anime)
                            }}
                        >
                            Add To Favorite
                        </Button>
                    ) : (
                        <Button
                            size='small'
                            onClick={() => {
                                del(anime)
                            }}
                        >
                            Remove From Favorite
                        </Button>
                    )}
                </CardActions>
            </Card>
        </>
    )
}

export default Carde
