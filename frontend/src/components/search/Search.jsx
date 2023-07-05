import "./Search.scss";
import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      {true && <span>User not found!</span>}
      {true && (
        <div className="userChat">
          <img
            src="https://res.cloudinary.com/dol4aj9y4/image/upload/v1688320044/userAvatar/dnerl8jlx79xrnepqiu9.jpg"
            alt=""
          />
          <div className="userChatInfo">
            <span>shyam</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
