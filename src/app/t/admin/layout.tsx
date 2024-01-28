import { Inter } from "next/font/google";

// STYLE: Gblobal Style
import "../../main.scss";

const inter = Inter({ subsets: ["latin"] });

// Bucks Sidebar components
import MySideBar from "./components/Sidebar";
import AdminHeader from "./components/Header";

export default function BucksDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body
      className={`${inter.className} h-screen min-h-screen max-h-screen bg-dashboard`}
    >
      <AdminLayout>
        <MySideBar />
        <AdminMainSection>{children}</AdminMainSection>
      </AdminLayout>
    </body>
  );
}

// Bucks Layout components
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen min-h-screen max-h-screen grid grid-cols-1 md:grid-cols-[250px_1fr] overflow-y-scroll">
      {children}
    </div>
  );
};

// Main Wrapper
const AdminMainSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="relative w-full h-screen no-scrollbar min-w-full max-w-full overflow-y-scroll">
      <AdminHeader />
      <main className="w-full max-w-full min-w-full p-6 text-white">
        {children}
      </main>
    </section>
  );
};