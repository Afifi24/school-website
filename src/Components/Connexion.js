import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
export default function Connexion() {
  return (
    <Connexstyle>
      <div className="head">
        <h1>Log In</h1>
        <div className="email">
        <label htmlFor="">adresse email</label>
        <input type="text" />
        </div>
        <div className="password">
            <label htmlFor="">Password</label>
            <input type="text" />
        </div>
        <h4 className='pass'>mot de passe oublié ?</h4>
       <button>Connexion</button>
      </div>
    </Connexstyle>
  )
}

const Connexstyle = styled.div`
/* background-color: lightcoral; */
background-color: #FFF0E5;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
.head{
    display: flex;
    flex-direction: column;
   justify-content: space-around;
   height: 400px;
   width: 300px;
   padding: 0rem 1rem;
   h1{
    text-align: center;
   }
   .password, .email{
    display: flex;
    flex-direction: column;
     input{
        height: 2.5rem;
        padding: 0rem 0.5rem;
        outline: none;
        &:focus{
            border: 2px solid #076FC6;
            transition:all 0.5s ease-in-out;
        }
     }
     label{
        font-size:0.9rem;
        margin-bottom: 0.3rem;
     }
   }
   button{
    height: 2.5rem;
    background-color: #076FC6;
    border: none;
    cursor: pointer;
    color: #fff;
    &:hover{
        transform: scale(0.98);
    }
   }
   .pass{
    cursor: pointer;
    font-size:0.9rem;
    color: #555;
    &:hover{
      color: #222;
    }
   }
}

`