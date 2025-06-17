import React from 'react';
import defaultImage from '../assets/news-img.jpg';

export const Newsitem = ({ title, description, src, url }) => {
  const handleImageError = (e) => {
    e.target.src = defaultImage;
  };

  return (
    <div className="card h-100">
      <img
        src={src || defaultImage}
        onError={handleImageError}
        className="card-img-top"
        alt="news"
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title ? title.slice(0, 60) : "Title"}</h5>
        <p className="card-text">{description ? description.slice(0, 100) : "Description"}</p>
        <a href={url} target="_blank" className="btn btn-primary mt-auto" rel="noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};
