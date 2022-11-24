import React from 'react'
import styled from 'styled-components'
export default function Activite() {
  return (
    <Activitestyle>
      <h1>Activite</h1>
    </Activitestyle>
  )
}

const Activitestyle = styled.div`
min-height: 100vh;
background-position:center;
background-repeat:no-repeat;
background-size:cover;
background-image:url('../images/1.jpg');
display: flex;
align-items: center;
justify-content: center;
h1{
    color: #fff;
    font-size: 4rem;
}
`