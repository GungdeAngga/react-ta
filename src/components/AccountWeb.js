import React from 'react'
import { Link } from 'react-router-dom'

const style = {
  AccountWeb: {
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
  menu:{
    padding: "20px",
    background: "#D9D9D9",
    display: "flex",
  },
  menuText:{
    color: "black",
    
  }
}

export default function AccountWeb() {
  return (
    <div style={style.AccountWeb}>
      <div style={style.Content}>
        <span style={style.text}>Shadov</span><br /> <br/>
        {/* diatas pake sesuai nama pengguna */}
        <Link to="/" style={style.menu}>
            <span style={style.menuText}>Ubah Nama</span>
        </Link>

      </div>
    </div>
  )
}
