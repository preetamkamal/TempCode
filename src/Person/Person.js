import React from "react";

export default function Person(props) {
  return (
    <div>
      <p onClick={props.deleteMe}>
        I am {props.name} and I am {props.age} old
      </p>
      <input type="text" onChange={props.nameChange} value={props.name} />
    </div>
  );
}
