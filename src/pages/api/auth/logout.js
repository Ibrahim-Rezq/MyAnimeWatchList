import { serialize } from 'cookie'
import IsAuth from '../../../utils/IsAuth'

export default async function (req, res) {
    const Auth = IsAuth(req)
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
