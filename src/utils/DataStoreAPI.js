const api = '/api'

const headers = {
    'Content-Type': 'application/json',
}

export const post = (anime) =>
    fetch(`${api}/anime/anime`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ anime: anime, user: 'hima' }),
    })
        .then((res) => res.json())
        .then((data) => data.anime)

export const get = (animeId) =>
    fetch(`${api}/anime/anime/${animeId}`, { headers })
        .then((res) => res.json())
        .then((data) => data.anime)

export const getAll = (user) =>
    fetch(`${api}/anime/${'hima'}`)
        .then((res) => res.json())
        .then((data) => data.data)

const update = (anime, shelf) =>
    fetch(`${api}/anime/anime/${anime.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ shelf, user: 'hima' }),
    }).then((res) => res.json())

const search = (query) =>
    fetch(`${api}/search`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    })
        .then((res) => res.json())
        .then((data) => data.anime)
