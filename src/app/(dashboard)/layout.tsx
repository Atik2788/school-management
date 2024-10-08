import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "School Management",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-[8%] md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4">
        <Link href='/' className="flex items-center justify-center lg:justify-start gap-3">
          <img src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">School Nnew</span>
        </Link>
        <Menu/>
      </div>

      {/* Right */}
      <div className="w-[92%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#e3ecffb3] overflow-scroll flex flex-col">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
