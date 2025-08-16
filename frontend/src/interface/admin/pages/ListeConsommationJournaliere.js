import React from 'react';
import Api from '../../Global/ComponentsTable/Api';
 const createUpdate=[
  ["ID","id"],
  ["compteur_intelligent_id","compteur_intelligent_id"],
  ["tranche_id","tranche_id"],
  ["date_consommation","date_consommation"],
  ["prix_unitaire_kilowatt","prix_unitaire_kilowatt"],
  ["consommation_client","consommation_client"],
  ["consommation_optimale","consommation_optimale"],
  ["index_recent_journaliere","index_recent_journaliere"],
 ];
 const show=[
  ["ID","id"],
  ["compteur_intelligent_id","compteur_intelligent_id"],
  ["tranche_id","tranche_id"],
  ["date_consommation","date_consommation"],
  ["prix_unitaire_kilowatt","prix_unitaire_kilowatt"],
  ["consommation_client","consommation_client"],
  ["consommation_optimale","consommation_optimale"],
  ["index_recent_journaliere","index_recent_journaliere"],
  ["Crée le","created_at"],
  ["Modifié le","updated_at"],
 ];
export default function ListeConsommationJournaliere() {
  const initialValue = { nom: "", prenom: "", numero_telephone: "", 
  email: "", mot_de_passe:"",created_at:"", updated_at:"", error_list:[]};
  const url = `http://127.0.0.1:8000/api/consommation-journaliere`
  const columnDefs = [
    { headerName: "ID", field: "id",  maxWidth:100,minWidth:80, pinned: 'left' },
    { headerName: "compteur_intelligent_id", field: "compteur_intelligent_id", minWidth: 150 , maxWidth: 400 },
    { headerName: "tranche_id", field: "tranche_id", minWidth: 150 , maxWidth: 400 },
    { headerName: "date_consommation", field: "date_consommation", minWidth: 150 , maxWidth: 400 },
    { headerName: "prix_unitaire_kilowatt", field: "prix_unitaire_kilowatt", minWidth: 150 , maxWidth: 400 },
    { headerName: "consommation_client", field: "consommation_client", minWidth: 150 , maxWidth: 400 },
    { headerName: "consommation_optimale", field: "consommation_optimale", minWidth: 150 , maxWidth: 400 },
    { headerName: "index_recent_journaliere", field: "index_recent_journaliere", minWidth: 150 , maxWidth: 400 }
  ]
  return (
    <div style={{width:"100%"}}>
        <Api nom='consommation-journaliere' tableNamePlu='Consommation-journaliere' tableNameSing='consommation-journaliere' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/>  
    </div>
  );
}
