import React from "react";

const Photo = ({ title, url, thumbnailUrl }) => {
  return (
    <div style={{ border: "3px dotted #f5f5f5" }}>
      <h2> {title} </h2>
      <div>
        <img src={url} alt="URL" />
      </div>
      <div>
        <img src={thumbnailUrl} alt="thumbnail" />
      </div>
    </div>
  );
};

export default Photo;
