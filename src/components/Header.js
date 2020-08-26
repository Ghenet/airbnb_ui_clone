import React from "react";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <img
        className="header__icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQp-nYTWgFoqRnmFEofLfLFyyqJo52LzMv0Bg&usqp=CAU"
      />
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
    </div>
  );
}

export default Header;
