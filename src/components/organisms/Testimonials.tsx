import React, { useState, useEffect } from "react";
import { Title } from "../atoms/Title";
import Profile2 from "../../images/Profile2.png";
import Profile from "../../images/profile.jpg";

import styled from "styled-components";
import Testimonial from "../molecules/Testimonial";
import DotGroup from "../molecules/DotGroup";
import Arrow from "../atoms/Arrow";

const Container = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 3rem;
  position: relative;
`;

const ArrowRightContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
`;

export default function Testimonials() {
  const [num, setNum] = useState(0);
  let testimonial;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (num === 2) setNum(0);
  //     if (num < 3) setNum(num + 1);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  switch (num) {
    case 0:
      testimonial = (
        <Testimonial
          img={Profile2}
          name="Bob Jones"
          title="CEO"
          company="company"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero deleniti quam cupiditate culpa similique autem obcaecati neque sunt. Consequuntur neque cumque voluptatum odio aliquid nostrum, esse porro nihil rerum fugit eaque minus qui itaque aspernatur temporibus, architecto error tempora dolorem?"
        />
      );
      break;
    case 1:
      testimonial = (
        <Testimonial
          img={Profile}
          name="Karen Jones"
          title="CEO"
          company="company"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero deleniti quam cupiditate culpa similique autem obcaecati neque sunt. Consequuntur neque cumque voluptatum odio aliquid nostrum, esse porro nihil rerum fugit eaque minus qui itaque aspernatur temporibus, architecto error tempora dolorem?"
        />
      );
      break;
    case 2:
      testimonial = (
        <Testimonial
          img={Profile2}
          name="Jared Jones"
          title="CEO"
          company="company"
          text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero deleniti quam cupiditate culpa similique autem obcaecati neque sunt. Consequuntur neque cumque voluptatum odio aliquid nostrum, esse porro nihil rerum fugit eaque minus qui itaque aspernatur temporibus, architecto error tempora dolorem?"
        />
      );
      break;
  }
  return (
    <React.Fragment>
      <Container>
        <Title style={{ marginBottom: "5rem" }}>
          What our clients are saying
        </Title>
        {testimonial}
        <ArrowRightContainer>
          <Arrow />
        </ArrowRightContainer>
      </Container>
      <DotGroup num={num} setNum={setNum} />
    </React.Fragment>
  );
}
