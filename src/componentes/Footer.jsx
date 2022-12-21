import React from "react";
import { CDBFooter, CDBBox, CDBIcon, CDBBtn } from 'cdbreact';
import {CiCoffeeCup} from 'react-icons/ci';

const Footer = () => {

  return (
    <CDBFooter className="dark">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '100%', backgroundColor: '#000'}}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-light">
            <CiCoffeeCup size={30} />
            <span className="ml-4 h5 mb-0 font-weight-bold">DevCoffee</span>
          </a>
        </CDBBox>
        <CDBBox>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
  )
}

export default Footer;