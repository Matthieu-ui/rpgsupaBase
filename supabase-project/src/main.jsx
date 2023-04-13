import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './routes/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Characters from './pages/Characters'
import Clans from './pages/Clans'
import CreateNew from './pages/CreateNew'
import EditCharacter from './pages/EditCharacter'

import CharacterDetails from "./pages/CharacterDetails";

import CreateCharacter from './pages/CreateNew'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="characters" element={<Characters />} />
      <Route path="create" element={<CreateNew />} component={CreateCharacter} />
      <Route path="clans" element={<Clans />} />
      <Route path="contact" element={<Contact />} />

      <Route exact path="/characters/:characterId" element={<CharacterDetails />} />  
      <Route path="/characters/:characterId/edit" element={<EditCharacter />} />
    </Route>


 
  </Routes>
 


</BrowserRouter>
  </React.StrictMode>,
)
