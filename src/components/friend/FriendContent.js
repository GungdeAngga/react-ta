import React from 'react'
import { Link } from 'react-router-dom'
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
    menu:{
      padding: "30px",
      background: "#D9D9D9",
      display: "flex",
      fontSize: "20px",
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

        <Link to="/TransferPage" style={style.menu}>
            <span style={style.menuText}>Angga</span>
        </Link>
        </div>
    </div>
  )
}
