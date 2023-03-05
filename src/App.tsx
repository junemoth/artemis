import React, { useState, ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
//import './App.css';
import { Home } from "./pages/home";
import { Cam } from "./pages/cam/cam";
import { Trends } from "./pages/trends";
import { Nav } from "./components/nav/nav";

const Person = ({ name, colour }: { name: string; colour?: string }) => {
  return (
    <div>
      <p style={{ color: colour }}>Hello, my name is {name}</p>
    </div>
  );
};

const Card = ({ title, children }: { title?: string; children: ReactNode }) => {
  return (
    <div>
      {title && <div>{title}</div>}

      <div>{children}</div>
    </div>
  );
};

function App() {
  return (
    <div className="App pb-16">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cam" element={<Cam />} />
        <Route path="trends" element={<Trends />} />
      </Routes>

      <Nav></Nav>
    </div>
  );
}

export default App;
