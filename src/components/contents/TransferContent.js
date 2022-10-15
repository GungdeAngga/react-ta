import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { GET_BALANCE } from '../../graphQL/apolloQuery';

const style = {
  MainContent: {
    height: "100%",
    display: "flex",
    backgroundColor: "#484848",
  },
  Content: {
    background: "#2C2D30",
    margin: "auto",
    padding: "30px",
    paddingTop: "180px",
    width: "540px",
    minHeight: "69vh",
  },
  text: {
    fontSize: "20px",
  },
  balance: {
    fontSize: "30px",
  },
  input: {
    width: "100%",
    padding: "30px 20px",
    margin: "15px 0 30px",
    display: "inline-block",
    border: "1px solid #ccc:",
    borderRadius: "1px",
    boxSizing: "border-box",
    background: "#D9D9D9",
    fontSize: "40px",
  },
  button: {
    backgroundColor: "#4E45CE",
    width: "185px",
    height: "55px",
    marginLeft: "33%",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
}

export default function TransferWeb() {
  const [transfer, setTransfer] = useState("")
  const { loading, error, data } = useQuery(GET_BALANCE);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    alert("Error");
    return null;
  }
  return (
    <div style={style.MainContent}>
      <div style={style.Content}>
        <span style={style.text}>Transfer</span><br />
        <span style={style.balance}>{"Cash: Rp." + data.table_account_balance_by_pk.uang}</span><br />

        <input style={style.input} placeholder="Rp 0" value={transfer} name="transfer" onChange={(e) => setTransfer(e.target.value)} />

        <button style={style.button} type='submit'>TRANSFER</button>
      </div>
    </div>
  )
}