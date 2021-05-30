import React from "react";

export default function NavBar() {
  return (
    <div className="h-screen">
      <div className="bg-white flex justify-center sticky z-20 top-0">
        <div className="max-w-4xl w-screen">
          <div className="flex justify-between items-center sm:m-8">
            <div>Logo</div>
            <nav className="flex space-x-4">
              <a href="#">Blog</a>
              <a href="#">About</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
