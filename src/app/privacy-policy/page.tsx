import { Card, CardContainer, CardTextBox } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Markdown } from "@/components/Markdown";
import readYaml from "@/utilities/readYaml";
import type { Metadata } from "next";

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

const pageContent = readYaml("./src/data/privacy-policy.yaml");

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <main className="bg-digicre-skyblue">
        <div className="flex py-16 px-8 flex-col gap-16 max-w-240 min-w-[320px] mx-auto">
          <Card>
            <CardContainer>
              <CardTextBox>
                <h1 className="text-24-700">{pageContent.title}</h1>
              </CardTextBox>

              <Markdown content={pageContent.content} />
            </CardContainer>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}
