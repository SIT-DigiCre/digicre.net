import Breadcrumb from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { NewHeader as Header } from "@/components/NewHeader";
import { Icon } from "@iconify/react";
import parse from "html-react-parser";
import type { Metadata } from "next";
import Link from "next/link";
import { readFileSync } from "node:fs";
import YAML from "yaml";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://digicre.net/",
  },
};

type Params = {
  slug: string;
};

type Team = {
  id: string;
  name: string;
  about: About;
  activity: Activity;
  learn_more: LearnMore[];
};

type About = {
  content: string;
};

type Activity = {
  content: string;
  works: Work[];
};

type Work = {
  title: string;
  image: string;
  href: null;
};

type LearnMore = {
  title: string;
  content: string;
};

const rawTeams = readFileSync("./src/data/teams.yaml", "utf-8");
const teams = YAML.parse(rawTeams) as Team[];

export async function generateStaticParams() {
  return teams.map(({ id }) => ({ slug: id }));
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const team = teams.filter((t) => slug === t.id)[0];

  return (
    <>
      <Header />

      <main className="xl:ml-[320px]">
        <Breadcrumb />

        <section className="bg-sky px-[16px] md:px-[32px] py-[64px] flex flex-col gap-y-[64px]">
          <div className="text-white border-l-[0.25rem] border-[#fff] pl-[1rem]">
            <h2 className="text-28-700 mb-[2rem]">{`${team.name}とは？`}</h2>
            <div className="text-20-400">{parse(team.about.content)}</div>
          </div>
        </section>

        <section
          id="activities"
          className="bg-[#fff] px-[16px] md:px-[32px] py-[64px] flex flex-col gap-y-[64px]"
        >
          <div className="text-[#20020] border-l-[0.25rem] border-sky pl-[1rem]">
            <h2 className="text-28-700 mb-[2rem]">{`${team.name}の主な活動`}</h2>
            <div className="text-20-400">{parse(team.activity.content)}</div>
          </div>

          {/* ダミー */}
          <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-[16px]">
            {team.activity.works.map((item, index) => (
              <li
                key={index}
                className="aspect-square bg-[#202020] text-digicre-white border-[2px] border-[#808080] rounded-[16px]"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-[#DFDFDF] px-[16px] md:px-[32px] py-[64px] flex flex-col gap-y-[64px]">
          <div className="text-[#202020] border-l-[0.25rem] border-[#202020] pl-[1rem]">
            <h2 className="text-28-700 mb-[2rem]">{`${team.name}についてもっと詳しく！`}</h2>

            <p className="text-20-400">
              {`${team.name}に寄せられる主な質問と回答をまとめました。`}
            </p>
          </div>

          <div className="flex flex-col gap-y-[16px]">
            {team.learn_more.map((item, index) => (
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
