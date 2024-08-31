"use client";

import { useEffect } from "react";

export default function MouseEffect() {
  useEffect(() => {
    const handleOnMouseMove = (e) => {
      const { currentTarget: target } = e;
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      target.style.setProperty("--mouse-x", `${x}px`);
      target.style.setProperty("--mouse-y", `${y}px`);
    };

    const body = document.querySelector("body");
    body.onmousemove = handleOnMouseMove;

    return () => {
      body.onmousemove = null;
    };
  }, []);

  return null;
}
