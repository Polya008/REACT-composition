import React from 'react';

export default function Card({ children, title, text, link}) {
    console.log(children)
  return (
  <div class="card" style={{width: "18rem"}}>
  {/* <image src="..." class="card-img-top" alt="..."></image> */}
  {children}
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{text}</p>
    <a href={link} class="btn btn-primary">Go watch!</a>
  </div>
</div>
  );
}