import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import "bootstrap/dist/css/bootstrap.min.css";

function Section({ name = "", child }) {
  return (
    <Element name={name} className="element">
      {child}
    </Element>
  );
}

export default Section;
