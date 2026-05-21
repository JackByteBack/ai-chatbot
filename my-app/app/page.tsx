import type { ReactNode } from 'react';
import Layout from './layout';

interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps) => {
  return <Layout>{children}</Layout>;
};

export default Page;