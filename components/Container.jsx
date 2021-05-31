import React, { useState } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Main from "./Main";

export default function Container() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-4xl w-screen p-16 pt-8">
        <NavBar />
        <Header />
        <Main />
      </div>
    </div>
  );
}
