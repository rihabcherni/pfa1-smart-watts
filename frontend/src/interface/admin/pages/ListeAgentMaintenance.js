import React from 'react';
import Api from '../../Global/ComponentsTable/Api';
 const createUpdate=[
  ["ID","id"],
  ["Nom","nom"],
  ["Prénom","prenom"],
  ["CIN","CIN"],
  ["Numéro télèphone","numero_telephone"],
  ["E-mail","email"],
  ["Mot de passe","mot_de_passe"],
  ["photo","photo"],
 ];
 const show=[
  ["ID","id"],
  ["Nom","nom"],
  ["Prénom","prenom"],
  ["CIN","CIN"],
  ["Numéro télèphone","numero_telephone"],
  ["E-mail","email"],
  ["Mot de passe","mot_de_passe"],
  ["photo","photo"],
  ["Crée le","created_at"],
  ["Modifié le","updated_at"],
 ];
export default function ListeAgentMaintenance() {
  const initialValue = { nom: "", prenom: "", numero_telephone: "", 
  email: "", mot_de_passe:"",created_at:"", updated_at:"", error_list:[]};
  const url = `http://127.0.0.1:8000/api/agent-maintenance`
  const columnDefs = [
    { headerName: "ID", field: "id",  maxWidth:100,minWidth:80, pinned: 'left' },
    { headerName: "Photo", field: "photo", minWidth:80, maxWidth:110, cellRenderer: (params) =>
    <img  style={{height:"47px", width:"47px", borderRadius:"50%"}} 
          src={`http://127.0.0.1:8000/images/agentMaintenance/${params.data.photo}`} alt="agent-maintenance"/>},
    { headerName: "Nom", field: "nom", minWidth: 100 , maxWidth: 180 },
    { headerName: "Prénom ", field: "prenom", minWidth: 110 , maxWidth: 180 },
    { headerName: "CIN ", field: "CIN", minWidth: 120 , maxWidth: 180 },
    { headerName: "Télèphone", field: "numero_telephone" , minWidth: 140 , maxWidth: 200 },
    { headerName: "E-mail", field: "email", minWidth: 200 , maxWidth: 300  },
  ]
  return (
    <div style={{width:"100%"}}>
        <Api nom='agentMaintenance' tableNamePlu='Liste agents maintenance' tableNameSing='Liste agents maintenance' url={url} initialValue={initialValue} columnDefs={columnDefs}  show={show} createUpdate={createUpdate}/>  
    </div>
  );
}
