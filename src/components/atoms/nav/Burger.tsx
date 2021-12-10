import React from "react";
import { motion, Transition } from "framer-motion";

interface Props {
    isOpen?: Boolean;
    color?: string;
    strokeWidth?: string | number;
    width?: string | number;
    height?: string | number
    transition?: Transition;
    lineProps?: any;
    onClick?: () => void
}

// const Container = styled(motion.svg)`
//   /* display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center; */
//   padding: 1rem;
//   cursor: pointer;
// `;

// const BurgerLine = styled(motion.line)`
//   /* width: 2rem;
//   height: 0.35rem;
//   background-color: ${COLORS.primaryText};
//   border-radius: 4px; */

//   /* &:not(:last-child) {
//     margin-bottom: 4px;
//   } */
// `;

export default function Burger({
  isOpen,
  lineProps = null,
  transition = null,
  width = 24,
  height = 24,
  strokeWidth = 1,
  color = "#000",
  ...props
}: Props) {
  const variant = isOpen ? "opened" : "closed";
  const top = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: 45,
      translateY: 2,
    },
  };
  const center = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottom = {
    closed: {
      rotate: 0,
      translateY: 0,
    },
    opened: {
      rotate: -45,
      translateY: 2,
    },
  };

  lineProps = {
    stroke: color,
    strokeWidth: strokeWidth,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps,
  };

  const unitHeight = 4;
  const unitWidth = (unitHeight * (width as number)) / (height as number);
  return (
    <motion.svg
      viewBox={`0 0 ${unitWidth} ${unitHeight}`}
      overflow="visible"
      preserveAspectRatio="none"
      width={width}
      height={height}
      {...props}
    >
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variant={top}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variant={center}
        {...lineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variant={bottom}
        {...lineProps}
      />
    </motion.svg>
  );
}
