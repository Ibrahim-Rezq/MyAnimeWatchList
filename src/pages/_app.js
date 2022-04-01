import '../../node_modules/@picocss/pico/css/pico.min.css'
import '../../node_modules/@picocss/pico/css/pico.fluid.classless.min.css'
import '../css/index.css'
import { Provider } from 'react-redux'
import { useStore } from '../../redux/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }) {
    const { store, persistor } = useStore(pageProps.initialReduxState)

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    )
}
