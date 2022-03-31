import { connectToDB } from '../../../utils/mongodb'
import IsAuth from '../../../utils/IsAuth'

export default async function (req, res) {
    const { user } = req.query
    const Auth = IsAuth(req)
    if (Auth) {
        const { db } = await connectToDB()
        if (req.method === 'POST') {
            res.status(401).json({ data })
        } else {
            const data = await db
                .collection('animeList')
                .find({ user: user })
                .limit(20)
                .toArray()
            res.status(200).json({ data })
        }
    } else res.status(401).json({ msg: 'OH! NO!' })
}
