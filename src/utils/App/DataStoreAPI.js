const api = '/api'

const headers = {
    'Content-Type': 'application/json',
}

export const post = (anime) =>
    fetch(`${api}/anime/anime`, {
        method: 'POST',
        headers,
        body: JSON.stringify({ anime: anime }),
    })
        .then((res) => res.json())
        .then((data) => data)

export const get = (animeId) =>
    fetch(`${api}/anime/anime/${animeId}`, { headers })
        .then((res) => res.json())
        .then((data) => data.anime)

export const getAll = () =>
    fetch(`${api}/anime/anime`)
        .then((res) => res.json())
        .then((data) => data.data)
