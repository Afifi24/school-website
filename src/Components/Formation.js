import React from 'react'
import styled from 'styled-components'
export default function Formation() {
  return (
    <Formationstyle>
      <h1>Formations</h1>
    </Formationstyle>
  )
}

const Formationstyle = styled.div`
min-height: 100vh;
background-image: url('../images/2.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;
h1{
  font-size: 3rem;
}
`