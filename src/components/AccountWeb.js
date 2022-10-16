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
  },
  button: {
    backgroundColor: "darkred",
    padding: "20px",
    marginLeft: "41%",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
  },
  accID: {
    marginLeft: "360px",
  },
}

export default function AccountWeb() {
  return (
    <div style={style.AccountWeb}>
      <div style={style.Content}>
        <span style={style.text}>Shadov</span>
        <span style={style.accID}>Id: 001</span><br/><br /> 

        {/* diatas pake sesuai nama pengguna dan id pengguna untuk di add */}

        <Link to="/ChangeNamePage" style={style.menu}>
            <span style={style.menuText}>Ubah Nama</span>
        </Link><br/>

        <Link to="/ChangePasswordPage" style={style.menu}>
            <span style={style.menuText}>Ubah Password</span>
        </Link><br/><br/>

        <Link to="/LoginPage" style={style.button}>LogOut</Link>
      </div>
    </div>
  )
}
