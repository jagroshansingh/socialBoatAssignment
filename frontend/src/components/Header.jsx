import React from "react";
import axios from "axios";
import "./css/Header.css";

export const Header = ({ setData }) => {
  const handleSearch = (el) => {
      axios({
        method: "get",
        url: "https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos",
        params: { q: el.target.value, numResults: 5 },
      })
        .then((res) => {
            setData(res.data.results)
        })
        .catch((err) => {
            console.log(err)
            setData([])
        });
  };
  return (
    <>
      <div id="headerContainer">
        <div>
          <img
            src="https://ik.imagekit.io/socialboat/Component_6__1__CgPWY-2O0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1663242315232"
            alt=""
          />
        </div>
        <div>
          <input type="search" name="" id="" onChange={handleSearch} />
        </div>
        <div>Profile</div>
      </div>
    </>
  );
};
