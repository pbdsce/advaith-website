import Image from "next/image";
import { SponsorImages } from "./SponsorImages";
import { ScrollDownIcon } from "../../svg/svg";
const SponsorImageList = [
  {
    ImgSrc: "/Assets/Images/Sponsors/cn-logo-dark.png",
    AltText: "Coding Ninjas",
  },
];

const Header = () => {
  return (
    <div className="flex flex-col h-screen place-items-center lg:bg-opacity-80 p-10 space-y-10">
      <div className="flex flex-col place-items-center w-full h-1/6 md:w-1/2">
        <Image
          src="/Assets/Images/header-logo.svg"
          width={400}
          height={150}
          layout="intrinsic"
          alt="advaith-logo"
          className="object-contain"
        />
        <p className="text-theme-primary-550 text-sm md:text-lg">
          brought to you by ACM-W and Point Blank
        </p>
      </div>
      <p className="text-theme-primary-300 md:max-w-sm text-center">
        A week long technical fest with plethora of events : Hackathon,
        Ideathon, DesignWars etc
      </p>
      <div className="flex h-full">
        <div className="flex flex-col place-items-center mt-auto">
          <p className="text-theme-primary-550 text-md md:text-xl">
            Our Partners
          </p>
          <SponsorImages Sponsors={SponsorImageList} className="flex" />
        </div>
      </div>
      <div className="flex place-content-end h-full">
        <ScrollDownIcon className="flex m-auto animate-bounce" />
      </div>
    </div>
  );
};

export { Header };
