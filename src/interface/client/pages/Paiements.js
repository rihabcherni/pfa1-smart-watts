import React from 'react';
import Api from '../../Global/ComponentsTable/Api';
 const createUpdate=[
  ["ID","id"],
  ["numéro facture","facture_id"], 
  ["date paiement","date_paiement"], 
  ["Montant paiement","montant_paiement"], 
  ["Mode paiement","mode_paiement"], 
 ];
 const show=[
  ["ID","id"],
  ["numéro facture","facture_id"], 
  ["date paiement","date_paiement"], 
  ["Montant paiement","montant_paiement"], 
  ["Mode paiement","mode_paiement"],
 ];
export default function Paiement() {
  const initialValue = { facture_id: "", date_paiement: "", montant_paiement: "", mode_paiement: "",created_at:"", updated_at:"", error_list:[]};

  const url = `http://127.0.0.1:8000/api/paiement`
  const columnDefs = [
    { headerName: "ID", field: "id",  maxWidth:80,minWidth:50, pinned: 'left' },
    { headerName: "Numéro facture", field: "facture_id",  maxWidth:1000,minWidth:100, pinned: 'left' },
    { headerName: "date paiement", field: "date_paiement",  maxWidth:200,minWidth:100, pinned: 'left' },
    { headerName: "Montant paiement", field: "montant_paiement",  maxWidth:200,minWidth:100, pinned: 'left' },
    { headerName: "Mode paiement", field: "mode_paiement",  maxWidth:200,minWidth:100, pinned: 'left' },
  ]
  return (
    <div style={{width:"100%"}}>
        <Api nom='Paiement' tableNamePlu='Paiement' tableNameSing='Liste paiement' url={url} initialValue={initialValue} columnDefs={columnDefs} show={show} createUpdate={createUpdate}/>  
    </div>
  );
}