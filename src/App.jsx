import React from 'react'
import MainRouter from './Router/MainRouter'
import ThemeComponent from './theme/ThemeComponent'

const App = () => {
  return (
    <ThemeComponent>
        <MainRouter />
    </ThemeComponent>
  )
}

export default App