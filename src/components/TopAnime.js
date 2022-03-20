import React from 'react'
import Card from './Card'

const AnimePage = ({ data }) => {
    return (
        <>
            <div className='container'>
                {data.map((anime) => {
                    if (anime) return <Card key={anime.title} anime={anime} />
                })}
            </div>
        </>
    )
}

export default AnimePage
