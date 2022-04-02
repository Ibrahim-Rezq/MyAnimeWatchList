import SignUp from '../../components/SignUp'
import Nav from '../../components/Nav'
import Head from 'next/head'
import Footer from '../../components/Footer'

const register = () => {
    return (
        <>
            <Head>
                <title>Register</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Nav />
            <section className='container'>
                <SignUp />
            </section>
            <Footer />
        </>
    )
}

export default register
