import { useState, useEffect } from 'react'

const SignUp = () => {
    const [account, setAccount] = useState({
        name: '',
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setAccount({ ...account, [name]: value })
    }
    useEffect(() => {
        console.log(account)
    }, [account])

    return (
        <>
            <section className='container'>
                <article>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                        }}
                    >
                        <h2>Sign Up</h2>
                        <label>Name</label>
                        <input
                            aria-invalid={false}
                            type='name'
                            name='name'
                            id='formName'
                            value={account.name}
                            onChange={handleChange}
                        />
                        <label>Email</label>
                        <input
                            aria-invalid={false}
                            type='email'
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
                            SignUp
                        </button>
                    </form>
                </article>
            </section>
        </>
    )
}

export default SignUp
