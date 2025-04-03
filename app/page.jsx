"use client";

import React, { useState } from "react";

import { FaArrowRotateLeft } from "react-icons/fa6";

const Home = () => {
  const initialMatrix = Array.from({ length: 3 }, () => Array(3).fill(false));
  const [matrix, setMatrix] = useState(initialMatrix);

  const handleClick = (row, col) => {
    const newMatrix = matrix.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? true : cell))
    );
    setMatrix(newMatrix);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-16">
      <div className="grid grid-cols-3 gap-4">
        {matrix.map((row, rowIndex) =>
          row.map((isGreen, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              onClick={() => handleClick(rowIndex, colIndex)}
              className={`w-24 h-24 border flex justify-center items-center cursor-pointer transition-colors duration-300
            ${isGreen ? "bg-green-500" : "bg-white"}`}
            ></div>
          ))
        )}
      </div>
      <div className="flex flex-row gap-3">
        <FaArrowRotateLeft className="text-3xl mt-1" />
        <span className="text-4xl">Restart</span>
      </div>
    </div>
  );
};

export default Home;
