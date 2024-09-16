import React from "react";
import { Avocado } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <div className="Hero">
      <div className="container">
        <h1 className="hero text-purple-600 fw-bold">
          <text className="hero">
            Hello, I am
            
            Belinda Amezquita
            <Avocado weight="duotone" />
          </text>
        </h1>
        <h2>Front end developer based in San Diego, California</h2>
      </div>
    </div>
  );
}
