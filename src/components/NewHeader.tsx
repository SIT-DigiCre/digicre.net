import { Icon } from "@iconify/react";
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
      <p className="border-l-[4px] border-[#00b0f0] pl-[16px] text-[1.75rem] font-bold">
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
              className="bg-[#404040] border-[2px] border-[#808080] p-[16px] flex gap-[16px] rounded-[16px] items-center"
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
    <header className="bg-[#202020] text-[#fff] min-inline-[320px] px-[16px] py-[64px] flex flex-col gap-y-[64px]">
      <DigicreLogo className="h-[64px] w-full text-white" />

      <Menu
        title="デジクリについて"
        entries={[
          {
            title: "ホーム",
            href: "/",
          },
          {
            title: "お知らせ",
            href: "/news/",
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
    </header>
  );
};
