import React from 'react';
import Api from '../../Global/ComponentsTable/Api';
 const createUpdate=[
  ["ID","id"],
  ["Numéro compteur","compteur_intelligent_id"],
  ["Type","type_reclamation"],
  ["Description","description_reclamation"],
  ["Date","date_reclamation"],
  ["État traitement","etat_traitement"]
 ];
 const show=[
  ["ID","id"],
  ["Numéro compteur","compteur_intelligent_id"],
  ["Type","type_reclamation"],
  ["Description","description_reclamation"],
  ["Date","date_reclamation"],
  ["État traitement","etat_traitement"],
  ["Crée le","created_at"],
  ["Modifié le","updated_at"],
 ];
export default function ReclamationClient() {
  const initialValue = { compteur_intelligent_id: "", type_reclamation: "", description_reclamation: "", date_reclamation: "", 
  etat_traitement: "",created_at:"", updated_at:"", error_list:[]};

  const url = `http://127.0.0.1:8000/api/reclamation`
  const columnDefs = [
    { headerName: "ID", field: "id",  maxWidth:80,minWidth:50, pinned: 'left' },
    { headerName: "État traitement", field: "etat_traitement", minWidth: 50 , maxWidth: 400 },
    { headerName: "Numéro compteur", field: "compteur_intelligent_id", minWidth: 50 , maxWidth: 180 },
    { headerName: "Type", field: "type_reclamation", minWidth: 150 , maxWidth: 400 },
    { headerName: "Description", field: "description_reclamation", minWidth: 50 , maxWidth: 400 },
    { headerName: "Date", field: "date_reclamation", minWidth: 50 , maxWidth: 400 },
  ]
  return (
    <div style={{width:"100%"}}>
        <Api nom='réclamation' tableNamePlu='réclamation' tableNameSing='Liste réclamation' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/>  
    </div>
  );
}

