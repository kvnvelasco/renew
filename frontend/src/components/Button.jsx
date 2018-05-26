
import React from 'react';
import './button.css';

export default function Button(props) {
  return (
    <a href={props.to} onClick={props.onClick} className="btn">
      {props.children}
    </a>
  )
}