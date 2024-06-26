import NextLink from 'next/link'
import {
  Box,
  Heading,
  Container,
  Divider,
  Button,
  Text
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container align="center">
      <Heading as="h1" fontSize={100}>Not Found</Heading>
      <Text>The page you&apos;re looking for does not exist.</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="blue">Go Back to Hom Page.</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
