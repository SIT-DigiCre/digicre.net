import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContainer, CardTextBox } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { DigicreLogo } from "@/components/Icon";
import { Markdown } from "@/components/Markdown";
import readYaml from "@/utilities/readYaml";

const YAML_PATH = "./src/data/privacy-policy.yaml" as const;

export const metadata: Metadata = {
  title: "プライバシーポリシー - 芝浦工業大学 デジクリ",
  openGraph: {
    type: "website",
    url: "https://digicre.net/privacy-policy/",
    title: "プライバシーポリシー",
    siteName: "芝浦工業大学 デジクリ",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "デジクリ Digital Creation Circle",
      },
    ],
  },
  alternates: {
    canonical: "https://digicre.net/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
  const page = readYaml(YAML_PATH);

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
                <h1 className="text-24-700">{page.title}</h1>
              </CardTextBox>

              <Markdown content={page.content} />
            </CardContainer>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}
