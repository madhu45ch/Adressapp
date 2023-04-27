import React from "react";
import "./App.css";
import AdressList from "./AdressList"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import AdressCreate from "./AdressCreate";
import AdressDetails from "./AdressDetails";
import AdressEdit from "./AdressEdit";
import Search from "./Search"
function App() {
  return (
    <div className="App">
      <h1> Adress List</h1>
      <Search/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdressList />}></Route>
          <Route path="/Adress/create" element={<AdressCreate />}></Route>
          <Route path="/Adress/details/:pincode" element={<AdressDetails />}></Route>
          <Route path="/Adress/create/:pincode" element={<AdressEdit />}></Route>


        </Routes>
      </BrowserRouter>
    </div>
  );

}
export default App;


