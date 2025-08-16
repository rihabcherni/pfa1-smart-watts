import React from 'react'
import { Outlet} from 'react-router-dom';
import HeaderInter from './components/HeaderInter';
import FooterInter from './components/FooterInter';
import MainInter from './components/MainInter';




import '../../Styles/internaute/Main.css'
function InterfaceInternaute() {
  return (
    <>
      <HeaderInter/>
      <MainInter/>
      <FooterInter/>
    </>
  )
}
export default InterfaceInternaute
