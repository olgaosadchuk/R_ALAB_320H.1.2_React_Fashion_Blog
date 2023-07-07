
import React from 'react';

function Article(props) {
  return (
    <article className="article">
      <div className="date">{props.date}</div>
      <h2>{props.title}</h2>
      <img src={props.image} alt={props.title} />
      <p>{props.text}</p>
      <a href="#" className="continues">Continues...</a>
    </article>
  );
}

export default Article;

