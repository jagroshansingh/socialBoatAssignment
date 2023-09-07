import React from "react";
import "./css/AuthPage.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const AuthPage = () => {
  var detail = {
    phone: "",
    password: "",
  };
  const [data, setData] = React.useState(detail);

  const handleChange = (el) => {
    if (el.target.name == "phone") setData({ ...data, phone: el.target.value });
    else setData({ ...data, password: el.target.value });
  };

  const handleFormSubmit=(el)=>{
    el.preventDefault()
    if(data.phone=="" || data.password=="") alert('Empty Fields!')
    axios({
        method:'post',
        url:`${process.env.REACT_APP_URL}/auth/login`,
        data
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }

  return (
    <div>
      <h2>Login</h2>
      <form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="">
          Phone Number:{" "}
          <input name="phone" type="number" onChange={handleChange}></input>
        </label>
        <label htmlFor="">
          Password:{" "}
          <input name="password" type="text" onChange={handleChange}></input>
        </label>
        <button>Submit</button>
      </form>
      <br />
      <Link to={'/'}>Go Home</Link>
    </div>
  );
};
