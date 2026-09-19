import type React from "react";

interface Props {
  videoId: string;
  title?: string;
  width?: string | number;
  height?: string | number;
}

const YouTube: React.FC<Props> = ({ videoId, title = "YouTube video" }) => {
  const options = new URLSearchParams({
    disablekb: "1",
    loop: "1",
    mute: "1",
    playlist: videoId,
    rel: "0",
  });
  const embedUrl = `https://www.youtube.com/embed/${videoId}?${options.toString()}`;

  return (
    <iframe
      src={embedUrl}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="aspect-video"
    />
  );
};

export default YouTube;
