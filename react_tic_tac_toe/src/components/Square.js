import React from 'react'

function Square(props) {
    return (
      <button className={`square ${props.className}`} onClick={props.onClick}>
        {props.value}
      </button>
    );
}

export default Square;
