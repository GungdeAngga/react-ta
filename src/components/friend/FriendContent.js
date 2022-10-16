import React from 'react'
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
    menu:{
        padding: "20px",
        background: "#D9D9D9",
        display: "flex",
    },
    menuText:{
        color: "black",
    },
    text: {
        fontSize: "40px",
    },
}
export default function FriendContent() {
  return (
    <div style={style.MainContent}>
        <div style={style.Content}>
        <span style={style.text}>Tujuan Transfer</span><br/><br/>
        <Link to="/" style={style.menu}>
            <span style={style.menuText}>Cari Teman</span>
        </Link><br/>
        <Link to="/" style={style.menu}>
            <span style={style.menuText}>Teman Saya</span>
        </Link><br/>
        </div>
    </div>
  )
}
