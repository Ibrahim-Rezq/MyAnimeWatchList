import { sign } from 'jsonwebtoken'
import { serialize } from 'cookie'
import bcrypt from 'bcrypt'
import { getUser } from '../../../utils/Api/controller/users'
const secret = process.env.SECRET

export default async function (req, res) {
    const { email, password } = req.body
    const user = await getUser(email)
    if (user) {
        const compared = bcrypt.compareSync(password, user.password)
        if (compared) {
            const token = sign(
                {
                    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
                    email: email,
                },
                secret
            )
            const serialized = serialize('SiteAuth', token, {
                httpOnly: true,
                sameSite: true,
                maxAge: 60 * 60 * 24 * 7,
                path: '/',
            })
            res.setHeader('Set-Cookie', serialized)
            res.status(200).json({
                msg: 'Sing in successful!',
                success: true,
                username: user.username,
            })
        } else {
            res.status(401).json({
                msg: ' password isnt corect',
            })
        }
    } else {
        res.status(401).json({
            msg: 'email not found',
        })
    }
}
