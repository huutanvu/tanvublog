import React, { useState } from "react";
import NavBar from "./NavBar";
import Header from "./Header";

export default function Container() {
  return (
    <div className="flex flex-col h-screen p-16 pt-8">
      <NavBar />
      <Header />
    </div>
  );
}
