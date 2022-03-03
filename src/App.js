import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div class = "d-flex flex-column container app">
      <Header/>
      <Footer/>
    </div>
  );
}