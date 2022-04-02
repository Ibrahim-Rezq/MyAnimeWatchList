import SignIn from '../../components/SignIn'
import Nav from '../../components/Nav'
import Head from 'next/head'
import Footer from '../../components/Footer'

const Login = () => {
    return (
        <>
            <Head>
                <title>Login</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Nav />
            <section className='container'>
                <SignIn />
            </section>
            <Footer />
        </>
    )
}

export default Login
