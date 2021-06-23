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
    <div className="flex flex-col h-screen place-items-center p-10 space-y-10">
      <div className="flex flex-col place-items-center space-y-1">
        <Image
          src="/Assets/Images/advaith-logo.svg"
          width={180}
          height={50}
          className="object-contain"
        />
        <p className="text-theme-primary-600 text-sm">
          brought to you by ACM-W and Point Blank
        </p>
      </div>
      <div className="md:h-3/6">
        <Image
          src={"/Assets/Images/header-computer.svg"}
          width={300}
          height={300}
          className="object-fit"
        />
      </div>
      <div className="flex flex-col place-items-center">
        <p className="text-theme-primary-600 font-semibold text-md">
          Our Partners
        </p>
        <SponsorImages
          Sponsors={SponsorImageList}
          className="flex w-full space-x-10"
        />
      </div>
      <ScrollDownIcon className="animate-bounce" />
    </div>
  );
};

export { Header };
