import jwt from 'jsonwebtoken'
import { connectToDB } from '../mongodb'
const secret = process.env.SECRET

export const getUser = async (email) => {
    const { db } = await connectToDB()
    const data = await db.collection('users').find({ email: email }).toArray()
    return await data[0]
}

export const setUser = async ({ username, email, password }) => {
    const { db } = await connectToDB()
    const data = await db.collection('users').insertOne({
        username: username,
        email: email,
        password: password,
    })
    return await data
}
export const getCurruntUser = async (token) => {
    return jwt.verify(token, secret, async function (err, decoded) {
        const user = await getUser(decoded.email)
        const { db } = await connectToDB()
        const data = await db
            .collection('users')
            .find({ _id: user._id })
            .toArray()
        return await data[0]
    })
}
