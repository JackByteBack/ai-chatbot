import type { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
      </Head>
      <main>{children}</main>
    </>
  );
};

export default Layout;