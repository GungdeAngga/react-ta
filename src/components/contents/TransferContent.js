import React, { useState } from 'react'
import "../../App.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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

export default function TransferWeb() {
  const [transfer, setTransfer] = useState("")
  return (
    <div style={style.MainContent}>
      <div style={style.Content}>
        <span style={style.text}>Transfer</span><br />

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '97%', background: '#D9D9D9' },
          }}
          noValidate
          autoComplete="off"
        >
            <TextField id="filled-basic" label="Tujuan Transfer by ID" variant="filled" />
        </Box><br/>

        <span style={style.balance}>Cash: Rp 1.000.000</span><br />

        <input type="number" style={style.input} placeholder="Rp 0" value={transfer} name="transfer" onChange={(e) => setTransfer(e.target.value)} />

        <button style={style.button} type='submit'>TRANSFER</button>
      </div>
    </div>
  )
}