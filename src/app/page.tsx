import { Footer } from "@/components/Footer";
import { NewHeader as Header } from "@/components/NewHeader";
import { Icon } from "@iconify/react";
import parse from "html-react-parser";
import type { Metadata } from "next";
import Link from "next/link";
import { readFileSync } from "node:fs";
import YAML from "yaml";

const rawPageContent = readFileSync("./src/data/home.yaml", "utf-8");
const pageContent = YAML.parse(rawPageContent) as PageContent;

export const metadata: Metadata = {
  alternates: {
    canonical: "https://digicre.net/",
  },
};

interface YouTubeProps {
  videoId: string;
}

type PageContent = {
  about: About;
  activity: Activity;
  team: Team;
  learn_more: LearnMore[];
};

type About = {
  content: string;
};

type Activity = {
  content: string;
  examples: Example[];
};

type Example = {
  title: string;
  image: string;
  href?: string;
};
type Example2 = {
  title: string;
  image: string;
  href: string;
};

type Team = {
  title: string;
  content: string;
  teams: Example2[];
};

type LearnMore = {
  title: string;
  content: string;
};

const YouTube: React.FC<YouTubeProps> = ({ videoId }) => {
  const params = new URLSearchParams();
  params.append("playlist", videoId); // Enable loop
  params.append("loop", "1"); // Enable loop
  params.append("rel", "0");
  params.append("disablekb", "1");
  params.append("mute", "1");

  return (
    <iframe
      width={320}
      height={240}
      src={
        new URL(
          `${videoId}?${params.toString()}`,
          "https://www.youtube.com/embed/",
        ).href
      }
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="aspect-video w-full h-auto max-h-[540px]"
      loading="lazy"
      title="デジクリ紹介動画"
    ></iframe>
  );
};

export default function Home() {
  return (
    <>
      <Header />

      <main className="xl:ml-[320px]">
        <YouTube videoId="vM_Dmc5WLxs" />

        <section className="bg-sky px-[16px] md:px-[32px] py-[64px] flex flex-col gap-y-[64px]">
          <div className="text-white border-l-[0.25rem] border-[#fff] pl-[1rem]">
            <h2 className="text-28-700 mb-[2rem]">デジクリとは？</h2>
            <div className="text-20-400">
              {parse(pageContent.about.content)}
            </div>
          </div>
        </section>

        <section
          id="activities"
          className="bg-[#fff] px-[16px] md:px-[32px] py-[64px] flex flex-col gap-y-[64px]"
        >
          <div className="text-[#20020] border-l-[0.25rem] border-sky pl-[1rem]">
            <h2 className="text-28-700 mb-[2rem]">主な活動</h2>

            <div className="text-20-400">
              {parse(pageContent.activity.content)}
            </div>
          </div>

          <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-[16px]">
            {pageContent.activity.examples.map((item, index) => (
              <li
                key={index}
                className="aspect-square bg-[#202020] border-[2px] border-[#808080] rounded-[16px]"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </section>

        <section
          id="teams"
          className="bg-[#fff] px-[16px] md:px-[32px] py-[64px] flex flex-col gap-y-[64px]"
        >
          <div className="text-[#20020] border-l-[0.25rem] border-sky pl-[1rem]">
            <h2 className="text-28-700 mb-[2rem]">班紹介</h2>

            <div className="text-20-400">{parse(pageContent.team.content)}</div>
          </div>

          {/* ダミー */}
          <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-[16px]">
            {pageContent.team.teams.map((item, index) => (
              <li
                key={index}
                className="aspect-square bg-[#202020] text-digicre-white border-[2px] border-[#808080] rounded-[16px] overflow-hidden"
              >
                <Link
                  href={item.href}
                  className="bg-digicre-black/75 text-digicre-white p-[16px] flex gap-[16px] items-center"
                >
                  <span className="w-full text-20-700">{item.title}</span>
                  <Icon
                    icon="material-symbols:open-in-new-rounded"
                    className="text-[2rem]"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-[#DFDFDF] px-[16px] md:px-[32px] py-[64px] flex flex-col gap-y-[64px]">
          <div className="text-[#202020] border-l-[0.25rem] border-[#202020] pl-[1rem]">
            <h2 className="text-28-700 mb-[2rem]">よくある質問</h2>

            <p className="text-20-400">
              入部を希望される方から受ける主な質問と回答をまとめました。
            </p>
          </div>

          <div className="flex flex-col gap-y-[16px]">
            {pageContent.learn_more.map((item, index) => (
              <details
                name="faq"
                key={index}
                className="bg-white text-[#202020] border-[2px] border-[#808080] p-[16px] rounded-[16px]"
              >
                <summary className="text-20-700 list-none">
                  <h3>{item.title}</h3>
                </summary>

                <div className="mt-[16px]">{parse(item.content)}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-sky px-[16px] md:px-[32px] py-[64px] flex flex-col gap-y-[64px]">
          <div className="text-white border-l-[0.25rem] border-[#fff] pl-[1rem]">
            <h2 className="text-28-700 mb-[2rem]">
              デジクリで活動してみませんか？
            </h2>

            <p className="text-20-400">
              入部受付フォームからメールアドレスをご登録いただくと、デジクリへの入部方法や見学案内などのメールをお送りします。
            </p>
          </div>

          <Link
            href="https://forms.gle/cY25Kc6fssqv2tZz9"
            className="bg-[#fff] border-[2px] border-[#808080] text-[#202020] p-[16px] flex gap-[16px] rounded-[16px] items-center text-20-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="w-full font-bold">入部受付フォーム</span>
            <Icon
              icon="material-symbols:open-in-new-rounded"
              className="text-[2rem]"
            />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
