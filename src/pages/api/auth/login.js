import { sign } from 'jsonwebtoken'
import { serialize } from 'cookie'
const secret = process.env.SECRET

export default async function (req, res) {
    const { email, password } = req.body
    console.log(email, password)
    if (email == 'hima2000' && password == '1234') {
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
        res.status(200).json({ msg: 'OK!', user: 'hima' })
    } else res.status(401).json({ msg: 'OH! NO!' })
}
