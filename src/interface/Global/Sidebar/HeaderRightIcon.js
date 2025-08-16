import React from 'react'
// import styled from "styled-components";
import AvatarNav from "../Auth/AvatarNav"
import RightSideBarGestionnaire from "./RightSideBarGestionnaire"

// const Head = styled.div`
//   display: inline-flex;
//   flex-direction: row;
//   justify-content: flex-end;
//   transition: all .5s ease;
//   &:focus {
//       outline: none;
//   } 
// `
export default function HeaderRightIcon() {
  return (
    // <Head>
    <>
      <AvatarNav/>
      <RightSideBarGestionnaire/>
      </>
   
  )
}  
// </Head>