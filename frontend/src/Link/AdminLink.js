import React from 'react'
import { Routes , Route, Navigate } from 'react-router-dom'
import Page404 from '../interface/Global/Error/Page404'
import InterfaceInternaute from '../interface/internaute/InterfaceInternaute'
import DashboardAdmin from '../interface/admin/pages/DashboardAdmin'
import ListeAdministrateur from '../interface/admin/pages/ListeAdministrateur'
import ListeClients from '../interface/admin/pages/ListeClients'
import ListeCompteurs from '../interface/admin/pages/ListeCompteurs'
import ListeConsommationJournaliere from '../interface/admin/pages/ListeConsommationJournaliere'
import ListeReclamation from '../interface/admin/pages/ListeReclamation'
import NotificationAdmin from '../interface/admin/pages/NotificationAdmin'
import InterfaceAdmin from '../interface/admin/InterfaceAdmin'
import ModifierPassword from '../interface/Global/Auth/ModifierPassword'
import Profile from '../interface/Global/Auth/Profile'
import ListeAgentMaintenance from '../interface/admin/pages/ListeAgentMaintenance'
import Tarifs from '../interface/admin/pages/Tarifs'
import Support from '../interface/admin/pages/Support'
import PanneCompteurs from '../interface/admin/pages/PanneCompteurs'
import Facture from '../interface/admin/pages/Facture'
import Paiement from '../interface/admin/pages/Paiement'
function AdminLink() {
  return (
    <Routes>
      <Route path='/' element={<div><InterfaceInternaute/></div>}/>
      <Route path='/login' element={<Navigate to="/administrateur"/>}/>
      <Route path='/inscription' element={<Navigate to="/administrateur"/>}/>
      <Route path='/administrateur' element={<InterfaceAdmin/>}>	
        <Route index element={<DashboardAdmin/>}/>
        <Route path="liste-administrateurs" element={ <ListeAdministrateur/>}/>
        <Route path="liste-agent-maintenance" element={ <ListeAgentMaintenance/>}/>
        <Route path="liste-clients" element={ <ListeClients/>}/>
        <Route path="liste-compteurs" element={ <ListeCompteurs/>}/>
        <Route path="liste-consommation-journaliere" element={ <ListeConsommationJournaliere/>}/>
        <Route path="tarifs" element={ <Tarifs/>}/>

        <Route path="factures" element={ <Facture/>}/>
        <Route path="paiements" element={ <Paiement/>}/>
        <Route path="reclamation-clients" element={ <ListeReclamation/>}/>
        <Route path="pannes-compteurs" element={ <PanneCompteurs/>}/>
        <Route path="support" element={ <Support/>}/>  
        <Route path="tous-notifications" element={ <NotificationAdmin/>}/>
        <Route path='modifier-mot-de-passe' element={<ModifierPassword/>}></Route>
        <Route path='profile' element={<Profile/>}></Route>
      </Route>
   
      <Route path='*' element={<Page404/>}/>
      {/* <Route path='*' element={<div><Navigate replace to="/page-404" /><Page404/> </div>}/> */}
    </Routes>
  )
}

export default AdminLink
