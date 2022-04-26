import { useEffect, useState, useRef } from 'react'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../../redux/actions/actionCreator'
import * as actions from '../../redux/actions/actionCreator'

import Modal from '../utils/App/Modal'
import { navLinks, protLinks } from '../utils/App/navData'

const Nav = () => {
    const { account } = useSelector((state) => state)
    const dispatch = useDispatch()

    const handelLogout = async (e) => {
        try {
            e.preventDefault()
            dispatch(actions.signOut())
        } catch (e) {
            console.error(e)
        }
    }
    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorElUser, setAnchorElUser] = useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <AppBar position='sticky'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Link href='/'>
                        <Typography
                            variant='h6'
                            noWrap
                            component='div'
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                cursor: 'pointer',
                            }}
                        >
                            LOGO
                        </Typography>
                    </Link>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {navLinks.map((page, index) => {
                                return (
                                    <MenuItem
                                        key={index + page.name}
                                        onClick={handleCloseNavMenu}
                                    >
                                        <Link key={page.name} href={page.path}>
                                            <Typography textAlign='center'>
                                                {page.name}
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                )
                            })}
                        </Menu>
                    </Box>
                    <Typography
                        variant='h6'
                        noWrap
                        component='div'
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
                        {navLinks.map((page, index) => {
                            return (
                                <Link key={index + page.name} href={page.path}>
                                    <Button
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            my: 2,
                                            color: 'white',
                                            display: 'block',
                                        }}
                                    >
                                        {page.name}
                                    </Button>
                                </Link>
                            )
                        })}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title='Open settings'>
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar alt='avatar' src='/favicon.ico' />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id='menu-appbar'
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem>
                                <Typography
                                    textAlign='center'
                                    sx={{ textTransform: 'capitalize' }}
                                >
                                    {account.user}
                                </Typography>
                            </MenuItem>
                            {!account.isSignedIn ? (
                                protLinks.map((setting, index) => {
                                    return (
                                        <MenuItem
                                            key={index + setting.name}
                                            onClick={handleCloseUserMenu}
                                        >
                                            <Link href={setting.path}>
                                                <Typography textAlign='center'>
                                                    {setting.name}
                                                </Typography>
                                            </Link>
                                        </MenuItem>
                                    )
                                })
                            ) : (
                                <MenuItem
                                    onClick={(e) => {
                                        handelLogout(e)
                                        handleCloseUserMenu(e)
                                    }}
                                >
                                    <Typography textAlign='center'>
                                        Logout
                                    </Typography>
                                </MenuItem>
                            )}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Nav
