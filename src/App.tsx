import React from 'react'
import './App.css'
import styled from 'styled-components'
import tw from 'twin.macro'
import { NavBar } from './components/navBar/index'

const AppContainer = styled.div`
  ${tw`
w-full
h-full
flex
flex-col
bg-gray-500
`}
`

const App = () => {
  return (
    <AppContainer>
      <NavBar />
      <div>Other items...</div>
    </AppContainer>
  )
}

export default App
