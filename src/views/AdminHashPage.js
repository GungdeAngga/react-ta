import React from 'react'
import HashAdminTable from '../components/contents/HashAdminTable'
import FooterLoginRegister from '../components/Footer/FooterLoginRegister'
import HeaderWeb from '../components/HeaderWeb'

export default function AdminHashPage() {
  return (
    <div>
        <HeaderWeb/>
        <HashAdminTable/>
        <FooterLoginRegister/>
    </div>
  )
}
