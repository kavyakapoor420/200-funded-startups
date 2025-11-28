// app/startups/[id]/page.tsx
import { startups } from '../../../data/data'
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

// This is REQUIRED in Next.js 15+
export const dynamicParams = true;

// Generate all paths at build time
export async function generateStaticParams() {
  return startups.map((startup) => ({
    id: startup.id,
  }));
}

// params is now a Promise → we must await it
export default async function StartupDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // This line fixes everything

  const startup = startups.find((s) => s.id === id);

  if (!startup) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#101010] text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <Link
          href="/startups"
          className="inline-flex items-center gap-2 text-[#d1d1d1] hover:text-white mb-8"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Directory
        </Link>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <div className="bg-gradient-to-br from-[#1a1a] to-[#161616] rounded-3xl p-8 border border-[#252525]">
              <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center">
                <Image
                  src={startup.logo}
                  alt={startup.name}
                  width={200}
                  height={200}
                  className="object-contain p-4"
                />
              </div>
              <h1 className="text-4xl font-bold text-center mb-4">{startup.name}</h1>
              <p className="text-center text-[#d1d1d1] text-lg">{startup.sector}</p>
            </div>
          </div>

          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <div className="grid grid-cols-2 gap-6 text-lg bg-[#161616]/50 rounded-2xl p-6 border border-[#252525]">
                <div>
                  <p className="text-[#888]">Total Funding</p>
                  <p className="text-3xl font-bold text-green-400">${startup.funding}M</p>
                </div>
                <div>
                  <p className="text-[#888]">Headquarters</p>
                  <p className="text-xl font-medium">{startup.hq}</p>
                </div>
                <div>
                  <p className="text-[#888]">Founded</p>
                  <p className="text-xl font-medium">{startup.founded}</p>
                </div>
                <div>
                  <p className="text-[#888]">Website</p>
                  <a
                    href={startup.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline flex items-center gap-1"
                  >
                    Visit <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">About</h2>
              <p className="text-lg leading-relaxed text-[#d1d1d1] bg-[#161616]/50 rounded-2xl p-6 border border-[#252525]">
                {startup.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}