import React from 'react'
import { Link } from 'react-router-dom'

    const style = {
        header:{
            background: "#4E44CE",
            width: "100%",
            height: "140px",
            position: "absolute",
            left: "0px",
            top: "0px",
        },
        headerConten:{
            width: "100%",
            display: "flex",
            paddingTop: "50px",
            paddingLeft: "33.5%",
        },
        headerText:{
            fontSize: "32px",
        },
        button:{
            backgroundColor: "transparent",
            border: "none",
            width: "40px",
            height: "40px",
            marginRight: "200px",
            marginLeft: "24.4%",
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
