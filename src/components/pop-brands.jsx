import React from "react";

function Brands(props) {
  return <div className="pop-brands" onClick={() => props.setShow(false)}>
    <h2>Popular brands</h2>
    <div className="brands-container">
      <div className="apple brands">
        <a href="#" className="brand-link">Apple</a>
      </div>
      <div className="samsung brands">
        <a href="#" className="brand-link">Samsung</a>
      </div>
      <div className="oppo brands">
        <a href="#" className="brand-link">Oppo</a>
      </div>
    </div>
  </div>
}
export default Brands;