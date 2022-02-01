import React from 'react';
import './Cards.css';

export default function Cards({ ghiblis }) {
  return (
    <div className="container">
      {ghiblis.map((item) => (
        <div key={item.id} className="column">
          <li>{item.title}</li>
          <img src={item.image}></img>
        </div>
      ))}
    </div>
  );
}
