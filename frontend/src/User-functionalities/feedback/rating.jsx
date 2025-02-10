import React  from "react";
export const Rating = () => {
    return(
<div className="rating">
  <input type="radio" id="star5" name="rating" value="5"/>
  <label htmlFor="star5">
    <svg viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
    </svg>
  </label>

  <input type="radio" id="star4" name="rating" value="4"/>
  <label htmlFor="star4">
    <svg viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
    </svg>
  </label>

  <input type="radio" id="star3" name="rating" value="3"/>
  <label htmlFor="star3">
    <svg viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
    </svg>
  </label>

  <input type="radio" id="star2" name="rating" value="2"/>
  <label htmlFor="star2">
    <svg viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
    </svg>
  </label>

  <input type="radio" id="star1" name="rating" value="1"/>
  <label htmlFor="star1">
    <svg viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
    </svg>
  </label>
</div>
    )
}