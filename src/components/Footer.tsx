export const Footer = () => {
  return (
    <footer className="bg-[#202020] text-[#fff] px-[16px] py-[64px] flex flex-col gap-y-[64px]">
      <small className=" text-16-400 mx-auto">
        © {`2004-${new Date().getFullYear()}`} 芝浦工業大学 デジクリ
      </small>
    </footer>
  );
};
