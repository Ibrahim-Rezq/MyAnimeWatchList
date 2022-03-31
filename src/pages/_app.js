import '../../node_modules/@picocss/pico/css/pico.min.css';
import '../../node_modules/@picocss/pico/css/pico.fluid.classless.min.css';
import '../css/index.css';
import { Provider } from 'react-redux';
import { useStore } from '../../redux/store';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
