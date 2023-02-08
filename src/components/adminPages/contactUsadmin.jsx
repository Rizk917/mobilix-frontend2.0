import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./adminarticles.css";
import AdminNav from "./adminNav";

function AdminContactUs() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/contactus");
    const latest1 = result.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setUsers(latest1);
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/contactus/${id}`);
    loadUsers();
  };
  return (
    <div className="container">
      <AdminNav />
      <main className="main-cntct">
        <h1>Contacts Info</h1>
        <table class="content-table">
          <thead>
            <tr>
              <th>index</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Message</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>
                  <span>Index </span> {index}
                </td>
                <td>
                  <span>Name: </span>
                  {user.fullName}
                </td>
                <td>
                  <span>Email: </span>
                  {user.mail}
                </td>
                <td className="divv">
                  <span>Message: </span>
                  {user.Message}
                </td>

                <td>
                  <button
                    className="tbl-btn"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* <tr key={index}>
               <th scope="row" >
                  {index + 1}
                </th>
              <td><span>Index </span>  {index}</td>
              <td><span>Name: </span>{user.fullName}</td>
              <td><span>Email: </span>{user.mail}</td>
              <td className="divv"><span>Message: </span>{user.Message}</td>
              <td><button   className="tbl-btn"    onClick={() => deleteUser(user._id)>Delete</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Raoul</td>
              <td>Raoulbaddawi1@gmail.com</td>
              <td>helohelo</td>
              <td><button className="tbl-btn">Delete</button></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Raoul</td>
              <td>Raoulbaddawi1@gmail.com</td>
              <td>helohelo</td>
              <td><button className="tbl-btn">Delete</button></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Raoul</td>
              <td>Raoulbaddawi1@gmail.com</td>
              <td>helohelo</td>
              <td><button className="tbl-btn">Delete</button></td>
            </tr>
            <tr class="active-row">
              <td><span>Index </span>1</td>
              <td><span>Name: </span>Mhammad RiZk</td>
              <td><span>Email: </span>mhmd@gmail.org</td>
              <td><span>Message: </span>wa7sh l back</td>
              <td><button className="tbl-btn">Keep</button></td>
            </tr> */}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default AdminContactUs;

{
  /* <h1>Contact US</h1>
        <table className="admin-table">
          <thead className="tbl-head">
            <tr>
              <th scope="col" >index</th>
              <th scope="col" >Full Name</th>
              <th scope="col">email</th>
              <th scope="col">message</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {users.map((user, index) => (
              <tr key={index}>

                <th scope="row" className="tr-body">
                  {index + 1}
                </th>
                <td>{user.fullName}</td>
                <td>{user.mail}</td>
                <td>{user.Message}</td>

                <td>

                  <button
                    className="button2"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table> */
}

// const [users, setUsers] = useState([]);

// const { id } = useParams();

// useEffect(() => {
//   loadUsers();
// }, []);

// const loadUsers = async () => {
//   const result = await axios.get("http://localhost:5000/contactus");
//   console.log(result.data);
//   setUsers(result.data);
// }

// const deleteUser = async (id) => {
//   await axios.delete(`http://localhost:5000/contactus/${id}`);
//   loadUsers();
// };
