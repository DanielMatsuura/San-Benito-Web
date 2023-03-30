import 'bootstrap/dist/css/bootstrap.min.css';
import {InquilinoProvider} from '../src/context/inquilino-context';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <InquilinoProvider>
        <Component {...pageProps} />
      </InquilinoProvider>
    </>
  )
}

export default MyApp

