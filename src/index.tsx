import React from 'react'
import { ThemeProvider } from 'react-jss'

import Props from './types/Props'

import Yamde from './Yamde'
import { lightTheme } from './themes/light'
import { darkTheme } from './themes/dark'

import { defaultToolbarAction } from './utils/defaultToolbarActions'

const YamdeComp = ({ value, handler, theme = 'light', toolbar = defaultToolbarAction }: Props) => {
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Yamde value={value} handler={handler} toolbar={toolbar} />
    </ThemeProvider>
  )
}

export default YamdeComp
