import React from 'react'
import styled from 'styled-components'
export default function Pictogramme() {
  return (
    <Pictogrammestyle>
      <h1>Pictogramme</h1>
    </Pictogrammestyle>
  )
}

const Pictogrammestyle = styled.div`
min-height: 100vh;
background-image: url('../images/3.jpg');
background-position:center;
background-repeat:no-repeat;
background-size:cover;
display: flex;
align-items: center;
justify-content: center;
h1{
  color: #fff;
  font-size: 3rem;
}
`