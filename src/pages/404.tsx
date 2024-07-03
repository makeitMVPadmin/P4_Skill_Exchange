import NextLink from 'next/link';

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>The page you&apos;re looking for does not exist.</p>
      <br/>

      <div>
        <NextLink href="/">
          <button>Go Back to Hom Page.</button>
        </NextLink>
      </div>
    </div>
  )
}

export default NotFound
