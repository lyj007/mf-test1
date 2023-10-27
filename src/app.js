import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from 'react-router-dom';
import DownLoad from "./download";
import Button from "./button";

const container = document.querySelector('#app');
const root = createRoot(container)
root.render(
  // <div>swdwe</div>
  <HashRouter>
    <Routes>
      <Route path="/" element={<Button />} />
      <Route path="/download" element={<DownLoad />} />
    </Routes>
  </HashRouter>
);