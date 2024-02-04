// icon:star-four-points | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
import * as React from "react";

function Star(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="rgb(99, 102, 241)"
      height="50px"
      width="50px"
      {...props}
    >
      <path d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z" />
    </svg>
  );
}

export default Star;
