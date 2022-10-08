import React from 'react'
import { Link } from 'react-router-dom'

    const style = {
        header:{
            background: "#4E44CE",
            width: "100%",
            height: "140px",
            position: "absolute",
        },
        headerConten:{
            display: "flex",
            paddingTop: "50px",
            width: "600px",
            margin: "auto",
        },
        headerText:{
            fontSize: "32px",
        },
        button:{
            backgroundColor: "transparent",
            border: "none",
            width: "40px",
            height: "40px",
            marginLeft: "76%",
        }
    }

export default function HeaderWeb() {

  return (
    <div style={style.header}>
        <div style={style.headerConten}>
            <span style={style.headerText}>Corsair</span>

        <Link to="/" style={style.button} >
            <img src='./assets/interrogation-free-icon-font.png' alt="support" style={{width: "100%",}}/>
        </Link>
        {/* link to support (to="/support") */}
        </div>
    </div>
  )
}
