import { Icon } from "@iconify/react";
import { LinkButton } from "./LinkButton";

interface MenuItem {
  href: string;
  title: string;
}

interface MenuProps {
  title: string;
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ title, items }) => {
  return (
    <nav className="flex flex-col gap-y-[1rlh]">
      <h4 className="border-l-4 border-digicre-skyblue pl-4 text-digicre-white text-24-700">
        {title}
      </h4>

      <ul className="flex flex-col gap-y-[0.5rlh]">
        {items.map((item, index) => (
          <li key={index}>
            <LinkButton variant="dark" href={item.href}>
              {item.title}
            </LinkButton>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const Header = () => {
  return (
    <header>
      <input type="checkbox" id="header-toggle" className="peer hidden" />

      <label
        htmlFor="header-toggle"
        className="peer-checked:hidden xl:hidden fixed top-0 left-0 z-1 bg-[#00b0f0] p-[16px] rounded-br-[16px] shadow-[2px_2px_8px_0_rgba(32_32_32/75%)]"
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

      <div className="max-xl:peer-not-checked:hidden fixed top-0 left-0 z-2 overscroll-none bg-[#202020] min-inline-[320px] h-full overflow-y-auto consider-scrollbar px-4 py-[2rlh] flex flex-col gap-y-[2rlh]">
        <Menu
          title="デジクリについて"
          items={[
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
          items={[
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
          items={[
            {
              title: "芝浦工業大学",
              href: "https://www.shibaura-it.ac.jp/",
            },
          ]}
        ></Menu>

        <Menu
          title="デジクリ部員向け"
          items={[
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
