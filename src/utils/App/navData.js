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
        name: 'Register',
        protectedLink: true,
        icon: <GoSignIn />,
    },
    {
        path: '/account/login',
        name: 'Login',
        protectedLink: true,
        icon: <GoSignIn />,
    },
]
export const navLinks = [
    {
        path: '/',
        name: 'Home',
        icon: <GoHome />,
    },
    { path: '/search', name: 'Search', icon: <GoSearch /> },
    {
        path: '/animeQuotes',
        name: 'AnimeQuotes',
        icon: <GoQuote />,
    },

    { path: '/animeTop', name: 'AnimeTop', icon: <GoListOrdered /> },
]
