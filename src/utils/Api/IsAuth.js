export default function (req) {
    const { cookies } = req
    const jwt = cookies.SiteAuth
    if (jwt) return jwt
    else return null
}
