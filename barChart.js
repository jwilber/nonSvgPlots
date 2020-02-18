'use strict';
//still needs labels. may need to refactor grid to put labels in the bottom-most divs

const createGrid = (div, x, y) => {
  const chartDiv = document.getElementById(div);
  const chartWidth = x;
  const chartHeight = y;

  //css grid rule
  const gridTemplate = [];
  for (let i = 0; i < chartHeight; i++) gridTemplate.push("1fr ");
  gridTemplate.push("/ ");
  for (let i = 0; i < chartWidth; i++) gridTemplate.push("1fr ");
  chartDiv.setAttribute("style", `grid-template: ${gridTemplate.join(" ")};`);
  
  for (let y = 0; y < chartHeight; y++) {
    for (let x = 0; x < chartWidth; x++) {
      let pixelDiv = document.createElement("div");
      //zero based coordinates, where bottom left is 0,0
      pixelDiv.setAttribute("id", `pixelDiv_${x},${chartHeight - 1- y}`)
      chartDiv.appendChild(pixelDiv);
    }
  }
}

const createBarChart = (targetDiv, data) => {
  const getMaxValueInData = (data) => {
    let max = 0;
    data.forEach(val => max = val[1] > max ? val[1] : max);
    return max;
  }
  createGrid(targetDiv, data.length - 1, getMaxValueInData(data));

  let color = 0;

  //iterating through data, create bars
  for (let i = 1; i < data.length; i++) {
    const height = data[i][1];
    for (let j = 0; j < height; j++) {
      let pixel = document.getElementById(`pixelDiv_${i - 1},${j}`);
      pixel.setAttribute("style", `background-color: hsl(${color}, 100%, 50%); margin: 0 5%;`);
    }
    color += 60;
    if (color > 360) color -= 360;
  }
}

const data = [
  ["name", "age"],
  ["bob", 28],
  ["steve", 24],
  ["joe", 22],
];

createBarChart("chart", data);
