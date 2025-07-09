import React, { useState, useEffect } from "react";
import "../../App.css";
import { baseApi } from "../../util/API/API";

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
};

export default function WithdrawWeb() {
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const IDRConvert = Intl.NumberFormat("id-ID");

  useEffect(() => {
    fetch(baseApi + "account/4")
      .then((res) => res.json())
      .then((data) => setBalance(data.balance))
      .catch((err) => console.error(err));
  }, []);

  const handleWithdraw = () => {
    fetch(baseApi + "withdraw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 4,
        amount: parseInt(withdrawAmount),
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Withdraw failed");
        return res.json();
      })
      .then(() => alert("Withdraw berhasil"))
      .catch((err) => console.error(err));
  };

  return (
    <div style={style.MainContent}>
      <div style={style.Content}>
        <span style={style.text}>Withdraw</span>
        <br />
        <span style={style.balance}>{"Rp " + IDRConvert.format(balance)}</span>
        <br />
        <input
          type="number"
          style={style.input}
          placeholder="Rp 0"
          value={withdrawAmount}
          name="withdraw"
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
        <button style={style.button} type="submit" onClick={handleWithdraw}>
          WITHDRAW
        </button>
      </div>
    </div>
  );
}
