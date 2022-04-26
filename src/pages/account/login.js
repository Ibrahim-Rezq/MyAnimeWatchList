import SignIn from '../../components/SignIn'
import Head from 'next/head'

const Login = () => {
    return (
        <>
            <Head>
                <title>Login</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <section className='main'>
                <SignIn />
            </section>
        </>
    )
}

export default Login
