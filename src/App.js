import logo from "./logo.svg";
import styled from "styled-components";
import "./App.css";
import Main from "./page/Main";
import Write from "./page/Write";
import Menu from "./Component/Menu/Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Header = styled.header`
  width: 100%;
  min-height: 200px;
`;

const Footer = styled.footer`
  width: 100%;
  p {
    text-align: center;
  }
`;
const Content = styled.main`
  width: 100%;
  min-height: 10rem;
`;

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header>
          <Menu />
        </Header>
        <Content>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/write" element={<Write />} />
          </Routes>
        </Content>
        <Footer>
          <p>Copyright(c) 2022 All rights reserved.</p>
        </Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
