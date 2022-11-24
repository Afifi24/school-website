import React from 'react'
import styled from 'styled-components'
export default function Acueill() {
  return (
    <Acueillstyle>
      <h1>Accueil</h1>
    </Acueillstyle>
  )
}

const Acueillstyle = styled.div`
min-height: 100vh;
background-image:url('../images/4.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
flex-direction:column;
h1{
  font-size:3rem;
}
`