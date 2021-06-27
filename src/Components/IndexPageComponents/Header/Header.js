import Image from "next/image";
import { SponsorImages } from "./SponsorImages";
import { ScrollDownIcon } from "../../svg/svg";
const SponsorImageList = [
  {
    ImgSrc: "coding-ninjas.svg",
    AltText: "Coding Ninjas",
  },
  {
    ImgSrc: "devfolio.svg",
    AltText: "Devfolio",
  },
];

const Header = () => {
  return (
    <div className="flex flex-col h-screen place-items-center p-10 space-y-10">
      <div className="flex flex-col place-items-center w-full h-1/6 md:w-1/2">
        <Image
          src="/Assets/Images/header-logo.svg"
          priority="true"
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
      <div className="h-full m-auto flex place-items-center md:transform transition duration-300 ease-in-out md:hover:scale-110">
        <div
          className="apply-button"
          data-hackathon-slug="yeah"
          data-button-theme="light"
          style={{ height: "44px", width: "312px" }}
        ></div>
      </div>
      <div className="flex h-full">
        <div className="flex flex-col place-items-center mt-auto">
          <p className="text-theme-primary-550 text-md md:text-xl">
            Powered By
          </p>
          <SponsorImages Sponsors={SponsorImageList} className="flex w-full gap-10" />
        </div>
      </div>
      <div className="flex place-content-end h-full">
        <ScrollDownIcon className="flex m-auto animate-bounce" />
      </div>
    </div>
  );
};

export { Header };
