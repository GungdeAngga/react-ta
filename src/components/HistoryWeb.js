import React from 'react'

import TableHistory from './table/TableHistory';
// import { useEffect } from 'react';

const style = {
    MainContent: {
      height: "100%",
      display: "flex",
      backgroundColor: "#484848",
      minHeight: "100vh",
    },
    Content: {
      background: "#2C2D30",
      margin: "auto",
      padding: "30px",
      paddingTop: "50px",
      width: "540px",
      height: "680px",
    },
    list:{
        fontSize: "30px",
        margin: "42.5%",
      },
}


export default function HistoryWeb() {

   
  return (
    <div style={style.MainContent}>
        <div style={style.Content}>

        <span style={style.list}>History</span>

          <TableHistory />

        </div>
    </div>
  )
}
