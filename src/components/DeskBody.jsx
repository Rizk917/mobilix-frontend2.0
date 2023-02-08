import React from "react";

function DeskBody(props) {
    return <div className="main-home" onClick={() => props.setOpen(true)}>
        <h1>Our latest <br></br>updates</h1>
        <div className="updates">
            <div className="item-1">
                <a href="#"><div className="itm-1-after"><h3>Description:</h3><br></br><p>Hello this is the description cbjscjbjxzbj bjbjxb jbxzjb bjb jbj bjzbj bjzb jzbj bjb jzjb zj bzjb Hello this is the description cbjscjbjxzbj bjbjxb jbxzjb bjb jbj bjzbj bjzb jzbj bjb jzjb zj bzjb jHello this is the description cbjscjbjxzbj bjbjxb jbxzjb bjb jbj bjzbj bjzb jzbj bjb jzjb zj bzjb jj</p></div></a>
            </div>
            <div className="item-2">
                <a href="#"><div className="itm-1-after"><h3>Description:</h3><br></br><p>Hello this is the description cbjscjbjxzbj bjbjxb jbxzjb bjb jbj bjzbj bjzb jzbj bjb jzjb zj bzjb Hello this is the description cbjscjbjxzbj bjbjxb jbxzjb bjb jbj bjzbj bjzb jzbj bjb jzjb zj bzjb jHello this is the description cbjscjbjxzbj bjbjxb jbxzjb bjb jbj bjzbj bjzb jzbj bjb jzjb zj bzjb jj</p></div></a>
            </div>
        </div>
    </div>
}

export default DeskBody;