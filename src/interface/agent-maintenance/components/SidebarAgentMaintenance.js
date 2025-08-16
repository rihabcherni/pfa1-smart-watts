import React from "react";
import { BsFillEnvelopeExclamationFill } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { FaBolt} from "react-icons/fa";


export const SidebarAgentMaintenance = [
    {id: 1, name: "Tableau de bord",  path:"/agent-maintenance", icon: <ImStatsDots/>, size:"meduim"},
    {id: 2,name: "Gestion des compteurs pannes", path:"/agent-maintenance/compteurs-pannes", icon: <FaBolt/>, size:"meduim"},
    {id: 3,name: "Réclamation des clients", path:"/agent-maintenance/reclamation-clients", icon: <BsFillEnvelopeExclamationFill/>, size:"meduim"},
  ];
