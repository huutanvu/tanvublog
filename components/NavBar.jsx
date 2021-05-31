import React from "react";

export default function NavBar() {
  return (
    <div className="bg-white flex justify-center sticky z-20 top-0">
      <div className="py-8 w-full">
        <div className="flex justify-between items-center">
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
