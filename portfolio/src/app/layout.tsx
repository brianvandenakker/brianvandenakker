import "./globals.css";
import Menu from "../components/Menu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full min-h-screen">
      <Menu />
      <main className="p-4 md:p-12 "> {children}</main>
    </div>
  );
}
