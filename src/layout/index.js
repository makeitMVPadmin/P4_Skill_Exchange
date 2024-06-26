import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content=""
        />
        <meta name="author" content="" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <meta name="twitter:image" content="" />
        <meta property="og:site_name" content="" />
        <meta name="og:title" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <title>Launch Academy P4 - Skill Exchange</title>
      </Head>
      <Container maxWidth={'full'} mb={20}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
