import {
    GoSignIn,
    GoSignOut,
    GoHome,
    GoSearch,
    GoQuote,
    GoListOrdered,
} from 'react-icons/go'

export const protLinks = [
    {
        name: 'register',
        path: '/account/register',
        protectedLink: true,
        icon: <GoSignIn />,
    },
    {
        name: 'login',
        path: '/account/login',
        protectedLink: true,
        icon: <GoSignIn />,
    },
]
export const navLinks = [
    {
        name: 'home',
        path: '/',
        icon: <GoHome />,
    },
    { name: 'search', path: '/search', icon: <GoSearch /> },
    {
        name: 'animeQuotes',
        path: '/animeQuotes',
        icon: <GoQuote />,
    },

    { name: 'animeTop', path: '/animeTop', icon: <GoListOrdered /> },
]
