import React from "react";
import "./Searchbar.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Searchbar({ searchResult, clickLogo }) {
  const inputRef = useRef();
  let navigate = useNavigate();
  // 서치버튼 클릭시 호출될 함수
  // enter 클릭시 호출공통 함수
  const searchFnc = () => {
    const value = inputRef.current.value; //input의 value 값을 가져온다.
    searchResult(value);
    navigate(`/search?search_query=${value}`);
  };
  const inputclick = () => {
    searchFnc();
  };
  // 인풋박스에 enter 시 호출될 함수
  const inputEnter = (e) => {
    if (e.key === "Enter") {
      searchFnc();
    }
  };

  return (
    <div className="searchArea">
      <div className="logoarea">
        <button className="btn-leftmenu">
          <i className="fa-solid fa-bars"></i>
        </button>
        <h1>
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="youtube"
              className="logoimg"
              onClick={clickLogo}
            />
          </Link>
        </h1>
      </div>
      {/* 왼쪽 */}

      <div className="searchInputarea">
        <input
          type="search"
          placeholder="검색"
          className="searchinput"
          onKeyPress={inputEnter}
          ref={inputRef}
        />
        <button className="searchBtn" onClick={inputclick}>
          <img src="/images/searchicon.png" alt="search" />
        </button>
        <button className="micbtn">
          <i class="fa-solid fa-microphone"></i>
        </button>
      </div>
      {/* 가운데 */}

      <div className="topMenuarea">
        <button className="btn-rightmenu">
          <i className="fa-solid fa-table-cells"></i>
        </button>
        <button className="btn-rightmenu">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
        <button className="btn-rightmenu">
          <i className="fa-solid fa-user"></i>
        </button>
      </div>
      {/* 오른쪽 */}
    </div>
  );
}
