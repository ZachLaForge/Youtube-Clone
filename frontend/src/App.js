// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import LinusPage from "./pages/LinusVideo/LinusVideo";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const [comments, setComments] = useState([]);
  // const [relatedVidoes, setRelatedVideos] = useState([])
  // const [selectedVidoe, setSelectedVideo] = useState("")

  // const updateSelectedVideo(someVideoId) {
  //   setSelectedVideo(someVideoId)
  //   getRelatedVideos(someVideoId)

  // }

  // // * YoutTube API Calls
  // async function getRelatedVideos(selectedVideo) {
  //   let response = await axios.get(`https//youtube/q=${selectedVideo}`) // injection to pass argument
  //   setRelatedVideos(response.data)
  // };

  useEffect(() => {
    getAllComments();
  }, []);

  async function getAllComments() {
    let response = await axios.get("http://127.0.0.1:8000/comment/");
    setComments(response.data);
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video" element={<VideoPage commentAll={comments} />} />
        {/* <Route page="/searchResults" element={<SearchResults searchData={searchData} updateSelectedVideo={updateSelectedVideo} />} /> */}
        <Route path="/linus" element={<LinusPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
