import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const config = {
    initialColorMode: "light", // options are light or dark
    useSystemColorMode: false, // options are true or false
}

const customTheme = extendTheme({
    styles: {
      global: (props) => ({
        body: {
          fontFamily: 'body',
          color: mode('orance.200', 'white')(props),
          bg: mode('black', 'black')(props),
          lineHeight: 'base',
        },
      }),
    },
    fonts: {
    //   heading: 'league mono narrow, sans serif',
    }
  })

export default customTheme