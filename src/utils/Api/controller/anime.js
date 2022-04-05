import jwt from 'jsonwebtoken'
import { connectToDB } from '../mongodb'
const secret = process.env.SECRET
import { getCurruntUser } from './users'

export const getUserAnime = async (token) => {
    const curruntUser = await getCurruntUser(token)
    const { db } = await connectToDB()
    const data = await db
        .collection('animeList')
        .find({
            user_id: curruntUser._id,
        })
        .toArray()
    return await data
}

export const addAnime = async (anime, token) => {
    const curruntUser = await getCurruntUser(token)
    const { db } = await connectToDB()
    const found = await IsAnimeFound(anime.mal_id, curruntUser._id)
    if (!found) {
        const data = await db
            .collection('animeList')
            .insertOne({ ...anime, user_id: curruntUser._id })
        return await data
    } else return { acknowledged: false }
}

const IsAnimeFound = async (anime_id, user_id) => {
    const { db } = await connectToDB()
    const data = await db
        .collection('animeList')
        .find({
            mal_id: anime_id,
            user_id: user_id,
        })
        .toArray()
    return data && data.length > 0
}

// const Auth = IsAuth(req)
// if (Auth) {
//     const { db } = await connectToDB()
//     if (req.method === 'POST') {
//         const data = await db
//             .collection('animeList')
//             .find({
//                 mal_id: req.body.anime.mal_id,
//                 user_id: curruntUser._id,
//             })
//             .toArray()
//         if (data && data.length > 0) {
//             res.status(200).json({ msg: 'Ok' })
//         } else {
//             const response = await db
//                 .collection('animeList')
//                 .insertOne({ ...req.body.anime, user_id: curruntUser._id })
//             res.status(200).json(response)
//         }
//     } else res.status(401).json({ msg: 'OH! NO!' })
// } else res.status(401).json({ msg: 'OH! NO!' })
