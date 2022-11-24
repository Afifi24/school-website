import React from 'react'
import styled from 'styled-components'
export default function Livres() {
  return (
    <Livresstyle>
    <h1>Livres</h1>
    </Livresstyle>
  )
}

const Livresstyle = styled.div`

min-height: 100vh;
background-image: url('../images/5.jpg');
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