import { Footer } from "@/components/Footer";
import { NewHeader } from "@/components/NewHeader";
import { Icon } from "@iconify/react";
import type { Metadata } from "next";
import Link from "next/link";

const contents = [
  {
    title: "デジクリとは",
    body: [
      "デジクリは、芝浦工業大学に所属するデジタルクリエーションサークルです。ゲーム制作をはじめ、アプリケーション開発などのプログラミング、イラスト制作、3Dモデリング、音楽制作、動画制作、VTuber活動など、さまざまなデジタルコンテンツの創作活動を行なっています。",
      "",
      "おもにPG班、イラスト班、3DCG班、DTM班、Movie班、SysDev班、VTuber班の7つに分かれており、協力して作品を作っています。班に所属することで活動が制限されることはないので、複数の班に所属している部員も多く、自由に創作活動をしています。詳細については新入生向けサイトをご覧ください。",
      "",
      "基本的に、企画を立てる → 制作する → 発表する、という流れで活動しています。",
    ].join("\n"),
  },
  {
    title: "活動理念",
    body: [
      "1. より良い作品を作れるように日々努力し",
      "2. 自分の作品の発表をすることで、プレゼン能力を高め",
      "3. 楽しく、他人にとって魅力ある作品を作れるように励むこと",
    ].join("\n"),
  },
  {
    title: "活動内容",
    body: [
      "毎週月曜日に定例会を開催して集まっています。ここでは作品の進捗を話したり、好きなものを布教する講座やLT（Lightning Talks : 短いプレゼンテーション）を行ったりしています。学校で活動できない期間はclusterというSNSを使い、バーチャル空間で集まっていました。",
      "",
      "普段は、一緒にわいわいゲームをしたり、お題に沿って制作したものをそれぞれ評価して技術を高めたりしています。",
      "",
      "### ① 企画作成・発表",
      "",
      "1年間で前期と後期の2回に分けて行なっています。まずはじめに、企画発表でやりたいことを発信して、メンバーを募集します。そして協力して制作し、中間発表を経て、最終発表で成果を披露します。個人で制作したものを発表する部員も多くいます。",
      "",
      "### ② 合宿",
      "8月に夏合宿、2月に冬合宿を行なっています。合宿中には様々な講座が行われ、技術を向上させたり、交流を深めたりすることができます。コロナ禍の2020～2022年度はオンラインで開催しました。",
    ].join("\n"),
  },
];
const menu = [
  {
    title: "お知らせ (Twitter / X)",
    href: "https://x.com/sitdigicre",
  },
  {
    title: "入部希望の方へ",
    href: "/welcome/",
  },
];

export const metadata: Metadata = {
  alternates: {
    canonical: "https://digicre.net/",
  },
};

interface YouTubeProps {
  videoId: string;
}

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
      <NewHeader />

      <main className="xl:ml-[320px]">
        <YouTube videoId="vM_Dmc5WLxs" />

        <section className="bg-sky px-[16px] md:px-[32px] py-[64px] flex flex-col gap-y-[64px]">
          <div className="text-white border-l-[0.25rem] border-[#fff] pl-[1rem]">
            <h2 className="text-28-700 mb-[2rem]">デジクリとは？</h2>

            <p className="text-20-400">芝浦工業大学の文化系サークルです。</p>

            <p className="text-20-400">
              プログラミング、ゲーム開発、イラスト、3DCG、音楽（DTM）、動画制作、VTuberなど、幅広いジャンルでデジタルコンテンツの制作を行っています。
            </p>
          </div>
        </section>

        <section
          id="activities"
          className="bg-[#fff] px-[16px] md:px-[32px] py-[64px] flex flex-col gap-y-[64px]"
        >
          <div className="text-[#20020] border-l-[0.25rem] border-sky pl-[1rem]">
            <h2 className="text-28-700 mb-[2rem]">主な活動</h2>

            <p className="text-20-400">
              普段は部室やDiscordのVCなどで交流したり、作品制作を行っています。
            </p>

            <p className="text-20-400">毎週月曜に定例会があります。</p>

            <p className="text-20-400">
              夏休みや春休み中に希望者で集まって合宿を行っています。デジクリ部員同士で交流を深めたり、色々な講座を実施してスキルアップをしたりする機会にもなっています。
            </p>

            <p className="text-20-400">
              大宮祭や芝浦祭といった学内の文化祭への出展はもちろん、コミックマーケットやM3といった外部イベントにも数多く参加しています。
            </p>
          </div>

          {/* ダミー */}
          <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-[16px]">
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <li
                  key={index}
                  className="aspect-square bg-[#202020] border-[2px] border-[#808080] rounded-[16px]"
                ></li>
              ))}
          </ul>
        </section>

        <section
          id="teams"
          className="bg-[#fff] px-[16px] md:px-[32px] py-[64px] flex flex-col gap-y-[64px]"
        >
          <div className="text-[#20020] border-l-[0.25rem] border-sky pl-[1rem]">
            <h2 className="text-28-700 mb-[2rem]">班紹介</h2>

            <p className="text-20-400">
              デジクリにおける「班」とは、活動分野という意味合いです。大きく分けて7つ存在します。
            </p>

            <p className="text-20-400">
              同じ班のメンバー同士で交流したり、ときには複数の班でコラボレーションして作品制作をすることもあります。
            </p>
          </div>

          {/* ダミー */}
          <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-[16px]">
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <li
                  key={index}
                  className="aspect-square bg-[#202020] border-[2px] border-[#808080] rounded-[16px]"
                ></li>
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
            {Array(6)
              .fill(null)
              .map((_, index) => (
                <details
                  name="faq"
                  key={index}
                  className="bg-white text-[#202020] border-[2px] border-[#808080] p-[16px] rounded-[16px]"
                >
                  <summary className="text-20-700 list-none">
                    質問タイトル
                  </summary>

                  <p className="mt-[16px]">回答</p>
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
              icon={"material-symbols:open-in-new-rounded"}
              className="text-[2rem]"
            />
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
