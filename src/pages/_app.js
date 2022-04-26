import '../css/index.css'
import { Provider } from 'react-redux'
import { useStore } from '../../redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
    const { store, persistor } = useStore(pageProps.initialReduxState)
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Nav />
                <Component {...pageProps} />
                <Footer />
            </PersistGate>
        </Provider>
    )
}
