// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: {
    diablo: 'diablo'
  },
  styles: {
    global: () => ({
      body: {
        bg: "#121212"
      }
    })
  }
})

export default theme