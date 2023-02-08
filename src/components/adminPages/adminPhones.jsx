import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdminNav from "./adminNav";


const AdminPhonedata = () => {
  const [formData, setFormData] = useState({
    phoneModel: "",
    display: "",
    image: "",
    body: "",
    camera: "",
    vendor: "",
    prodDate: "",
  });
  const { phoneModel, display, body, image, camera, vendor, prodDate } =
    formData;
  // console.log(formData.vendor);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };

  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   const newPhone = {
  //     phoneModel: phoneModel,
  //     display: display,
  //     body: body,
  //     image: image,
  //     camera: camera,
  //     vendor: vendor,
  //     prodDate: prodDate,
  //   };

  //   try {
  //     await axios.post("http://localhost:5000/phones", newPhone);
  //     setFormData({
  //       phoneModel: "",
  //       display: "",
  //       image: "",
  //       body: "",
  //       camera: "",
  //       vendor: "",
  //       prodDate: "",
  //     });
  //   } catch (err) {
  //     console.log("error", err.response.data);
  //   }
  // };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("phoneModel", phoneModel);
    formData.append("display", display);
    formData.append("body", body);
    formData.append("image", image);
    formData.append("camera", camera);
    formData.append("vendor", vendor);
    formData.append("prodDate", prodDate);
    console.log({ formData })

    try {
      await axios.post("http://localhost:5000/phones", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setFormData({
        phoneModel: "",
        display: "",
        image: "",
        body: "",
        camera: "",
        vendor: "",
        prodDate: "",
      });
    } catch (err) {
      console.log("error", err.response.data);
    }
  };

  const [phoness, setphoness] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadphoness();
  }, []);

  const loadphoness = async () => {
    const result = await axios.get("http://localhost:5000/phones");
    const sortedphones = result.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setphoness(sortedphones);
  };

  const deletephones = async (id) => {
    await axios.delete(`http://localhost:5000/phones/${id}`);
    loadphoness();
  };

  return (
    <>
      <AdminNav />
      <div className="content-table">
        <h1>Phones</h1>
        <table>
          <thead>
            <tr>
              <th scope="col">index</th>
              <th scope="col">phoneModel</th>
              <th scope="col">display</th>
              <th scope="col">camera</th>
              <th scope="col">body</th>
              <th scope="col">prodDate</th>
            </tr>
          </thead>
          <tbody>
            {phoness.map((phones, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{phones.phoneModel}</td>
                <td>{phones.display}</td>
                <td>{phones.camera}</td>
                <td>{phones.body}</td>
                <td>{phones.prodDate}</td>
                {/* <td>{phones.vendor}</td> */}

                <td>
                  <button
                    className="tbl-btn"
                    onClick={() => deletephones(phones._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="form-admin">
        <form className="contact-formm" encType="multipart/form-data">
          <input
            type="text"
            name="phoneModel"
            value={phoneModel}
            placeholder="Enter phoneModel"
            onChange={onChange}
            required
          />
          <input
            type="text"
            name="display"
            value={display}
            placeholder="Enter  display data"
            onChange={onChange}
            required
          />
          <br />
          <input
            type="text"
            name="prodDate"
            value={prodDate}
            placeholder="Enter production Date"
            onChange={onChange}
            required
          />
          <input
            type="text"
            name="body"
            value={body}
            placeholder="enter body data"
            onChange={onChange}
            required
          />
          <br />
          <input
            type="text"
            name="camera"
            value={camera}
            placeholder="Enter camera data "
            onChange={onChange}
            required
          />
          <br />{" "}
          <input
            type="text"
            name="vendor"
            value={vendor}
            placeholder="Enter The Vendor/Manifacturer"
            onChange={onChange}
            required
          />
          <br />
          <input
            type="file"
            name="image"
            // multiple
            // accept="image/*"

            onChange={onChange}
          />
          <br />
          <button className="button2" type="submit" onClick={onSubmit}>
            Post
          </button>
        </form>
      </div>
    </>
  );
};

export default AdminPhonedata;
