import { extendTheme } from '@chakra-ui/react';


export default extendTheme({
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#3F403C",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#E2E6D8",
      "100": "#D1D2DC",
      "50": "#EEEEF2"
    }
  },
  styles: {
    global: {
      body: {
        bg: 'gray.800',
        color: 'gray.200'
      }
    }
  }
})