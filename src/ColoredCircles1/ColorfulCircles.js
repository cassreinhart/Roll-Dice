import React, {useState} from "react";
import Circle from "./Circle";
import ColorButtons from "./ColorButtons";

function getRandom(min = 0, max = 100) {
  return Math.random() * (max - min) + min;
}

const ColorfulCircles = () => {
  const [circles, setCircles] = useState([])
  const addCircle = (color) => {
    setCircles(circles => [...circles, {color, x: getRandom(), y: getRandom()}]);
  } 
  const randomize = () => {
    setCircles(circles => circles.map(c => ({...c, x: getRandom(), y: getRandom()})))
  }

  const changePosition = idx => {
    setCircles(circles => (
      circles.map((circle, i) => (
        i === idx 
          ? {...circle, x: getRandom(), y: getRandom()}
          : circle
      ))
    ))
  }
  return (
    <div>
      <ColorButtons addCircle={addCircle} options={['peachpuff', 'lavender', 'thistle']} />
      <button onClick={randomize}>Randomize All</button>
      {circles.map(({color, x, y}, idx) => (
        <Circle 
          changePosition={changePosition} 
          color={color} 
          idx={idx} 
          key={idx} 
          x={x} 
          y={y}/>
      ))}

    </div>
  )
}


export default ColorfulCircles;