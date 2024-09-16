import React from "react";
import { IconContext, Horse, Heart, Cube } from "@phosphor-icons/react";

export default function Icons() {
  return (
    <IconContext.Provider
      value={{
        color: "blueviolet",
        size: 32,
        weight: "bold",
        mirrored: true,
      }}
    >
      <div>
        <Horse /> {/* I'm lime-green, 32px, and bold! */}
        <Heart /> {/* Me too! */}
        <Cube /> {/* Me three :) */}
      </div>
    </IconContext.Provider>
  );
}
