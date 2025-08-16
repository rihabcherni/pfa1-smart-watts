import React from 'react';
import Api from '../../Global/ComponentsTable/Api';
 const createUpdate=[
  ["ID","id"],
  ["Agent maintenance","agent_maintenance"],
  ["compteur numéro","compteur_intelligent_id"],
  ["Type panne","type_panne"],
  ["Date debut panne","date_debut_panne"],
  ["Date fin panne","date_fin_panne"],
  ["cout_panne","cout_panne"], 
 ];
 const show=[
  ["ID","id"],
  ["Agent maintenance","agent_maintenance"],
  ["compteur numéro","compteur_intelligent_id"],
  ["Type panne","type_panne"],
  ["Date debut panne","date_debut_panne"],
  ["Date fin panne","date_fin_panne"],
  ["cout_panne","cout_panne"],
 ];
export default function PanneCompteurs() {
  const initialValue = { agent_maintenance: "", compteur_intelligent_id: "", type_panne: "",
  date_debut_panne: "",  date_fin_panne: "", 
  description_panne: "", cout_panne: "",created_at:"", updated_at:"", error_list:[]};

  const url = `http://127.0.0.1:8000/api/reparer`
  const columnDefs = [
    { headerName: "ID", field: "id",  maxWidth:80,minWidth:50, pinned: 'left' },
    { headerName: "Agent maintenance", field: "agent_maintenance",  maxWidth:1000,minWidth:100, pinned: 'left' },
    { headerName: "compteur numéro", field: "compteur_intelligent_id",  maxWidth:1000,minWidth:100, pinned: 'left' },
    { headerName: "Type panne", field: "type_panne",  maxWidth:1000,minWidth:100, pinned: 'left' },
    { headerName: "Date debut", field: "date_debut_panne",  maxWidth:1000,minWidth:100, pinned: 'left' },
    { headerName: "Date fin", field: "date_fin_panne",  maxWidth:1000,minWidth:100, pinned: 'left' },
    { headerName: "Description", field: "description_panne",  maxWidth:1000,minWidth:100, pinned: 'left' },
    { headerName: "cout_panne", field: "cout_panne",  maxWidth:1000,minWidth:100, pinned: 'left' },
    
  ]
  return (
    <div style={{width:"100%"}}>
        <Api nom='pannes' tableNamePlu='panne compteur' tableNameSing='Liste pannes compteurs' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/>  
    </div>
  );
}