import React from "react";

export default function Header() {
  return (
    <div className="flex justify-center mt-16 mb-12">
      <div className="flex flex-col w-full">
        <h1 className="text-4xl font-bold">Sample Title</h1>
        <div className="flex flex-row space-x-2 mt-2">
          <div>Avatar</div>
          <div>/</div>
          <div>Date</div>
        </div>
      </div>
    </div>
  );
}
