import '../styles/globals.css'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import NavBar from '../components/NavBar'
import customTheme from '../styles/theme'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={customTheme}>
        <CSSReset />
        <AnimatePresence initial={true}>
            <NavBar />
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
