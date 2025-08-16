import React from 'react';
import Api from '../../Global/ComponentsTable/Api';
 const createUpdate=[
  ["ID","id"],
  ["logement_id","logement_id"],
  ["date_installation","date_installation"],
  ["index_ancien_mois","index_ancien_mois"],
 ];
 const show=[
  ["ID","id"],
  ["logement_id","logement_id"],
  ["date_installation","date_installation"],
  ["index_ancien_mois","index_ancien_mois"],
  ["Crée le","created_at"],
  ["Modifié le","updated_at"],
 ];
export default function PanneHistorique() {
  const initialValue = { nom: "", prenom: "", numero_telephone: "", 
  email: "", mot_de_passe:"",created_at:"", updated_at:"", error_list:[]};
  const url = `http://127.0.0.1:8000/api/paiement`
  const columnDefs = [
    { headerName: "ID", field: "id",  maxWidth:100,minWidth:80, pinned: 'left' },
    { headerName: "logement_id", field: "logement_id", minWidth: 150 , maxWidth: 400 },
    { headerName: "date_installation", field: "date_installation", minWidth: 150 , maxWidth: 400 },
    { headerName: "index_ancien_mois", field: "index_ancien_mois", minWidth: 150 , maxWidth: 400 }
  ]
  return (
    <div style={{width:"100%"}}>
        <Api nom='paiement' tableNamePlu='paiement' tableNameSing='Liste paiement' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/>  
    </div>
  );
}
