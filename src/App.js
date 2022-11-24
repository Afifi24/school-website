import React from 'react';
import './App.css';
import Connexion from './Components/Connexion';
import Header from './Components/Header';
import AcueillPage from './Pages/AcueillPage'
import Livres from './Components/Livres'
import ActivitePage from './Pages/ActivitePage';
import FormationPage from './Pages/FormationPage'
import PictogrammePage from './Pages/PictogrammePage'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
     <Route path='/connexion' element={<Connexion/>}/>
     <Route path='/' element={<AcueillPage/>}/>
     <Route path='/livres' element={<Livres/>}/>
     <Route path='/activites' element={<ActivitePage/>}/>
     <Route path='/formations' element={<FormationPage/>}/>
     <Route path='/pictogramme' element={<PictogrammePage/>}/>
     </Routes>
    </div>
  );
}

export default App;
