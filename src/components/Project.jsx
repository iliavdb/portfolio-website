import React from "react";

const Project = ({ title, image, button, onOpen }) => {
  return (
    <section className="project-card">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <button onClick={onOpen}>{button}</button>
    </section>
  );
};

export default Project;
