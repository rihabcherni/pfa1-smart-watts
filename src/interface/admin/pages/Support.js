import React from 'react';
import Api from '../../Global/ComponentTableShow/Api';
 const show=[
  ["ID","id"],
  ["Nom","nom"],
  ["Prénom","prenom"],
  ["E-mail","email"],
  ["Numéro téléphone","numero_telephone"],
  ["Message","message"],
  ["Crée le","created_at"],
  ["Modifié le","updated_at"],
 ];
export default function Support() {
  const initialValue = {user:"", type_notification:"", description_notification	:"",date_notification	:"",etat_lecture:"",created_at:"", updated_at:"", error_list:[]};
  const url = `http://127.0.0.1:8000/api/contact`
  const columnDefs = [
    { headerName: "Id", field: "id",  maxWidth:100,minWidth:70, pinned: 'left' },
    { headerName: "Nom", field: "nom", minWidth: 80 , maxWidth: 200 },
    { headerName: "Prénom", field: "prenom", minWidth: 80 , maxWidth: 200 },
    { headerName: "E-mail", field: "email", minWidth: 100 , maxWidth: 300 },
    { headerName: "Numéro téléphone", field: "numero_telephone", minWidth: 80 , maxWidth: 200 },
    { headerName: "Message", field: "message", minWidth: 200 , maxWidth: 1000 },
  ]
  return (
    <div style={{width:"100%"}}>
        <Api nom='Messages contacts' tableNamePlu='Messages contacts' tableNameSing='Liste Messages contacts' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={1}/>  
    </div>
  );
}
