import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import AdminNav from "./adminNav";


const Adminarticle = () => {
  const [articles, setArticles] = useState([]);

const { id } = useParams();
useEffect(() => {
  LoadArticles();
}, []);

const LoadArticles = async () => {
  const result = await axios.get("http://localhost:5000/news");
  const latest1 = result.data.sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  setArticles(latest1);
};
const deletearticles = async (id) => {
  await axios.delete(`http://localhost:5000/contactus/${id}`);
  LoadArticles();
};

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    article: "",
    date: "",
    author: "",
    image: "",
  });
  const { title, description, date, article, author, image } = formData;
  // console.log(formData.image);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const newArticle = {
      title: title,
      description: description,
      date: date,
      article: article,
      author: author,
      image: image,
    };


    const LoadArticles = async () => {
      const result = await axios.get("http://localhost:5000/news");
      setArticles(result.data);
    };
    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:5000/contactus/${id}`);
      LoadArticles();
    };



    try {
      await axios.post("http://localhost:5000/cont/news", newArticle);
      setFormData({
        title: "",
        description: "",
        article: "",
        date: "",
        author: "",
        image: "",
      });
    } catch (err) {
      console.log("error", err.response.data);
    }
  };

  return (
    <div className="container">
      <AdminNav />
      <div className="content-table">
        <h1>Articles</h1>
        <table>
          <thead>
            <tr>
              <th scope="col">index</th>
              <th scope="col">Article Title</th>
              <th scope="col">Author</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((articless, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{articless.title}</td>
                <td>{articless.author}</td>
                <td>{articless.date}</td>

                <td>
                  <button
                    className="tbl-btn"
                    onClick={() => deletearticles(article._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <form className=" contact-formm ">

        <input
          type="text"
          name="title"
          value={title}
          placeholder="Enter article title"
          onChange={onChange}
          required
        />
        <input
          type="text"
          name="description"
          value={description}
          placeholder="Enter article Description"
          onChange={onChange}
          required
        />
        <br />
        <input
          type="text"
          name="article"
          value={article}
          placeholder="Body"
          onChange={onChange}
          required
        />
        <input
          type="text"
          name="date"
          value={date}
          placeholder="Date"
          onChange={onChange}
          required
        />
        <br />
        <input
          type="text"
          name="author"
          value={author}
          placeholder="Enter your author "
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
        <button type="submit" onClick={onSubmit}>
          Post
        </button>
      </form>
    </div>

  );
};

export default Adminarticle;
