import { Card, CardContainer, CardTextBox } from "@/components/Card";
import { FaqItem, FaqList } from "@/components/Faq";
import { FigureItem, FigureList } from "@/components/Figure";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JoinUs } from "@/components/JoinUs";
import type { Team } from "@/data/team";
import parse from "html-react-parser";
import type { Metadata } from "next";
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
      <main className="bg-digicre-skyblue">
        <div className="flex py-16 px-8 flex-col gap-16 max-w-240 min-w-[320px] mx-auto">
          <Card>
            <CardContainer>
              <CardTextBox>
                <h2 className="text-24-700">{`${team.name}とは？`}</h2>

                <div>{parse(team.about.content)}</div>
              </CardTextBox>
            </CardContainer>
          </Card>

          <Card>
            <CardContainer>
              <CardTextBox>
                <h2 className="text-24-700">{`${team.name}の主な活動`}</h2>

                <div>{parse(team.activity.content)}</div>
              </CardTextBox>

              <FigureList>
                {team.activity.works.map((item, index) => (
                  <FigureItem
                    image={item.image}
                    title={item.title}
                    key={index}
                  />
                ))}
              </FigureList>
            </CardContainer>
          </Card>

          <Card variant="dark">
            <CardContainer>
              <CardTextBox>
                <h2 className="text-24-700">{`${team.name}について詳しく！`}</h2>

                <div>
                  <p>
                    {`${team.name}に寄せられる主な質問と回答をまとめました。`}
                  </p>
                </div>
              </CardTextBox>

              <FaqList>
                {team.learn_more.map((item, index) => (
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
