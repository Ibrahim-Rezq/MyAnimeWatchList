import SignUp from '../../components/SignUp'
import Nav from '../../components/Nav'

const register = () => {
    return (
        <>
            <Nav PageName={'Register'} />
            <section className='container'>
                <SignUp />
            </section>
        </>
    )
}

export default register
