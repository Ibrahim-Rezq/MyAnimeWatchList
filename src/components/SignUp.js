import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/actionCreator'
import { useRouter } from 'next/router'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const SignUp = () => {
    const dispatch = useDispatch()
    const { account } = useSelector((state) => state)
    const router = useRouter()

    if (account.isSignedIn) {
        router.replace('/')
    }

    const [userAccount, setUserAccount] = useState({
        username: '',
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserAccount({ ...userAccount, [name]: value })
    }
    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    useEffect(() => {
        console.log(userAccount)
    }, [userAccount])
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(actions.SignUp(userAccount))
        console.log(userAccount)
    }

    return (
        <>
            <Box
                sx={{
                    minHeight: 'calc(100vh - 178px)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <form
                    style={{
                        padding: '4rem',
                        boxShadow: 'grey -15px 15px 50px -10px',
                    }}
                    onSubmit={handleSubmit}
                >
                    <FormGroup
                        sx={{
                            m: 1,
                        }}
                        variant='outlined'
                    >
                        <FormControl
                            sx={{
                                m: 1,
                                // width: '25ch'
                            }}
                            variant='outlined'
                        >
                            <InputLabel htmlFor='outlined-password'>
                                Username
                            </InputLabel>
                            <OutlinedInput
                                id='outlined-Username'
                                value={userAccount.username}
                                onChange={handleChange}
                                name='username'
                                label='Username'
                            />
                        </FormControl>
                        <FormControl
                            sx={{
                                m: 1,
                                // width: '25ch'
                            }}
                            variant='outlined'
                        >
                            <InputLabel htmlFor='outlined-password'>
                                Email
                            </InputLabel>
                            <OutlinedInput
                                id='outlined-email'
                                value={userAccount.email}
                                onChange={handleChange}
                                name='email'
                                label='Email'
                            />
                        </FormControl>
                        <FormControl
                            sx={{
                                m: 1,
                            }}
                            variant='outlined'
                        >
                            <InputLabel htmlFor='outlined-password'>
                                Password
                            </InputLabel>
                            <OutlinedInput
                                id='outlined-password'
                                type={showPassword ? 'text' : 'password'}
                                value={userAccount.password}
                                onChange={handleChange}
                                name='password'
                                endAdornment={
                                    <InputAdornment position='end'>
                                        <IconButton
                                            aria-label='toggle password visibility'
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            edge='end'
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label='Password'
                            />
                        </FormControl>
                        <Button type='submit'>Sign Up</Button>
                    </FormGroup>
                </form>
            </Box>
        </>
    )
}

export default SignUp
