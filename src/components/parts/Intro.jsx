import React from "react";

const Intro = ({ title = "" }) => {
  return (
    <>
      <div>{title}</div>
      <div className="rectangle" />
    </>
  );
};

export default Intro;
