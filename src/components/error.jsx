import React, { useState, useEffect } from "react";
import axios from "axios";
import DeskHeader from "./deskheader";
import DeskFooter from "./deskfooter";
import iphone from "../images/iphone13.png";
import { Path } from "react-router";
import Header from "./Header";
import FooterPhone from "./footer";
import Menu from "./menu";
import Brands from "./pop-brands";
import PhoneCards from "./PhoneCards";

function PhonePage() {
  const [phones, setPhones] = useState([]);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className="main">
        <div className="desktop-view">
          <DeskHeader open={open} setOpen={setOpen} />
          <div class="error-1">
          <h1>An error as occured. Page not found </h1>
          <h1>
            {" "}
            <span class="ascii">(╯°□°）╯︵ ┻━┻</span>
          </h1>
          <a className="error-2" href="/">Go back</a>
        </div>
          <DeskFooter setOpen={setOpen} />
        </div>
         
        <div className="phone-view">
          <Menu className={show ? 'main-open' : 'menu-back'} setShow={setShow} />
          <Header setShow={setShow} />
          <Brands setShow={setShow} />
          <div class="error-1">
          <h1>An error as occured.</h1>
          <h1>
            {" "}
            <span class="ascii">(╯°□°）╯︵ ┻━┻</span>
          </h1>
          <a className="error-2" href="/">Go back</a>
        </div>
        </div>
        <FooterPhone setShow={setShow} />
      </div>
    </>
  );
}

export default PhonePage;

function close() {
  let change = document.querySelector(".main-menu");
  change.classList.toggle("main-close");
}
