import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '~/app/dashboard/_components/header';
import { redirect } from 'next/navigation';
import { cn } from '@acme/ui';

import { createClient } from "~/utils/supabase/server";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: {
    default: 'Dashboard - Notes Buddy',
    template: `%s - Dashboard - Notes Buddy`
  },
  description: 'Notes Buddy: A powerful notes sharing website.'
};

export default async function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  
  if (user.error ?? !user.data.user) redirect('/auth/login');

  return (
    <div
      className={cn(
        'flex min-h-[100dvh] flex-col font-dashboard',
        inter.variable
      )}
    >
      <Header user={user} />
      <main className="mt-16 flex-1 bg-muted/30">{children}</main>
    </div>
  );
}