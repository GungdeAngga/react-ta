import React, { useState } from 'react'
import "../../App.css"
import { baseApi } from '../../util/API/API'
import axios from 'axios'
import { useEffect } from 'react';

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

export default function WithdrawWeb() {

  const [withdraw, setWithdraw] = useState(0);
  const IDRConvert = Intl.NumberFormat("id-ID");
  
          useEffect(() => {
            axios
            .get(baseApi + "account/4")
            .then((res) => {
              setWithdraw(res.data);
            })
            .catch((err) => {
              console.log(err);
            })
          });

  return (
    <div style={style.MainContent}>
      <div style={style.Content}>
        <span style={style.text}>Withdraw</span><br />
        <span style={style.balance}>{"Rp " + IDRConvert.format(withdraw.balance)}</span><br />

        <input type="number" style={style.input} placeholder="Rp 0" value={withdraw} name="withdraw" onChange={(e) => setWithdraw(e.target.value)} />

        <button style={style.button} type='submit'>WITHDRAW</button>
      </div>
    </div>
  )
}