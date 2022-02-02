import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

export default function Cards({ ghiblis }) {
  return (
    <div className="container">
      <ul>
        {ghiblis.map(({ id, title, image }) => (
          <div key={id} className="column">
            <li>{title}</li>
            <Link key={id} to={`/${id}`}>
              <img src={image}></img>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
