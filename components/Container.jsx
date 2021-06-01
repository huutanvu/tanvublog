import React, { useState } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Main from "./Main";

export default function Container() {
  return (
    <div className="flex justify-center bg-gray-50">
      <div className="flex flex-col w-screen items-center">
        <NavBar />
        <div className="max-w-4xl w-screen justify-center items-center">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}
