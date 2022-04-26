import SignUp from '../../components/SignUp'
import Head from 'next/head'

const register = () => {
    return (
        <>
            <Head>
                <title>Register</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <section className='container'>
                <SignUp />
            </section>
        </>
    )
}

export default register
