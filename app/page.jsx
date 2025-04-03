"use client";

import React, { useState, useEffect } from "react";

import { FaArrowRotateLeft } from "react-icons/fa6";

const Home = () => {
  const initialMatrix = Array.from({ length: 3 }, () =>
    Array(3).fill("normal")
  );
  const [matrix, setMatrix] = useState(initialMatrix);
  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (row, col) => {
    if (matrix[row][col] === "normal") {
      setMatrix((prev) => {
        const newMatrix = prev.map((r, i) => {
          if (i === row) {
            return r.map((cell, j) => (j === col ? "green" : cell));
          }
          return r;
        });
        return newMatrix;
      });
      setClickOrder((prev) => [...prev, { row, col }]);
    }
  };

  useEffect(() => {
    if (clickOrder.length === 9) {
      clickOrder.forEach((pos, index) => {
        setTimeout(() => {
          setMatrix((prevMatrix) => {
            const newMatrix = prevMatrix.map((row) => [...row]);
            newMatrix[pos.row][pos.col] = "orange";
            return newMatrix;
          });
        }, 750 * index);
      });
    }
  }, [clickOrder]);

  const getBgColor = (status) => {
    switch (status) {
      case "green":
        return "bg-green-500";
      case "orange":
        return "bg-orange-500";
      default:
        return "bg-white";
    }
  };

  const resetStates = () => {
    setMatrix(initialMatrix);
    setClickOrder([]);
  };

  return (
    <div className="mx-auto pt-32 min-h-[750px]">
      <div className="flex flex-col items-center gap-16">
        <div className="grid grid-cols-3 gap-4">
          {matrix.map((row, rowIndex) =>
            row.map((status, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                onClick={() => handleClick(rowIndex, colIndex)}
                className={`w-24 h-24 border flex justify-center items-center cursor-pointer transition-colors duration-300 ${getBgColor(
                  status
                )}`}
              ></div>
            ))
          )}
        </div>
        <div
          className="flex flex-row gap-3 bg-lime-600 p-4 cursor-pointer rounded-2xl border border-white/10 hover:bg-primary hover:border-lime-600 transition-all duration-250"
          onClick={resetStates}
        >
          <FaArrowRotateLeft className="text-3xl mt-1" />
          <span className="text-4xl">Restart</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
