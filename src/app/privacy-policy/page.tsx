import { Footer } from "@/components/Footer";
import { NewHeader } from "@/components/NewHeader";
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
      <NewHeader />

      <main className="xl:ml-[320px]">
        <div className="bg-digicre-white flex flex-col px-[16px] md:px-[32px] py-[64px] gap-y-[64px] pt-[96px]">
          <ol className="border-l-[0.25rem] border-digicre-skyblue pl-[1rem] flex gap-x-[1rem]">
            {[
              { title: "芝浦工業大学 デジクリ", href: "/" },
              { title: "プライバシーポリシー", href: "/privacy-policy/" },
            ].map((item, index) => (
              <li key={index} className="text-16-400">
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-digicre-skyblue text-digicre-white flex flex-col px-[16px] md:px-[32px] py-[64px] gap-y-[64px]">
          <div className="text-white border-l-[0.25rem] border-[#fff] pl-[1rem]">
            <h1 className="text-28-700">プライバシーポリシー</h1>
          </div>
        </div>

        <article className="bg-digicre-white flex flex-col px-[16px] md:px-[32px] py-[64px] gap-y-[64px]">
          <div>
            <h2 className="text-20-700 mb-[2rem]">Google Analyticsについて</h2>

            <p className="text-16-400">
              本サイトでは、アクセス状況の把握およびサイトの品質向上を目的としてGoogle
              Analyticsを利用しています。
            </p>

            <p className="text-16-400">
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

            <p className="text-16-400">
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
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
