import React from "react";

export default ({ className, label, iconion }) => (
  <button className={className}>
    <i className={iconion} />
    {label}
  </button>
);
