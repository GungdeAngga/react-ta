import React from 'react'
import { Link } from 'react-router-dom'
import "./FooterWeb.css"

const style = {
    footer: {
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%",
        marginTop: "auto",
        backgroundColor: "#484848",
    },
    footerContent: {
        margin: "auto",
        width: "600px",
    },
    Button: {
        width: "18%",
        marginTop: "20px",
        paddingLeft: "80px",
    }
}

export default function FooterWeb() {
    return (
        <div style={style.footer}>
            <div style={style.footerContent}>
                <div className='btn-group-footer' style={{ width: "100%", }}>

                    <Link to="/" className='btn' >
                        <img src='./assets/home-free-icon-font.png' alt="home" style={style.Button} />
                        <span className='caption' style={{ paddingLeft: "80px", }}>Home</span>
                    </Link>

                    <Link to="/" className='btn' >
                        <img src='./assets/time-past-free-icon-font.png' alt="History" style={style.Button} />
                        <span className='caption' style={{ paddingLeft: "75px", }}>History</span>
                    </Link>

                    <Link to="/" className='btn' >
                        <img src='./assets/portrait-free-icon-font.png' alt="Account" style={style.Button} />
                        <span className='caption' style={{ paddingLeft: "72px", }}>Account</span>
                    </Link>

                </div>
            </div>
        </div>
    )
}
