import { FigureItem, FigureList } from "@/components/Figure";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DigicreLogo } from "@/components/Icon";
import { JoinUs } from "@/components/JoinUs";
import parse from "html-react-parser";
import type { Metadata } from "next";
import { readFileSync } from "node:fs";
import YAML from "yaml";
import { Card, CardContainer, CardTextBox } from "../components/Card";
import { FaqItem, FaqList } from "../components/Faq";
import YouTube from "../components/YouTube";

const rawPageContent = readFileSync("./src/data/home.yaml", "utf-8");
const pageContent = YAML.parse(rawPageContent) as PageContent;

export const metadata: Metadata = {
  alternates: {
    canonical: "https://digicre.net/",
  },
};

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

export default function Home() {
  return (
    <>
      <Header />

      <main className="bg-digicre-skyblue">
        <div className="flex py-16 px-8 flex-col gap-16 max-w-240 min-w-[320px] mx-auto">
          <DigicreLogo className="aspect-176/48 w-full h-[2rlh] shrink-0 text-white" />

          <Card id="about-us">
            <YouTube videoId="vM_Dmc5WLxs" />

            <CardContainer>
              <CardTextBox>
                <h2 className="text-24-700">デジクリとは？</h2>

                <div>{parse(pageContent.about.content)}</div>
              </CardTextBox>
            </CardContainer>
          </Card>

          <Card variant="dark" id="news">
            <CardContainer>
              <CardTextBox>
                <h2 className="text-24-700">お知らせ</h2>

                <div></div>
              </CardTextBox>
            </CardContainer>
          </Card>

          <Card id="activities">
            <CardContainer>
              <CardTextBox>
                <h2 className="text-24-700">主な活動</h2>

                <div>{parse(pageContent.activity.content)}</div>
              </CardTextBox>

              <FigureList>
                {pageContent.activity.examples.map((item, index) => (
                  <FigureItem
                    image={item.image}
                    title={item.title}
                    key={index}
                  />
                ))}
              </FigureList>
            </CardContainer>
          </Card>

          <Card id="teams">
            <CardContainer>
              <CardTextBox>
                <h2 className="text-24-700">班紹介</h2>

                <div>{parse(pageContent.team.content)}</div>
              </CardTextBox>

              <FigureList>
                {pageContent.team.teams.map((item, index) => (
                  <FigureItem
                    image={item.image}
                    title={item.title}
                    href={item.href}
                    key={index}
                  />
                ))}
              </FigureList>
            </CardContainer>
          </Card>

          <Card variant="dark" id="faq">
            <CardContainer>
              <CardTextBox>
                <h2 className="text-24-700">よくある質問</h2>

                <div>
                  <p>
                    入部を希望される方から受ける主な質問と回答をまとめました。
                  </p>
                </div>
              </CardTextBox>

              <FaqList>
                {pageContent.learn_more.map((item, index) => (
                  <FaqItem question={item.title} key={index}>
                    {parse(item.content)}
                  </FaqItem>
                ))}
              </FaqList>
            </CardContainer>
          </Card>

          <JoinUs />
        </div>
      </main>

      <Footer />
    </>
  );
}
