import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../redux/actions/actionCreator'
import { useRouter } from 'next/router'

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
    useEffect(() => {
        console.log(userAccount)
    }, [userAccount])
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(actions.SignUp(userAccount))
    }

    return (
        <>
            <section className='container'>
                <article>
                    <form onSubmit={handleSubmit}>
                        <h2>Sign Up</h2>
                        <label>username</label>
                        <input
                            aria-invalid={false}
                            type='text'
                            name='username'
                            id='formUsername'
                            value={userAccount.username}
                            onChange={handleChange}
                        />
                        <label>Email</label>
                        <input
                            aria-invalid={false}
                            type='email'
                            name='email'
                            id='formEmail'
                            value={userAccount.email}
                            onChange={handleChange}
                        />
                        <label>Password</label>
                        <input
                            aria-invalid={false}
                            type='password'
                            name='password'
                            id='formPassword'
                            value={userAccount.password}
                            onChange={handleChange}
                        />
                        <button type='submit' className='outline'>
                            SignUp
                        </button>
                    </form>
                </article>
            </section>
        </>
    )
}

export default SignUp
