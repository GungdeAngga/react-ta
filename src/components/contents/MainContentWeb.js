import React from 'react'
import { Link } from 'react-router-dom'
import "./MainContentWeb.css"
import { useQuery } from '@apollo/client';
import { GET_BALANCE } from '../../graphQL/apolloQuery';

const style = {
  MainContent: {
    height: "100%",
    display: "flex",
    backgroundColor: "#484848",
  },
  Content: {
    background: "#2C2D30",
    margin: "auto",
    padding: "30px",
    paddingTop: "180px",
    width: "540px",
    minHeight: "69vh",
  },
  text: {
    fontSize: "20px",
  },
  balance: {
    fontSize: "40px",
  },
  button: {
    width: "21.5%",
    marginTop: "20px",
    paddingLeft: "71px",
  }
}

export default function MainContent() {
  const { loading, error, data } = useQuery(GET_BALANCE);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    alert("Error");
    return null;
  }

  return (
    <div style={style.MainContent}>
      <div style={style.Content}>
        <span style={style.text}>Account Balance</span><br />


        <span style={style.balance}>{"Rp." + data.table_account_balance_by_pk.uang}</span>

        <div className='btn-group' style={{ width: "100%", }}>
          <Link to="/TopupPage" className='btn' >
            <img src='./assets/add-free-icon-font.png' alt="topup" style={style.button} />
            <span className='caption' style={{ paddingLeft: "69px", }}>topup</span>
          </Link>

          <Link to="/TransferPage" className='btn' >
            <img src='./assets/paper-plane-free-icon-font.png' alt="transfer" style={style.button} />
            <span className='caption' style={{ paddingLeft: "61px", }}>transfer</span>
          </Link>

          <Link to="/WithdrawPage" className='btn' >
            <img src='./assets/money-bill-wave-free-icon-font.png' alt="Withdraw" style={style.button} />
            <span className='caption' style={{ paddingLeft: "56px", }}>Withdraw</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
