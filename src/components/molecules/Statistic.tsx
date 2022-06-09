import { useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { COLORS } from "../../theme";
import { motion } from "framer-motion";

const StatText = styled.h2`
  font-size: 2.5rem;
  color: ${COLORS.primaryText};
  margin-bottom: 0;
`;

const Description = styled.h4`
  font-size: 1rem;
  color: ${COLORS.primaryText};
  font-weight: 500;
  margin: 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: 10rem;
  margin: 0.5rem 1rem;
`;

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

export default function Statistic({ stat, desc }) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  return (
    <Container>
      <StatText aria-label={stat} role="heading">
        {stat.split(" ").map((word, index) => {
          return (
            <Word
              ref={ref}
              aria-hidden="true"
              initial="hidden"
              key={index}
              animate={ctrls}
              variants={wordAnimation}
              transition={{
                delayChildren: index * 0.25,
                staggerChildren: 0.05,
              }}
            >
              {word.split("").map((character, index) => (
                <Character
                  ref={ref}
                  area-hidden="true"
                  key={index}
                  initial="hidden"
                  animate={ctrls}
                  variants={characterAnimation}
                >
                  {character}
                </Character>
              ))}
            </Word>
          );
        })}
      </StatText>
      <Description>{desc}</Description>
    </Container>
  );
}
