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
        name: 'Register',
        path: '/account/register',
        protectedLink: true,
        icon: <GoSignIn />,
    },
    {
        name: 'Login',
        path: '/account/login',
        protectedLink: true,
        icon: <GoSignIn />,
    },
]
export const navLinks = [
    {
        name: 'Home',
        path: '/',
        icon: <GoHome />,
    },
    { name: 'Search', path: '/search', icon: <GoSearch /> },
    {
        name: 'AnimeQuotes',
        path: '/animeQuotes',
        icon: <GoQuote />,
    },

    { name: 'AnimeTop', path: '/animeTop', icon: <GoListOrdered /> },
]
