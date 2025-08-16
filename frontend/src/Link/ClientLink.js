import React from 'react'
import { Routes , Route, Navigate } from 'react-router-dom'
import InterfaceInternaute from '../interface/internaute/InterfaceInternaute'
import InterfaceClient from '../interface/client/InterfaceClient'
import DashboardClient from '../interface/client/pages/DashboardClient'
import Facture from '../interface/client/pages/Facture'
import NotificationClient from '../interface/client/pages/NotificationClient'
import ReclamationClient from '../interface/client/pages/ReclamationClient'
import Page404 from '../interface/Global/Error/Page404'
import ModifierPassword from '../interface/Global/Auth/ModifierPassword'
import Profile from '../interface/Global/Auth/Profile'
import ListeCompteurs from '../interface/client/pages/ListeCompteurs'
import ConsommationJournaliere from '../interface/client/pages/ConsommationJournaliere'
import Paiements from '../interface/client/pages/Paiements'
import PanneHistorique from '../interface/client/pages/PanneHistorique'
function ClientLink() {
  return (
    <Routes>
      <Route path='/' element={<div><InterfaceInternaute/></div>}/>
      <Route path='/login' element={<Navigate to="/client"/>}/>
      <Route path='/inscription' element={<Navigate to="/client"/>}/>
      <Route path='/client' element={<InterfaceClient/>}>	
        <Route index element={<DashboardClient/>}/>
        <Route path="liste-compteurs" element={ <ListeCompteurs/>}/>
        <Route path="liste-consommation-journaliere" element={ <ConsommationJournaliere/>}/>
        <Route path="factures" element={ <Facture/>}/>
        <Route path="paiements" element={ <Paiements/>}/>
        <Route path="notification" element={ <NotificationClient/>}/>
        <Route path="reclamation" element={ <ReclamationClient/>}/>
        <Route path="historique-pannes-compteurs" element={ <PanneHistorique/>}/>
        <Route path='modifier-mot-de-passe' element={<ModifierPassword/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
      </Route>
      <Route path='*' element={<Page404/>}/>
      {/* <Route path='*' element={<div><Navigate replace to="/page-404" /><Page404/> </div>}/> */}
    </Routes>
  )
}
export default ClientLink
