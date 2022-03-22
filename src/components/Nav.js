import React from 'react'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className='container'>
            <ul>
                <li>
                    <Link href='/'>
                        <a style={{ background: 'none' }}>
                            <strong>AnimeWatchList</strong>
                        </a>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href='/'>
                        <a className='secondary'>Home</a>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href='/AnimeQuotes'>
                        <a className='secondary'>AnimeQuotes</a>
                    </Link>
                </li>
                <li>
                    <Link href='/AnimeTop'>
                        <a className='secondary'>AnimeTop</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
