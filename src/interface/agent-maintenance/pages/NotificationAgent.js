import React from 'react';
import Api from '../../Global/ComponentTableShow/Api';
 const show=[
  ["ID","id"],
  ["Utilisateur","user"],
  ["Type","type_notification"],
  ["Description","description_notification"],
  ["Date","date_notification"],
  ["Etat lecture","etat_lecture"],
  ["Crée le","created_at"],
  ["Modifié le","updated_at"],
 ];
export default function NotificationAgent() {
  const initialValue = {user:"", type_notification:"", description_notification	:"",date_notification	:"",etat_lecture:"",created_at:"", updated_at:"", error_list:[]};
  const url = `http://127.0.0.1:8000/api/notification`
  const columnDefs = [
    { headerName: "Id", field: "id",  maxWidth:100,minWidth:70, pinned: 'left' },
    { headerName: "Utilisateur", field: "user", minWidth: 100 , maxWidth: 400 },
    { headerName: "Type", field: "type_notification", minWidth: 80 , maxWidth: 200 },
    { headerName: "Description", field: "description_notification", minWidth: 250 , maxWidth: 1000 },
    { headerName: "Date", field: "date_notification", minWidth: 150 , maxWidth: 400 },
    { headerName: "État lecture", field: "etat_lecture", minWidth: 100 , maxWidth: 200 },
  ]
  return (
    <div style={{width:"100%"}}>
        <Api nom='Notification' tableNamePlu='Notification' tableNameSing='Liste notifications' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={1}/>  
    </div>
  );
}
