import { ChakraProvider } from '@chakra-ui/react'
import Main from '../layout'
import theme from '../layout/theme'
import { AnimatePresence } from 'framer-motion'

import '../styles/index.scss'

function App({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Main router={router}>
        <AnimatePresence
          mode={'wait'}
          initial={true}
          onExitComplete={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  )
}

export default App
