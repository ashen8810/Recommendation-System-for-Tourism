import React from "react";
// JSX
import HeroSlider, { Overlay, Slide } from "hero-slider";

import Wrapper from "../UI/Wrapper/Wrapper";
import Title from "../UI/Title/Title";
import Subtitle from "../UI/Subtitle/Subtitle";

// Images
const im1 = "https://drive.google.com/uc?export=view&id=1OdPPRaP4aLAHumJaJgCZGjQC2aq1zwrH";
const im2 = "https://drive.google.com/uc?export=view&id=1f3acDsb9QDtBqSJB4ueMPrRNHXOBRFgK";
const im3 = "https://drive.google.com/uc?export=view&id=1ZRTeLtzxpTWHMXVRteOMQ48jHUo13ocY";
const im4 = "https://drive.google.com/uc?export=view&id=1qk-44PuO6kt6zVZzDwVCevE5unhuafw1";

export default function BasicSlider() {
  return (
    <>
    <HeroSlider
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay>
        <Wrapper>
          <Title>Discover Amazing Places In </Title>
          <Subtitle>
          Sri Lanka
          </Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        background={{
          backgroundImageSrc: im1
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: im2
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: im3
        }}
      />

      <Slide
        shouldRenderMask
        background={{
          backgroundImageSrc: im4
        }}
      />

    </HeroSlider>
    </>
  );
}