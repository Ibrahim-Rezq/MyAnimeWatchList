import { useState, useEffect } from 'react'

const SignIn = () => {
    const [account, setAccount] = useState({ email: '', password: '' })
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setAccount({ ...account, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(account),
        })
        console.log(await response.json())
    }
    const handelLogout = async (e) => {
        try {
            e.preventDefault()
            const response = await fetch('/api/auth/logout')
            console.log(await response.json())
        } catch (e) {
            console.error(e)
        }
    }
    return (
        <>
            <section className='container'>
                <article>
                    <form onSubmit={handleSubmit}>
                        <h2>Sign In</h2>
                        <label>Email</label>
                        <input
                            aria-invalid={false}
                            type='text'
                            name='email'
                            id='formEmail'
                            value={account.email}
                            onChange={handleChange}
                        />
                        <label>Password</label>
                        <input
                            aria-invalid={false}
                            type='password'
                            name='password'
                            id='formPassword'
                            value={account.password}
                            onChange={handleChange}
                        />
                        <button type='submit' className='outline'>
                            SignIn
                        </button>
                        <button onClick={handelLogout} className='outline'>
                            LogOut
                        </button>
                    </form>
                </article>
            </section>
        </>
    )
}

export default SignIn
