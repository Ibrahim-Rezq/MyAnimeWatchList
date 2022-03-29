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
                        <h2>Sign In</h2>
                        <label>Email</label>
                        <input
                            aria-invalid={false}
                            type='email'
                            name='email'
                            id='formEmail'
                        />
                        <label>Password</label>
                        <input
                            aria-invalid={false}
                            type='password'
                            name='password'
                            id='formPassword'
                        />
                        <button type='submit' className='outline'>
                            SignIn
                        </button>
                    </form>
                </article>
            </section>
        </>
    )
}

export default SignIn
