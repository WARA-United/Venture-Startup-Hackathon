import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Page1 from "./pages/Page1/Page1";
import Page2 from "./pages/Page2/Page2";
import Page3 from "./pages/Page3/Page3";
import Page4 from "./pages/Page4/Page4";
import Page5 from "./pages/Page5/Page5";
import Page6 from "./pages/Page6/Page6";
import SubPage from "./pages/SubPage/SubPage";

const Layout = () => (
  <div className="page">
    <Header />
    <div className="wrap">
      <Outlet />
    </div>
    <Footer />
  </div>
);

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />

          <Route path="/subpage/:title" element={<SubPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
