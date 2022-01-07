import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementCount } from "./counterSlice";

function Counter() {
  // read from the Redux store
  const items = useSelector((state) => state.items);

  // gives us the dispatch function to send actions to the Redux store
  const dispatch = useDispatch();

  const colors = Array(360)
    .fill(0)
    .map((n, i) => i);

  const date = new Date("2022-01-01");

  function handleOnClick() {
    // dispatching an action on click
    dispatch(incrementCount());
  }

  return (
    <div>
      <button onClick={handleOnClick}>Click</button>
      <p>{items.length}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 175px)", gridAutoRows: "75px" }}>
        {colors.map((hue) => (
          <div key={hue} style={{ height: "100%", width: "100%", backgroundColor: `hsl(${hue}, 100%, 50%)` }}>
            {new Date(date.setDate(date.getDate() + 1)).toDateString()}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;
