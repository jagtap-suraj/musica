import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { musicContent } from "../data/music_content";

export default function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicContent} />{" "}
    </div>
  );
}
