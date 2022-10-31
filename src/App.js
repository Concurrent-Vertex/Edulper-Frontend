import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SpeechToText from "./pages/SpeechToText";
import TextToSpeech from "./pages/TextToSpeech";
import Summarizer from "./pages/Summarizer";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Header from "./pages/Header";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/SpeechToText" element={<SpeechToText />} />
          <Route exact path="/TextToSpeech" element={<TextToSpeech />} />
          <Route exact path="/Summarizer" element={<Summarizer />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
