import React from "react";

interface Props {
  ratingStars: number;
}

const Rating = ({ ratingStars }: Props) => {
  if (ratingStars == 1) {
    return (
      <div className="rating">
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
          disabled
          checked
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
          disabled
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
          disabled
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
          disabled
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
          disabled
        />
      </div>
    );
  } else if (ratingStars == 2) {
    return (
      <div className="rating">
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
          checked
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
        />
      </div>
    );
  } else if (ratingStars == 3) {
    return (
      <div className="rating">
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
          checked
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
        />
      </div>
    );
  } else if (ratingStars == 4) {
    return (
      <div className="rating">
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
          checked
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
        />
      </div>
    );
  } else if (ratingStars == 5) {
    return (
      <div className="rating">
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
        />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star bg-yellow-400"
          checked
        />
      </div>
    );
  }
};

export default Rating;
