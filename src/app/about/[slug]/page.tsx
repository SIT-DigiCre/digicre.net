import { Card, CardContainer, CardTextBox } from "@/components/Card";
import { FaqItem, FaqList } from "@/components/Faq";
import { FigureItem, FigureList } from "@/components/Figure";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DigicreLogo } from "@/components/Icon";
import { JoinUs } from "@/components/JoinUs";
import { Markdown } from "@/components/Markdown";
import type { Team } from "@/data/team";
import readYaml from "@/utilities/readYaml";
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

const teams = readYaml("./src/data/teams.yaml") as Team[];

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
          <Link href="/" className="mx-auto">
            <DigicreLogo className="aspect-176/48 w-full h-[2rlh] shrink-0 text-white" />
          </Link>

          <Card>
            <CardContainer>
              <CardTextBox>
                <h2 className="text-24-700">{`${team.name}とは？`}</h2>

                <Markdown content={team.about.content} />
              </CardTextBox>
            </CardContainer>
          </Card>

          <Card>
            <CardContainer>
              <CardTextBox>
                <h2 className="text-24-700">{`${team.name}の主な活動`}</h2>

                <Markdown content={team.activity.content} />
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
              <CardTextBox variant="dark">
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
                    <Markdown content={item.content} />
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
