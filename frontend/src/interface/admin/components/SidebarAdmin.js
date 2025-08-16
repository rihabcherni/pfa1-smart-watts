import React from "react";
import { BsTools,BsFillEnvelopeExclamationFill } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FaFileInvoiceDollar, FaMoneyCheck, FaMoneyBillWave, FaBolt, FaUser,FaUsers, FaHardHat} from "react-icons/fa";
import { MdReportProblem,MdNotificationsActive } from "react-icons/md"
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ContactsIcon from '@mui/icons-material/Contacts';

export const SidebarAdmin = [
    {id: 1, name: "Tableau de bord",  path:"/administrateur", icon: <ImStatsDots/>, size:"meduim"},
    {id: 2, name: "Personnel", icon: <FaUsers/>,
      items: [
        {id:3, name: "Administrateur",path:"/administrateur/liste-administrateurs", icon: <AdminPanelSettingsIcon/>, size:"meduim"},
        {id:4,name: "Agent maintenance", path:"/administrateur/liste-agent-maintenance", icon: <BsTools/>, size:"meduim"},
      ], size:"meduim"},
    {id: 5,name: "Gestion comptes clients", path:"/administrateur/liste-clients", icon: <FaUser/>, size:"meduim"},
    {id: 6,name: "Gestion compteurs", path:"/administrateur/liste-compteurs", icon: <FaBolt/>, size:"meduim"},
    {id: 7,name: "Consommations journalières", path:"/administrateur/liste-consommation-journaliere", icon: <AiOutlineAreaChart/>, size:"meduim"},   
    {id: 8,name: "Gestion tarifs", path:"/administrateur/tarifs", icon: <FaMoneyBillWave/>, size:"meduim"},
    {id: 9,name: "Gestion factures", path:"/administrateur/factures", icon: <FaFileInvoiceDollar/>, size:"meduim"},
    {id: 10,name: "Gestion paiements", path:"/administrateur/paiements", icon: <FaMoneyCheck/>, size:"meduim"},      
    {id: 11,name: "Pannes compteurs", path:"/administrateur/pannes-compteurs", icon: <MdReportProblem/>, size:"meduim"},
    {id: 11,name: "Tous notifications", path:"/administrateur/tous-notifications", icon: <MdNotificationsActive/>, size:"meduim"},
    {id: 12,name: "Réclamation des clients", path:"/administrateur/reclamation-clients", icon: <BsFillEnvelopeExclamationFill/>, size:"meduim"},
    {id:13, name: "Support",path:"/administrateur/support", icon: <ContactsIcon/>, size:"meduim"},
  ];
  