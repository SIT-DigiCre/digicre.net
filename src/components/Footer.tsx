export const Footer = () => {
  return (
    <footer className="bg-digicre-black text-white px-4 py-[2rlh] flex flex-col gap-y-[2rlh]">
      <p className="mx-auto">
        <small className="text-16-400">
          © {`2004-${new Date().getFullYear()}`} 芝浦工業大学 デジクリ
        </small>
      </p>
    </footer>
  );
};
