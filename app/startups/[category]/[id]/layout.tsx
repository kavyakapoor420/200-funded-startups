// app/startups/[id]/layout.tsx   ← THIS IS A SERVER COMPONENT (no "use client")
import { startups }  from '../../../../data/data'


export const generateStaticParams = () => {
  return startups.map((startup) => ({
    id: startup.id,
  }));
};

export const dynamicParams = true;

export default function StartupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}