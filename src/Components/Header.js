import React,{useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
export default function Header() {

  const [isopen,setIsopen] = useState(false)
  const CloseOpen = ()=>{
    setIsopen(!isopen)
  }
  const CloseNav = ()=>{
    setIsopen(false)
  }
  return (
    <Headerstyle>
        <div className="header">
        <div className="header-search">
        <input placeholder='Recherche' type="search" name="search" id="search" /><i class="fa-solid fa-magnifying-glass"></i>
      </div>
         <div className="header-login">
            <button className='connex'><i class="fa-solid fa-user"></i> Connexion</button>
            <button>Inscription</button>
         </div>
        </div>
         
      <div className="nav">
        <div className="logo">Children</div>
        <div className="nav-icon" onClick={CloseOpen}>
         <i className={isopen?"fa-solid fa-times":"fa-solid fa-bars"}></i>
         </div>
        <ul className={isopen?'nav-menu active':'nav-menu'}>
           <li onClick={CloseNav} className='nav-item'><Link className='nav-link' to='/'>Acueill</Link></li>
           <li onClick={CloseNav} className='nav-item'><Link className='nav-link' to='/livres'>Livres</Link></li>
           <li onClick={CloseNav} className='nav-item'><Link className='nav-link' to='/activites'>Activités</Link></li>
           <li onClick={CloseNav} className='nav-item'><Link className='nav-link'to='/formations'>Formations</Link></li>
           <li onClick={CloseNav} className='nav-item'><Link className='nav-link'to='/pictogramme'>Pictogramme</Link></li>
           <li onClick={CloseNav} className='nav-item'><Link className='nav-link'to='/histoire-audio'>Histoires audio</Link></li>
           <li onClick={CloseNav} className='nav-item'><Link className='nav-link'to='/videos'>Vidéos</Link></li>
           <li onClick={CloseNav} className='nav-item'><Link className='nav-link'to='/boutique-en-ligne'>Boutique en ligne </Link></li>
        </ul>
      </div>
    </Headerstyle>
  )
}


const Headerstyle = styled.div`
min-height: 20vh;
.header{
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 7vh;
    padding: 0.5rem 0rem;
    .header-search{
        display: flex;
        align-items: center;
    input{
        width: 17rem;
        height: 1.9rem;
        outline: none;
        padding: 3px 5px;
        border-top-left-radius:3px;
        border-bottom-left-radius:3px;
        border: 1px solid #555;
        &:focus{
            border: 1.5px solid #222;
            box-shadow:1px 1px 10px rgba(0,0,0,0.1);
        }
    }
    .fa-magnifying-glass{
        color: #fff;
        background-color: #076FC6;
        height: 1.9rem;
        width: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-top-right-radius:3px;
        border-bottom-right-radius:3px;

    }}
    .header-login{
      display: flex;
      align-items: center;
      width: 300px;
      justify-content: space-between;
      button{
        width: 9rem;
        height: 1.9rem;
        border: 1px solid #076FC6;
        border-radius: 3px;
        cursor: pointer;
        background-color: #076FC6;
        color: #fff;
        
      }
      .connex{
            background-color: transparent;
            color: #076FC6;
            &:hover{
                background-color: #076FC6;
                color: #fff;
                transition: all 0.5s ease-out;
            }
        }
    }
}

.nav{
    min-height: 10vh;
    display: flex;
    align-items: center;
    background-color: #076FC6;
    .nav-icon{
  color: #fff;
  margin-right:2rem;
  cursor: pointer;
  display: none;
  .fa-times, .fa-bars{
    font-size: 2.5rem;
  }
}
    .logo{
        flex: 1;
        color: #fff;
        margin-left:4rem;
        font-family: 'Lobster', cursive;
    }
    .nav-menu{
        list-style: none;
        display: flex;
        align-items: center;
        flex: 6;
        justify-content: space-around;
    }
    .nav-item{
      height: 10vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .nav-link{
        text-decoration: none;
        color: #fff;
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 7rem;
        text-align: center;
        &:hover{
          background-color: #fff;
          color: #076FC6;
          transition: .3s ease-in-out;
        }
    }
}

/* media-query */
@media(max-width:1060px){
  .header{
    .header-search{
      input{
        width: 10rem;
      }
      
      }
      .header-login{
        width: 14rem;
        button{
          width: 6rem;
         
        }
    }
    @media(max-width:500px) {
      .header-search{
      input{
        width: 5rem;
        ::placeholder{
          font-size:0.7rem;
        }
      }
      
      }
      .header-login{
        width: 10rem;
        button{
          width: 4rem;
          font-size:0.6rem;
         
        }
    }
    }
   }

.nav{
  .nav-icon{
    display: flex;
    z-index: 10;
  }
  .nav-menu{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 7%;
    left: -100%;
    background-color: #076FC6;
    flex-direction: column;
    transition: all .5s ease;
  }
    .active{
    transition: all .5s ease;
      left: 0%;
    }
}
}
`