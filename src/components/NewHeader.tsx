import { Icon } from "@iconify/react";
import Link from "next/link";
import { DigicreLogo } from "./Icon";

interface MenuEntry {
  href: string;
  title: string;
}

interface MenuProps {
  title: string;
  entries: MenuEntry[];
}

const Menu: React.FC<MenuProps> = ({ title, entries }) => {
  const isExternalLink = (href: string): boolean => {
    return !href.startsWith("/");
  };

  return (
    <nav className="flex flex-col gap-y-[32px]">
      <p className="border-l-[4px] border-[#00b0f0] pl-[16px] text-[#fff] text-[1.75rem] font-bold">
        {title}
      </p>

      <ul className="flex flex-col gap-y-[16px]">
        {entries.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              target={isExternalLink(item.href) ? "_blank" : undefined}
              rel={
                isExternalLink(item.href) ? "noopener noreferrer" : undefined
              }
              className="bg-[#404040] border-[2px] border-[#808080] text-[#fff] p-[16px] flex gap-[16px] rounded-[16px] items-center"
            >
              <span className="w-full font-bold text-[1.25rem]">
                {item.title}
              </span>

              <Icon
                icon={
                  isExternalLink(item.href)
                    ? "material-symbols:open-in-new-rounded"
                    : "material-symbols:chevron-right-rounded"
                }
                className="text-[2rem]"
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const NewHeader = () => {
  return (
    <header>
      <input type="checkbox" id="header-toggle" className="peer hidden" />

      <label
        htmlFor="header-toggle"
        className="peer-checked:hidden xl:hidden fixed top-0 left-0 z-1 bg-[#00b0f0] p-[16px] rounded-br-[16px] shadow-[2px_2px_8px_0_rgba(32_32_32_/_75%)]"
      >
        <Icon
          icon="material-symbols:menu-rounded"
          className="w-[32px] h-[32px] text-[#fff]"
        />
      </label>

      <label
        htmlFor="header-toggle"
        className="peer-not-checked:hidden xl:hidden fixed top-0 left-0 z-1 bg-[#FF4B00] p-[16px] rounded-br-[16px] shadow-[2px_2px_8px_0_rgba(32_32_32_/_75%)]"
      >
        <Icon
          icon="material-symbols:close-rounded"
          className="w-[32px] h-[32px] text-[#fff]"
        />
      </label>

      <div className="max-xl:peer-not-checked:hidden fixed top-0 left-0 z-0 overscroll-none bg-[#202020] min-inline-[320px] h-full overflow-y-auto consider-scrollbar px-[16px] py-[64px] flex flex-col gap-y-[64px]">
        <Link href="/" className="mx-auto">
          <DigicreLogo className="aspect-[176_/_48] w-full h-[64px] shrink-0 text-[#fff]" />
        </Link>

        <Menu
          title="デジクリについて"
          entries={[
            {
              title: "ホーム",
              href: "/",
            },
            {
              title: "主な活動",
              href: "/#activities",
            },
            {
              title: "班紹介",
              href: "/#teams",
            },
            {
              title: "プライバシーポリシー",
              href: "/privacy-policy/",
            },
            {
              title: "入部受付フォーム",
              href: "https://forms.gle/cY25Kc6fssqv2tZz9",
            },
            {
              title: "お問い合わせ",
              href: "mailto:contact@digicre.net",
            },
          ]}
        ></Menu>

        <Menu
          title="公式アカウント"
          entries={[
            {
              title: "X（Twitter）",
              href: "https://x.com/sitdigicre",
            },
            {
              title: "Instagram",
              href: "https://www.instagram.com/digicre.shibaura/",
            },
            {
              title: "YouTube",
              href: "https://www.youtube.com/@sitdigicre",
            },
            {
              title: "GitHub",
              href: "https://github.com/SIT-DigiCre",
            },
          ]}
        ></Menu>

        <Menu
          title="関連サイト"
          entries={[
            {
              title: "芝浦工業大学",
              href: "https://www.shibaura-it.ac.jp/",
            },
          ]}
        ></Menu>

        <Menu
          title="デジクリ部員向け"
          entries={[
            {
              title: "デジコア",
              href: "https://core3.digicre.net/",
            },
          ]}
        ></Menu>
      </div>
    </header>
  );
};
