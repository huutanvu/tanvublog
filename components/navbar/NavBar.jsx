import React from "react";

export default function NavBar() {
  return (
    <div className="bg-white flex justify-center sticky z-20 top-0 mt-4">
      <div className="max-w-4xl w-screen">
        <div className="flex justify-between items-center m-8">
          <div>Tan Vu</div>
          <nav className="flex space-x-4">
            <a href="#">Blog</a>
            <a href="#">About</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
