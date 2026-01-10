import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CardRenderComponent from "./components/pages/CardRenderComponent";
import TableRenderComponent from "./components/pages/TableRenderComponent";
import FooterBlueprint from "./components/sharedComponents/FooterBlueprint";
import NavbarBlueprint from "./components/sharedComponents/NavBarBlueprint";
import CreateFormBlueprint from "./components/forms/CreateFormBlueprint";
import PopupTestPanel from "./components/popupTestPanel";
import "./styles/globals.scss";

export default () => (
  <div className="app-container">
    <BrowserRouter>
      <NavbarBlueprint />
      <Routes>
        <Route path="/item1" element={<CardRenderComponent />}></Route>
        <Route path="/item2" element={<TableRenderComponent />}></Route>
        <Route path="/createItem" element={<CreateFormBlueprint />}></Route>
        <Route path="/popups" element={<PopupTestPanel />}></Route>
      </Routes>
      <FooterBlueprint />
    </BrowserRouter>
  </div>
);
