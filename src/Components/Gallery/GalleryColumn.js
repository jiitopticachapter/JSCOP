import React from 'react'
import "./Yearwise/Yearwise.css";

function GalleryColumn() {
  return (
    <div className="gallery__column"><figure className="gallery__thumb">
    <img src="https://source.unsplash.com/_cvwXhGqG-o/300x300" alt="Portrait by Jessica Felicio" className="gallery__image" />
</figure>
<figure className="gallery__thumb">
    <img src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="Portrait by Oladimeji Odunsi" className="gallery__image" />	</figure>
<figure className="gallery__thumb">
    <img src="https://source.unsplash.com/VLPLo-GtrIE/300x300" alt="Portrait by Alex Perez" className="gallery__image" />
</figure></div>
  )
}

export default GalleryColumn