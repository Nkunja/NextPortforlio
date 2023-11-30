import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { ChakraProvider } from "@chakra-ui/react"
import theme from '../theme' 

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
