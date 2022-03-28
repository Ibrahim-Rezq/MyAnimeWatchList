import React from 'react'

const SignIn = () => {
    return (
        <>
            <section className='container'>
                <article>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                        }}
                    >
                        <label>Email</label>
                        <input type='email' name='email' id='formEmail' />
                        <label>Password</label>
                        <input
                            type='password'
                            name='password'
                            id='formPassword'
                        />
                        <button type='submit' className='outline'>
                            Login
                        </button>
                    </form>
                </article>
            </section>
        </>
    )
}

export default SignIn
