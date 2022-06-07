import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";
import Main from "./page/Main";
import Write from "./page/Write";
import Menu from "./Component/Menu/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./page/Page";

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/write" element={<Write />} />
            <Route path="/page/*" element={<Page />} />
          </Routes>

    </BrowserRouter>
  );
}

export default App;
