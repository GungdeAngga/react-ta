import React, { useState, useEffect } from 'react'
import "../../App.css"
import { baseApi } from '../../util/API/API'

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

export default function TopupWeb() {
  const [topup, setTopup] = useState(0);
  const [money, setMoney] = useState(0);
  const IDRConvert = Intl.NumberFormat("id-ID");

  useEffect(() => {
    fetch(baseApi() + "account/4")
      .then((res) => res.json())
      .then((data) => setMoney(data.balance))
      .catch((err) => console.error(err));
  }, []);

  const handleTopup = () => {
    fetch(baseApi() + "topup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: 4,
        amount: parseInt(topup),
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Topup failed");
        return res.json();
      })
      .then(() => alert("Transaksi Berhasil"))
      .catch((err) => console.error(err));
  };

  return (
    <div style={style.MainContent}>
      <div style={style.Content}>
        <span style={style.text}>Topup</span><br />
        <span style={style.balance}>{"Rp " + IDRConvert.format(money)}</span><br />

        <input
          type="number"
          style={style.input}
          placeholder="Rp 0"
          value={topup}
          name="topup"
          onChange={(e) => setTopup(e.target.value)}
        />

        <button style={style.button} onClick={handleTopup}>TOPUP</button>
      </div>
    </div>
  );
}
