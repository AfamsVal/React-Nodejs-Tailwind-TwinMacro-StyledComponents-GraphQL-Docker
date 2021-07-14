import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const NavBarContainer = styled.div`
  ${tw`
w-full
flex
flex-row
items-center
justify-between
`}
  background:red;
  height: 50px;
`

const NavBar = () => {
  return (
    <NavBarContainer>
      <div>My App</div>
      <div>Home</div>
    </NavBarContainer>
  )
}

export default NavBar
