import React,{ useState } from 'react'
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
      padding: "30px",
      paddingTop: "50px",
      width: "540px",
      height: "680px",
    },
    text: {
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
    input: {
        width: "100%",
        padding: "20px",
        margin: "15px 0 30px",
        display: "inline-block",
        border: "1px solid #ccc:",
        borderRadius: "1px",
        boxSizing: "border-box",
        background: "#D9D9D9",
        fontSize: "20px",
      },
}

export default function ChangNameWeb() {
  const [nama, setNama] = useState("")
  return (
    <div style={style.MainContent}>
        <div style={style.Content}>
        
        <Link to="/AccountPage" >
        <span style={{}}>Back</span><br/>
        </Link>
        
        <span style={style.text}>Ganti nama</span>

        <input style={style.input} placeholder="Ganti nama" value={nama} name="nama" onChange={(e) => setNama(e.target.value)} />

        <button style={style.button} type='submit'>Ganti Nama</button>
        </div>
    </div>
  )
}
