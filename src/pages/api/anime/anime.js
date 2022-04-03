import { connectToDB } from '../../../utils/Api/mongodb'
import IsAuth from '../../../utils/Api/IsAuth'
import { getCurruntUser } from '../../../utils/Api/controller/users'

export default async function (req, res) {
    const Auth = IsAuth(req)
    if (Auth) {
        const curruntUser = await getCurruntUser(Auth)
        const { db } = await connectToDB()
        if (req.method === 'POST') {
            const data = await db
                .collection('animeList')
                .find({
                    mal_id: req.body.anime.mal_id,
                    user_id: curruntUser._id,
                })
                .toArray()
            if (data && data.length > 0) {
                res.status(200).json({ msg: 'Ok' })
            } else {
                const response = await db
                    .collection('animeList')
                    .insertOne({ ...req.body.anime, user_id: curruntUser._id })
                res.status(200).json(response)
            }
        } else res.status(401).json({ msg: 'OH! NO!' })
    } else res.status(401).json({ msg: 'OH! NO!' })
}
