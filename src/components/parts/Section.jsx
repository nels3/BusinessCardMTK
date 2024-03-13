import { Element } from "react-scroll";

import "bootstrap/dist/css/bootstrap.min.css";

function Section({ name = "", child }) {
  return (
    <Element name={name} className="element" style={{ marginTop: "5vh" }}>
      {child}
    </Element>
  );
}

export default Section;
