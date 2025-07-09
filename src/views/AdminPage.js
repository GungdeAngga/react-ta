import React from 'react'
import AdminContent from '../components/contents/AdminContent'
import FooterLoginRegister from '../components/Footer/FooterLoginRegister'
import HeaderWeb from '../components/HeaderWeb'

export default function AdminPage() {
  return (
    <div>
        <HeaderWeb/>
        <AdminContent/>
        <FooterLoginRegister/>
    </div>
  )
}
