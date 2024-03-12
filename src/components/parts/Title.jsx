import React from "react";
import { VscChip } from "react-icons/vsc";

const Title = ({ title = "" }) => {
  return (
    <div className="title">
      <h1>
        <VscChip style={{ marginRight: "4px" }} />
        {title}
      </h1>
    </div>
  );
};

export default Title;
