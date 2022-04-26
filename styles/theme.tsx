// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const colors = {
  disecto:{
    "primary":"#39C0BA",
    "secondadry":"#3EB2AD"
  }
}

// 3. extend the theme
const theme = extendTheme({ config, colors })

export default theme