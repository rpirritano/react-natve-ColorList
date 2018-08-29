import React from 'react'
import { Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'

import ColorList from './components/ColorList'
import ColorInfo from './components/ColorInfo'
import WebPage from './components/WebPage'

const App = StackNavigator({
  Home: { screen: ColorList},
  Details: { screen: ColorInfo },
  Web: { screen: WebPage }
})

export default App
