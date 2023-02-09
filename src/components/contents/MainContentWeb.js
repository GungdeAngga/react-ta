import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./MainContentWeb.css"
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
    fontSize: "40px",
  },
  button: {
    width: "21.5%",
    marginTop: "20px",
    paddingLeft: "71px",
  }
}

export default function MainContent() {

  const [home, setHome] = useState(0)
  
          useEffect(() => {
            axios
            .get(baseApi + "account/4")
            .then((res) => {
              setHome(res.data);
            })
            .catch((err) => {
              console.log(err);
            })
          });

  return (
    <div style={style.MainContent}>
      <div style={style.Content}>
        <span style={style.text}>Account Balance</span><br />
        <span style={style.balance}>{home.balance}</span>

        <div className='btn-group' style={{ width: "100%", }}>
          <Link to="/TopupPage" className='btn' >
            <img src='./assets/add-free-icon-font.png' alt="topup" style={style.button} />
            <span className='caption' style={{ paddingLeft: "69px", }}>topup</span>
          </Link>

          <Link to="/TransferPage" className='btn' >
            <img src='./assets/paper-plane-free-icon-font.png' alt="transfer" style={style.button} />
            <span className='caption' style={{ paddingLeft: "61px", }}>transfer</span>
          </Link>

          <Link to="/WithdrawPage" className='btn' >
            <img src='./assets/money-bill-wave-free-icon-font.png' alt="Withdraw" style={style.button} />
            <span className='caption' style={{ paddingLeft: "56px", }}>Withdraw</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
