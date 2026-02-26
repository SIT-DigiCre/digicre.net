"use client";

type ImageSlide = {
  type: "image";
  src: string;
  alt: string;
};

type YouTubeSlide = {
  type: "youtube";
  url: string;
  thumbnail?: string;
  alt?: string;
};

type Slide = ImageSlide | YouTubeSlide;

type SliderProps = {
  slides: Slide[];
};

export default function Slider({ slides }: SliderProps) {
  return <></>;
}
