import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../interface/Global/Auth/Login'
import Inscription from '../interface/Global/Auth/Inscription'
import ModifierPasswordOublier from '../interface/Global/Auth/ModifierPasswordOublier'
import OublierPassword from '../interface/Global/Auth/OublierPassword'
import Page404 from '../interface/Global/Error/Page404'
import InterfaceInternaute from '../interface/internaute/InterfaceInternaute'
import MainInter from '../interface/internaute/components/MainInter';
function InternauteLink() {
 return(
        <>
            <Routes>              
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/' element={<InterfaceInternaute/>}>	
                    <Route index element={ <MainInter/>}/>
                    <Route path='/inscription' element={<Inscription/>}></Route>
                    <Route path='/oublier-mot-de-passe' element={<OublierPassword/>}></Route>
                    <Route path='/modifier-mot-de-passe-oublier' element={<ModifierPasswordOublier/>}></Route>
              </Route>
              <Route path='*' element={<Page404/>}/>
            </Routes>
        </> 
      );
}
export default InternauteLink
