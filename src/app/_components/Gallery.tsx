"use client";

export default function Gallery() {
  return (
    <div className="card overflow-hidden">
      <iframe
        width={320}
        height={240}
        src="https://www.youtube.com/embed/vM_Dmc5WLxs?si=IBPqDNbc2tT4GtM2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="aspect-video w-full h-auto"
        loading="lazy"
        title="デジクリ紹介動画"
      ></iframe>
    </div>
  );
}
