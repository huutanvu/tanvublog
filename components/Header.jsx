import React from "react";

export default function Header() {
  return (
    <div className="flex justify-center m-16 mt-16 mb-12">
      <div className="flex flex-col w-full">
        <div className="flex items-center mb-4">
          <div className="flex bg-blue-100 p-4 rounded-full justify-center items-center">
            TV
          </div>
          <div className="flex flex-col ml-4 text-sm">
            <div className="text-gray-500">written by</div>
            <div>Tan Vu</div>
          </div>
        </div>
        <h1 className="text-4xl font-bold">Sample Title</h1>
        <div className="flex flex-row space-x-2 mt-2">
          <div>Tag</div>
          <div> - </div>
          <div>Date</div>
        </div>
      </div>
    </div>
  );
}
