import { connectToDB } from '../../../utils/Api/mongodb'
import { getCurruntUser } from '../../../utils/Api/controller/users'
import IsAuth from '../../../utils/Api/IsAuth'

export default async function (req, res) {
    const Auth = IsAuth(req)
    if (Auth) {
        const curruntUser = await getCurruntUser(Auth)
        const { db } = await connectToDB()
        if (req.method === 'POST') {
            res.status(401).json({ data })
        } else {
            const data = await db
                .collection('animeList')
                .find({
                    user_id: curruntUser._id,
                })
                .limit(20)
                .toArray()
            res.status(200).json({ data })
        }
    } else res.status(401).json({ msg: 'OH! NO!' })
}
