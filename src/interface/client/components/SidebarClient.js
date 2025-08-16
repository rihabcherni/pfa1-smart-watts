import React from "react";
import { BsTools,BsFillEnvelopeExclamationFill } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FaFileInvoiceDollar, FaMoneyCheck, FaBolt} from "react-icons/fa";
import { MdReportProblem } from "react-icons/md"
export const SidebarClient = [
    {id: 1, name: "Tableau de bord",  path:"/client", icon: <ImStatsDots/>, size:"meduim"},
    {id: 2,name: "Gestion des compteurs", path:"/client/liste-compteurs", icon: <FaBolt/>, size:"meduim"},
    {id: 3,name: "Consommations journalières", path:"/client/liste-consommation-journaliere", icon: <AiOutlineAreaChart/>, size:"meduim"},   
    {id: 4,name: "Gestion des factures", path:"/client/factures", icon: <FaFileInvoiceDollar/>, size:"meduim"},
    {id: 5,name: "Gestion des paiements", path:"/client/paiements", icon: <FaMoneyCheck/>, size:"meduim"},      
    {id: 6,name: "Pannes compteurs", path:"/client/historique-pannes-compteurs", icon: <MdReportProblem/>, size:"meduim"},
    {id: 7,name: "Réclamation des clients", path:"/client/reclamation", icon: <BsFillEnvelopeExclamationFill/>, size:"meduim"},
  ];
