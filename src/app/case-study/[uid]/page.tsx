import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrismicText, SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import Bounded from "@/components/Bounded";
import StarGrid from "@/components/StarGrid";
import { PrismicNextImage } from "@prismicio/next";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("case_study", params.uid)
    .catch(() => notFound());

    return (
        <Bounded as="article" className="mt-16">
          <div className="relative grid place-items-center text-center h-screen w-screen"> {/* Added h-screen and w-screen */}
              <div className="absolute inset-0 z-0"> {/* Added a wrapper div with absolute and inset-0 */}
                  <StarGrid />
              </div>
              <h1 className="text-7xl font-medium relative z-10">
                  <PrismicText field={page.data.company} />
                  <p className="text-lg text-yellow-500">Case Study</p>
              </h1>
              <p className="mb-4 mt-8 max-w-xl text-lg text-slate-300 relative z-10">
                  <PrismicText field={page.data.description} />
              </p>
              <PrismicNextImage field={page.data.logo_image} quality={100} className="rounded-lg z-10"/>
          </div>
          <SliceZone slices={page.data.slices} components={components} />
        </Bounded>
      );            
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("case_study", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("case_study");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
