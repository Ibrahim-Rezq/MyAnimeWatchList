export default function (req) {
    const { cookies } = req
    const jwt = cookies.SiteAuth
    if (jwt) return true
    else return false
}
