import React from "react";
import { Comic } from "@/types/comic";
import "./styles.css";

type ComicsCarouselProps = {
  comics: Comic[];
};

const ComicsCarousel: React.FC<ComicsCarouselProps> = ({ comics }) => (
  <div className="carousel-comics">
    <ul className="carousel-comics__list" role="list">
      {comics.map(({ id, name, imageSrc, year }) => (
        <li key={id} className="carousel-comics__list-item" role="listitem">
          <figure>
            <img
              className="carousel-comics__cover"
              src={imageSrc}
              alt={`Cover of ${name}`}
            />

            <figcaption className="carousel-comics__footer">
              <p className="carousel-comics__name">{name}</p>
              <p className="carousel-comics__year">{year}</p>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  </div>
);

export default ComicsCarousel;
