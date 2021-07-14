import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const PageContainer = styled.div`
  ${tw`
bg-red-500
py-10
w-full
`}
  color:white
`
const LandingPage = () => {
  return <PageContainer>How are you?</PageContainer>
}

export default LandingPage
