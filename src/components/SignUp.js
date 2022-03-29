import React from 'react'

const SignUp = () => {
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
                        />
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
                            SignUp
                        </button>
                    </form>
                </article>
            </section>
        </>
    )
}

export default SignUp
