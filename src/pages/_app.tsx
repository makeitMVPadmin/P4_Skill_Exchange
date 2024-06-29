import type { AppProps } from "next/app";
import { AnimatePresence } from 'framer-motion';

import Main from '../layout'
import '@/styles/index.scss'

function App({ Component, pageProps, router }: AppProps) {
  return (
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
  )
}

export default App
