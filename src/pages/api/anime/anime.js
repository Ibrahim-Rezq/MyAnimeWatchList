import IsAuth from '../../../utils/Api/IsAuth'
import { addAnime, getUserAnime } from '../../../utils/Api/controller/anime'

export default async function (req, res) {
    const Auth = IsAuth(req)
    if (Auth) {
        if (req.method !== 'POST') {
            const data = await getUserAnime(Auth)
            data && data.length > 0
                ? res.status(200).json({ msg: 'Ok', data: data })
                : res.status(401).json({ msg: 'OH! NO!' })
        } else {
            const response = await addAnime(req.body.anime, Auth)
            if (response.acknowledged) res.status(200).json(response)
            else res.status(401).json({ msg: 'Anime alredy Found' })
        }
    } else res.status(401).json({ msg: 'OH! NO!' })
}
