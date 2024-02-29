import React from "react";

interface Props {
  rating: number;
}

const Rating = ({ rating }: Props) => {
  if (rating == 1) {
    return (
      <div className="rating">
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          checked
        />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
    );
  } else if (rating == 2) {
    return (
      <div className="rating">
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          checked
        />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
    );
  } else if (rating == 3) {
    return (
      <div className="rating">
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          checked
        />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
    );
  } else if (rating == 4) {
    return (
      <div className="rating">
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          checked
        />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
    );
  } else if (rating == 5) {
    return (
      <div className="rating">
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          checked
        />
      </div>
    );
  }
};

export default Rating;
