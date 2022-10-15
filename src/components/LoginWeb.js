import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
    marginTop: "150px",
    padding: "30px 30px 30px 30px",
    width: "540px",
  },
  text: {
    fontSize: "20px",
  },
  balance: {
    fontSize: "30px",
  },
  input: {
    width: "100%",
    padding: "10px 20px",
    margin: "15px 0 15px",
    display: "inline-block",
    border: "1px solid #ccc:",
    borderRadius: "1px",
    boxSizing: "border-box",
    background: "#D9D9D9",
    fontSize: "20px",
  },
  button: {
    backgroundColor: "#4E45CE",
    padding: "20px 40px 20px 40px",
    marginLeft: "38.5%",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
  goToRegis: {
    marginLeft: "37%",
  }
}

export default function LoginWeb() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div style={style.MainContent}>
      <div style={style.Content}>

        <input style={style.input} placeholder="username" value={username} name="username" onChange={(e) => setUsername(e.target.value)} />
        <input style={style.input} placeholder="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} />
        <span style={style.goToRegis}>Don't have account?</span><br />
        <Link to="/RegisterPage" style={{ marginLeft: "41%", color: "#4E44CE", }}>
          Register Here
        </Link><br /><br /><br/>

        <Link to="/" style={style.button} type='submit'>LOGIN</Link>
      </div>
    </div>
  )
}