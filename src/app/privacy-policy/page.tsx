import { Card, CardContainer, CardTextBox } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import type { Metadata } from "next";
import Link from "next/link";

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
  return (
    <>
      <Header />

      <main className="bg-digicre-skyblue">
        <div className="flex py-16 px-8 flex-col gap-16 max-w-240 min-w-[320px] mx-auto">
          <Card>
            <CardContainer>
              <CardTextBox>
                <h1 className="text-24-700">プライバシーポリシー</h1>
              </CardTextBox>

              <section>
                <h2 className="text-20-700 mb-[1rlh]">
                  Google Analyticsについて
                </h2>

                <p className="mb-[1rlh]">
                  本サイトでは、アクセス状況の把握およびサイトの品質向上を目的としてGoogle
                  Analyticsを利用しています。
                </p>

                <p className="mb-[1rlh]">
                  Google
                  Analyticsでは、Cookieを用いて本サイトへのアクセス状況に関するデータを収集します。これらのデータは、Google社のプライバシーポリシーに則って取り扱われます。詳しくは「
                  <Link
                    href="https://marketingplatform.google.com/about/analytics/terms/jp/"
                    target="_blank"
                  >
                    Google アナリティクス利用規約
                  </Link>
                  」をご覧ください。
                </p>

                <p>
                  なお、Google
                  Analyticsによるデータ収集をオプトアウトする方法に関しては「
                  <Link
                    href="https://tools.google.com/dlpage/gaoptout?hl=ja"
                    target="_blank"
                  >
                    Google アナリティクス オプトアウト アドオン
                  </Link>
                  」をご参照ください。
                </p>
              </section>
            </CardContainer>
          </Card>
        </div>
      </main>

      <Footer />
    </>
  );
}
