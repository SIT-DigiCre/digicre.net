import Breadcrumb from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { NewHeader as Header } from "@/components/NewHeader";
import { Icon } from "@iconify/react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://digicre.net/",
  },
};

type Params = {
  slug: string;
};

const _devData = [
  {
    slug: "pg",
    name: "PG",
    about:
      "PG班ではプログラミング言語を用いて色々なものを製作しています。\n\nプログラミングというとゲーム開発やスマホアプリ開発などをイメージする人が多いかもしれませんが\n\n他にもWeb開発やマイコンやRaspberryPiなどを用いた開発、機械学習など、様々な分野があります。\n\n活動は個人で作りたい物を作る個人開発と、イラスト班やDTM班を巻き込んで数人数十人で協力して一つのゲームなどを開発する集団開発があります。\n",
    activities: {
      description: "ここにテキストを入力。\n",
      works: [
        {
          title: "作品例",
          href: "http://example.com",
        },
        {
          title: "作品例",
          href: "http://example.com",
        },
      ],
    },
    questions: [
      {
        title: "質問タイトル",
        answer: "ここにテキストを入力。\n",
      },
    ],
  },
  {
    slug: "2dcg",
    name: "イラスト",
    about:
      "イラスト班では、主にパソコンやタブレットなどを使ったデジタルイラストの制作をしています。\n\nデジタルイラストは、文字通りデジタルで描くイラストのことで、加工や編集が容易なことに加え、様々な表現の幅を持っています。\n\nまた、デバイスとソフトさえ購入すれば、画材や紙を必要としないのもデジタルイラストの強みのひとつです。\n\n班員の仲には、大学に入ってからデジタルを、さらにはイラスト制作自体を始めた人が多く、初めてでも楽しめる環境になっています。\n\nイラスト班ではイラストを制作して発表することに加え、イベントでのイラスト集頒布や、他班のCDやゲームのイラスト提供などを行っています。\n",
    activities: {
      description: "ここにテキストを入力。\n",
      works: [
        {
          title: "作品例",
          href: "http://example.com",
        },
        {
          title: "作品例",
          href: "http://example.com",
        },
      ],
    },
    questions: [
      {
        title: "質問タイトル",
        answer: "ここにテキストを入力。\n",
      },
    ],
  },
  {
    slug: "3dcg",
    name: "3DCG",
    about:
      "3DCG班の活動には、個人でモデリング自体を楽しむ、企画に参加してサークルオリジナルのVtuberやゲームキャラクターなどのモデルの制作をする、3DCG動画に使うモデル作成をするなどがあります。\n\n3DCG班個人製作は半年に一度の最終発表に向けて活動しています。キャラクター、動画の背景、車、身の回りの物など各々の好きなものを作っています。\n\n企画に参加しての制作は、共同制作を通して行う一つのモデルへの複数人での作業も経験できるでしょう。\n\n完成したモデルをただ様々な角度から眺めるだけでももちろん楽しいですし、他の班と協力する企画に参加したりすれば自分のモデルをより堪能できます。\n\n頂点で表現するため観察眼が育てられます。週一回の定例会で初めての方に初心者講座を行う予定なので、全く触ったことがない人も大歓迎です。\n\n好きの気持ちがあれば細かく観察できるのでイラストを描いたことがない人でもモデルが作れます。3DCG班はおすすめです。時間をかけただけ良いものができあがります。\n\n同じことに興味のある同志は学科もそうですがサークルでもできるものです。みなさんの入部をお待ちしています。\n",
    activities: {
      description: "ここにテキストを入力。\n",
      works: [
        {
          title: "作品例",
          href: "http://example.com",
        },
        {
          title: "作品例",
          href: "http://example.com",
        },
      ],
    },
    questions: [
      {
        title: "質問タイトル",
        answer: "ここにテキストを入力。\n",
      },
    ],
  },
  {
    slug: "dtm",
    name: "DTM",
    about:
      "DTM班では、主にパソコンを使った音楽制作をしています。\n\nDTMとはDeskTop Musicの略で、一般にパソコンと電子機器を接続して演奏する音楽、またその制作行為のことを指します。\n\nDTMの良いところとして、楽器が無くても音楽を作ることができるため初心者でも入りやすいことがよく挙げられます。\n\n実際私たちDTM班の中でも大学に入ってから始めたという人が多く、大学の趣味として始めるのに非常におすすめだと思います！\n\nDTM班の主な活動として、企画への楽曲提供の他、下記のDTM班内で立ち上がる企画などがあります。\n",
    activities: {
      description: "ここにテキストを入力。\n",
      works: [
        {
          title: "作品例",
          href: "http://example.com",
        },
        {
          title: "作品例",
          href: "http://example.com",
        },
      ],
    },
    questions: [
      {
        title: "質問タイトル",
        answer: "ここにテキストを入力。\n",
      },
    ],
  },
  {
    slug: "movie",
    name: "Movie",
    about:
      "Movie班では、主に動画をつくる人が集まっています。\n\n詳しく言うと、動画編集から、MAD、モーショングラフィックス、3DCGなどいろいろな人がいろいろな映像を作っています。\n\n班の活動としては、企画を立ち上げてそれに沿って映像を作ったり、技術を共有したり、協力して1つの映像を作ったりしています。\n\nアナタもこの映像制作沼にちょっと足を踏み入れてみませんか...？\n",
    activities: {
      description: "ここにテキストを入力。\n",
      works: [
        {
          title: "作品例",
          href: "http://example.com",
        },
        {
          title: "作品例",
          href: "http://example.com",
        },
      ],
    },
    questions: [
      {
        title: "質問タイトル",
        answer: "ここにテキストを入力。\n",
      },
    ],
  },
  {
    slug: "vtuber",
    name: "VTuber",
    about: "ここにテキストを入力。\n",
    activities: {
      description: "ここにテキストを入力。\n",
      works: [
        {
          title: "作品例",
          href: "http://example.com",
        },
        {
          title: "作品例",
          href: "http://example.com",
        },
      ],
    },
    questions: [
      {
        title: "質問タイトル",
        answer: "ここにテキストを入力。\n",
      },
    ],
  },
  {
    slug: "writing",
    name: "文字書き",
    about: "ここにテキストを入力。\n",
    activities: {
      description: "ここにテキストを入力。\n",
      works: [
        {
          title: "作品例",
          href: "http://example.com",
        },
        {
          title: "作品例",
          href: "http://example.com",
        },
      ],
    },
    questions: [
      {
        title: "質問タイトル",
        answer: "ここにテキストを入力。\n",
      },
    ],
  },
];

export async function generateStaticParams() {
  return [
    {
      slug: "pg",
    },
    {
      slug: "2dcg",
    },
    {
      slug: "3dcg",
    },
    {
      slug: "dtm",
    },
    {
      slug: "movie",
    },
    {
      slug: "vtuber",
    },
    {
      slug: "writing",
    },
  ];
}

export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const team = _devData.filter(
    (item) => item.slug === slug || item.slug === slug.replace("new-", ""),
  )[0];

  return (
    <>
      <Header />

      <main className="xl:ml-[320px]">
        <Breadcrumb />

        <section className="bg-sky px-[16px] md:px-[32px] py-[64px] flex flex-col gap-y-[64px]">
          <div className="text-white border-l-[0.25rem] border-[#fff] pl-[1rem]">
            <h2 className="text-28-700 mb-[2rem]">{`${team.name}班とは？`}</h2>

            <p className="text-20-400">{team.about}</p>
          </div>
        </section>

        <section
          id="activities"
          className="bg-[#fff] px-[16px] md:px-[32px] py-[64px] flex flex-col gap-y-[64px]"
        >
          <div className="text-[#20020] border-l-[0.25rem] border-sky pl-[1rem]">
            <h2 className="text-28-700 mb-[2rem]">{`${team.name}班の主な活動`}</h2>

            <p className="text-20-400">{team.activities.description}</p>
          </div>

          {/* ダミー */}
          <ul className="grid md:grid-cols-2 xl:grid-cols-3 gap-[16px]">
            {team.activities.works.map((work, index) => (
              <li
                key={index}
                className="aspect-square bg-[#202020] text-digicre-white border-[2px] border-[#808080] rounded-[16px]"
              >
                {work.title}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-[#DFDFDF] px-[16px] md:px-[32px] py-[64px] flex flex-col gap-y-[64px]">
          <div className="text-[#202020] border-l-[0.25rem] border-[#202020] pl-[1rem]">
            <h2 className="text-28-700 mb-[2rem]">{`${team.name}班についてもっと詳しく！`}</h2>

            <p className="text-20-400">
              {`${team.name}班に寄せられる主な質問と回答をまとめました。`}
            </p>
          </div>

          <div className="flex flex-col gap-y-[16px]">
            {team.questions.map((question, index) => (
              <details
                name="faq"
                key={index}
                className="bg-white text-[#202020] border-[2px] border-[#808080] p-[16px] rounded-[16px]"
              >
                <summary className="text-20-700 list-none">
                  {question.title}
                </summary>

                <p className="mt-[16px]">{question.answer}</p>
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
