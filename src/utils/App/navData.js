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
        path: '/account/register',
        protectedLink: true,
        icon: <GoSignIn />,
    },
    {
        path: '/account/login',
        protectedLink: true,
        icon: <GoSignIn />,
    },
]
export const navLinks = [
    {
        path: '/',
        icon: <GoHome />,
    },
    { path: '/search', icon: <GoSearch /> },
    {
        path: '/animeQuotes',
        icon: <GoQuote />,
    },

    { path: '/animeTop', icon: <GoListOrdered /> },
]
