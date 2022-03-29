import SignIn from '../../components/SignIn'
import Nav from '../../components/Nav'

const Login = () => {
    return (
        <>
            <Nav PageName={'Login'} />
            <section className='container'>
                <SignIn />
            </section>
        </>
    )
}

export default Login
