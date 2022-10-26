import React from 'react'

    const style = {
        header:{
            background: "#4E44CE",
            width: "100%",
            height: "120px",
            position: "absolute",
        },
        headerConten:{
            display: "flex",
            paddingTop: "35px",
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
            <span style={style.headerText}><strong>Corsair</strong></span>

        </div>
    </div>
  )
}
