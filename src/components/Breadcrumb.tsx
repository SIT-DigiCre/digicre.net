"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function Breadcrumb() {
  const segments = useSelectedLayoutSegments();

  return (
    <div className="bg-digicre-white flex flex-col px-[16px] md:px-[32px] py-[64px] gap-y-[64px] pt-[96px]">
      <ol className="border-l-[0.25rem] border-digicre-skyblue pl-[1rem] flex gap-x-[1rem]">
        {segments.map((segment, index) => (
          <li key={index} className="text-16-400">
            <Link href="/">{segment}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
