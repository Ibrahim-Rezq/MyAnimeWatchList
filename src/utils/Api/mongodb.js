import { ClientSession, MongoClient } from 'mongodb'

const { MONGODB_DB, MONGODB_URI } = process.env
if (!MONGODB_URI) throw new Error('Define MONGODB_URI in .env.local')
if (!MONGODB_DB) throw new Error('Define MONGODB_DB in .env.local')

let cached = global.mongo

if (!cached) cached = global.mongo = { conn: null, promise: null }
export const connectToDB = async () => {
    if (cached.conn) return cached.conn
    if (!cached.conn) {
        const opts = { useNewUrlParser: true, useUnifiedTopology: true }
        cached.promise = MongoClient.connect(MONGODB_URI, opts).then(
            (client) => {
                return { client, db: client.db(MONGODB_DB) }
            }
        )
    }
    cached.conn = await cached.promise
    return cached.conn
}
