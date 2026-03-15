import { NewHeader } from "@/components/NewHeader";
import Footer from "../../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NewHeader />
      <div className="body flex min-h-screen flex-col lg:ml-[25%]">
        {children}
        <Footer />
      </div>
    </>
  );
}
