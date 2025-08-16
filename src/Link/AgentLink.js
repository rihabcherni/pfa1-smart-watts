import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import InterfaceAgent from '../interface/agent-maintenance/InterfaceAgent'
import CompteurPanne from '../interface/agent-maintenance/pages/CompteurPanne'
import DashboardAgent from '../interface/agent-maintenance/pages/DashboardAgent'
import NotificationAgent from '../interface/agent-maintenance/pages/NotificationAgent'
import InterfaceInternaute from '../interface/internaute/InterfaceInternaute'
import Page404 from '../interface/Global/Error/Page404'
import ModifierPassword from '../interface/Global/Auth/ModifierPassword'
import Profile from '../interface/Global/Auth/Profile'
import ReclamationClients from '../interface/agent-maintenance/pages/ReclamationClients'
function AgentLink() {
  return (
    <Routes>
      <Route path='/' element={<div><InterfaceInternaute/></div>}/>
      <Route path='/login' element={<Navigate to="/agent-maintenance"/>}/>
      <Route path='/inscription' element={<Navigate to="/agent-maintenance"/>}/>
      <Route path='/agent-maintenance' element={<InterfaceAgent/>}>	
        <Route index element={<DashboardAgent/>}/>
        <Route path="compteurs-pannes" element={ <CompteurPanne/>}/>
        <Route path="reclamation-clients" element={ <ReclamationClients/>}/>
        <Route path="notification" element={ <NotificationAgent/>}/>
        <Route path='modifier-mot-de-passe' element={<ModifierPassword/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
      </Route>
      <Route path='*' element={<Page404/>}/>
      {/* <Route path='*' element={<div><Navigate replace to="/page-404" /><Page404/> </div>}/> */}
    </Routes>
  )
}
export default AgentLink
