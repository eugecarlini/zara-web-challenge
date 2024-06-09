import React from "react";
import { Comic } from "@/types/comic";
import "./styles.css";

type ComicsCarouselProps = {
  comics: Comic[];
};

const ComicsCarousel: React.FC<ComicsCarouselProps> = ({ comics }) => (
  <ul className="character-detail__comics-list" aria-label="List of comics">
    {comics.map(({ id, name, imageSrc, year }) => (
      <li key={id} className="comic-item character-detail__comics-list-item">
        <figure>
          <img
            className="character-detail__comic-cover"
            src={imageSrc}
            alt={`Cover of ${name}`}
          />

          <figcaption>
            <p className="character-detail__comic-name">{name}</p>
            <p className="character-detail__comic-year">{year}</p>
          </figcaption>
        </figure>
      </li>
    ))}
  </ul>
);

export default ComicsCarousel;
