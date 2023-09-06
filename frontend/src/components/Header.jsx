import React from "react";
import axios from "axios";
import "./css/Header.css";

export const Header = ({ setData }) => {

  const handleSearch = (el) => {
    if (el.target.value == "") {
    } else {
      axios({
        method: "get",
        url: "https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos",
        params: { q: el.target.value, numResults: 5 },
      })
        .then((res) => setData(res.data.results))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div id="headerContainer">
        <div>Logo</div>
        <div>
          <input type="search" name="" id="" onChange={handleSearch} />
        </div>
        <div>Profile</div>
      </div>
    </>
  );
};
