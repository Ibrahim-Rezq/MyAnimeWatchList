import { connectToDB } from '../../utils/mongodb'

export default async function handler(req, res) {
    const { db } = await connectToDB()
    if (req.method === 'POST') {
        const data = await db
            .collection('animeList')
            .find({ mal_id: req.body.anime.mal_id })
            .toArray()
        if (data && data.length > 0) {
            res.status(200).json({ msg: 'Ok' })
        } else {
            db.collection('animeList').insertOne(req.body.anime)
            res.status(200).json({ msg: 'Ok' })
        }
    } else {
        const data = await db
            .collection('animeList')
            .find({})
            .limit(20)
            .toArray()
        res.status(200).json({ data })
    }
}
