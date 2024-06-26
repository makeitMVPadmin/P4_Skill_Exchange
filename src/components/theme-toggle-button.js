import { Box, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Box>
      <IconButton
        aria-label="Toggle theme"
        borderRadius={'100%'}
        colorScheme={useColorModeValue('purple', 'orange')}
        icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
        onClick={toggleColorMode}
      ></IconButton>
      </Box>
  )
}

export default ThemeToggleButton
