import "./globals.css";
import Menu from "../components/Menu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 w-full min-h-screen">
      <Menu />
      <main className="p-4 md:p-12 col-span-1 md:col-span-3"> {children}</main>
    </div>
  );
}
