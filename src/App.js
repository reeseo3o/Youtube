import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Searchbar from "./components/searchbar/Searchbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Watching from "./pages/Watching";

let defaultVideos = JSON.parse(sessionStorage.getItem("defaultVideos")) || null;
let selectedWatch = JSON.parse(sessionStorage.getItem("selectedWatch")) || null;

function App({ youtube }) {
  const clickLogo = () => {
    setVideoItems(defaultVideos);
  };
  const [videoItems, setVideoItems] = useState([]);
  const [selectView, setSelectView] = useState(null);
  const selectVideo = (video) => {
    setSelectView(video);
    selectedWatch = video; //비디오가 받아 지면 setSelectView함수로 state를 update한다
  };
  const search = (searchValueTxt) => {
    setSelectView(null);

    youtube
      .searchResult(searchValueTxt)
      .then((videos) => setVideoItems(videos));
  };
  //서치함수 끝

  useEffect(() => {
    youtube.mostPopular().then((videos) => {
      setVideoItems(videos);
      defaultVideos = videos;
    });
  }, [youtube]);

  useEffect(() => {
    sessionStorage.setItem("defaultVideos", JSON.stringify(defaultVideos));
    sessionStorage.setItem("selectedWatch", JSON.stringify(selectedWatch));
  }, [videoItems, selectView]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Searchbar searchResult={search} clickLogo={clickLogo} />
        <Routes>
          <Route
            path='/'
            element={
              <Home
                videoItems={videoItems}
                onVideoClick={selectVideo}
                selectView={selectView}
              />
            }
          />
          <Route
            path='/search'
            element={
              <Search
                videoItems={videoItems}
                onVideoClick={selectVideo}
                selectView={selectView}
              />
            }
          />
          <Route
            path='/watch'
            element={
              <Watching
                videoItems={videoItems}
                onVideoClick={selectVideo}
                selectView={selectView}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
