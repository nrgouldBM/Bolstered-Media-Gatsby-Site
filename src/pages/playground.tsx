import React, { useEffect, useRef } from "react";
import "../index.css";
import { useTransform, useScroll } from "framer-motion";
import ServicesAnimated from "../components/organisms/ServicesAnimated";
import { Helmet } from "react-helmet";

const HEIGHT = 600;

export default function playground() {
  const ref = useRef();

  const { scrollY } = useScroll({
    target: ref,
  });

  useEffect(() => {
    scrollY.onChange((latest) => {
      console.log(latest);
    });
  });

  const scale = useTransform(scrollY, [0, HEIGHT], [0, 2]);

  return (
    <div>
      <Helmet meta={[{ name: "robots", content: "noindex" }]} />
      <div style={{ height: "100vh", backgroundColor: "black" }} />
      <ServicesAnimated />
      <div style={{ height: "100vh", backgroundColor: "black" }} />
      {/* <motion.div
        style={{
          backgroundColor: COLORS.primary2,
          height: 20,
          scaleX: scrollY,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          transformOrigin: "0%",
        }}
      />
      
      <div
        ref={ref}
        style={{
          height: HEIGHT,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 1, x: 0 }}
          //   whileInView={{ x: 100 }}
          //   whileHover={{ opacity: 0, x: 0 }}
          //   transition={{ type: "spring", duration: 1 }}
          exit={{ opacity: 0 }}
          style={{ position: "relative", scale }}
        >
          <Title>playground</Title>
        </motion.div>
      </div>
      <div style={{ height: "100vh", backgroundColor: "black" }} /> */}
    </div>
  );
}
