import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "~/utils/supabase/server";
import { Layout } from "./_components/layout";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Dashboard - Notes Buddy",
    template: `%s - Dashboard - Notes Buddy`,
  },
  description: "Notes Buddy: A powerful notes sharing website.",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const user = await supabase.auth.getUser();

  const layout = cookies().get("react-resizable-panels:layout");
  const collapsed = cookies().get("react-resizable-panels:collapsed");

  const defaultLayout =
    (layout ? JSON.parse(layout.value) : undefined) ?? false;
  const defaultCollapsed =
    (collapsed ? JSON.parse(collapsed.value) : undefined) ?? false;

  if (user.error ?? !user.data.user) redirect("/auth/signin");

  return (
    <main className="flex-1 bg-muted/30">
      <Layout
        defaultLayout={defaultLayout}
        defaultCollapsed={defaultCollapsed}
        navCollapsedSize={4}
        user={user}
      >
        {children}
      </Layout>
    </main>
  );
}
