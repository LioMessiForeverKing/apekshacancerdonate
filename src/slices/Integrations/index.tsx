import Bounded from "@/components/Bounded";
import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import StarBackground from "./StarBackground";
import React from "react";

import { MdBloodtype, MdSick } from "react-icons/md"; //Health, Cancer
import { FaHandsHelping } from "react-icons/fa"; //Unity
import { FaHeartbeat } from "react-icons/fa"; // Hopeful
import { AiFillLike } from "react-icons/ai";  // Impactful
import { GiStrong } from "react-icons/gi"; // Empowering

import StylizedLogoMark from "./StylizedLogoMark";

import background from "./background.jpg";
/**
 * Props for `Integrations`.
 */
export type IntegrationsProps = SliceComponentProps<Content.IntegrationsSlice>;

/**
 * Component for "Integrations" Slices.
 */
import Image from "next/image";
import clsx from "clsx";

const Integrations = ({ slice }: IntegrationsProps): JSX.Element => {
  const icons = {
    health: <MdBloodtype />,
    unity: <FaHandsHelping />,
    hopeful: <FaHeartbeat />,
    cancer: <MdSick />,
    impactful: <AiFillLike />,
    empowering: <GiStrong />,
  }



  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative overflow-hidden"
    >
      <Image src={background} alt="" layout="fill" objectFit="cover" quality={90} />
      <StarBackground/>

    <div className="relative">

      <h2 className="max-w-2xl text-balance text-center text-5xl font-medium md:text-7xl mx-auto ">
      <PrismicText field={slice.primary.heading} />
    </h2>

    <div className="mx-auto mt-6 max-w-md text-balance text-center text-slate-300">
      <PrismicRichText field={slice.primary.body} />
    </div>

    <div className="mt-20 flex flex-col items-center md:flex-row">
    {slice.items.map((item, index) => (
    <React.Fragment key={index}>
      {index == Math.floor(slice.items.length / 2) && (
        <>
          <StylizedLogoMark />
          <div className="signal-line rotate-180 bg-gradient-to-t" />
        </>
      )}
      <div className="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-blue-50/30 bg-blue-50/25 p-3 text-3xl text-blue-100 opacity-40 md:text-4xl lg:text-5xl">
        {item.icon && icons[item.icon]}
      </div>
      {index !== slice.items.length - 1 &&(
      <div  className={clsx("signal-line", index >= Math.floor(slice.items.length / 2) ? "rotate-180" : "rotate-0")}/>

      )}
    </React.Fragment>
    ))}
    </div>

    
      </div>

    </Bounded>
  );
};

export default Integrations;
