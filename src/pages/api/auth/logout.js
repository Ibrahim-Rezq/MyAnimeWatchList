import { serialize } from 'cookie'
import IsAuth from '../../../utils/Api/IsAuth'
import jwt from 'jsonwebtoken'
import { getUser } from '../../../utils/Api/controller/users'
import { connectToDB } from '../../../utils/Api/mongodb'
const secret = process.env.SECRET

export default async function (req, res) {
    const Auth = IsAuth(req)
    jwt.verify(Auth, secret, async function (err, decoded) {
        const email = await getUser(decoded.email)
        console.log(email._id)
        const { db } = await connectToDB()
        const data = await db
            .collection('users')
            .find({ _id: email._id })
            .toArray()
        console.log(await data[0])
    })

    if (Auth) {
        const serialized = serialize('SiteAuth', null, {
            httpOnly: true,
            sameSite: true,
            maxAge: -1,
            path: '/',
        })
        res.setHeader('Set-Cookie', serialized)
        res.status(200).json({ msg: 'Sing out successful', success: true })
    } else res.status(401).json({ msg: 'alredy logd out!', success: false })
}
