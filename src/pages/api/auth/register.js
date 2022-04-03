import { sign } from 'jsonwebtoken'
import { serialize } from 'cookie'
import bcrypt from 'bcrypt'
const secret = process.env.SECRET
import { setUser, getUser } from '../../../utils/Api/controller/users'

const saltRounds = process.env.SALT_ROUNDS

export default async function (req, res) {
    const { username, email, password } = req.body

    if (username && email && password) {
        const user = await getUser(email)
        if (!user) {
            const user = await setUser({
                username: username,
                email: email,
                password: bcrypt.hashSync(password, +saltRounds),
            })
            if (user.acknowledged) {
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
                    msg: 'Sing Up successful!',
                    success: true,
                    username: username,
                })
            } else {
                res.status(401).json({
                    msg: 'some error happend wiith the database',
                    success: false,
                })
            }
        } else {
            res.status(401).json({
                msg: 'Email alredy Exisit',
                success: false,
            })
        }
    } else {
        res.status(401).json({
            msg: 'either password or email isnt corect',
            success: false,
        })
    }
}
