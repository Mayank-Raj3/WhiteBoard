import React from "react";
import { useEffect, useRef } from "react";
import rough from "roughjs";

function Board() {
  const canvasRef = useRef();

  useEffect(() => {
    // reference to canvas using useref
    const canvas = canvasRef.current;
    // const context = canvas.getContext("2d");

    // setting width height of canvas
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    /*
    context.fillStyle = "#FF0";
    context.fillRect(0, 0, 150, 75);*/

    // x1,y1,x2,y2
    let roughCanvas = rough.canvas(canvas);
    let generator = roughCanvas.generator;
    let rect1 = generator.rectangle(10, 10, 100, 100);
    let rect2 = generator.rectangle(10, 120, 100, 100, {
      fill: "red",
      stroke: "blue",
      strokeWidth: 1,
    });
    roughCanvas.draw(rect1);
    roughCanvas.draw(rect2);
  }, []);
  const onMouseDown = (event) => {
    const clientX = event.clientX;
    const clientY = event.clientY;
    console.log(clientX, clientY);
  };
  return <canvas ref={canvasRef} onMouseDown={onMouseDown} />;
}

export default Board;
