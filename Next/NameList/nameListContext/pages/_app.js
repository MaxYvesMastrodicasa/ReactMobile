import '../styles/globals.css';
import { NamesProvider } from '@/context/NamesContext';

function App({ Component, pageProps }) {
  return (
    <NamesProvider>
      <Component {...pageProps} />
    </NamesProvider>
  );
}

export default App;
