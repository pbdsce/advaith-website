
import { Card } from "./Card";

const PlatinumSponsors = [
  { name: "Devfolio", image: "Devfolio.svg", link: "https://devfolio.co/" },
  {
    name: "Coding Ninjas",
    image: "coding-ninjas.svg",
    link: "https://codingninjas.com/",
  },
];

const GoldSponsors = [
  {
    name: "Polygon",
    image: "Polygon.svg",
    link: "https://polygon.technology/",
  },
  { name: "Portis", image: "Portis.svg", link: "https://www.portis.io/" },
  { name: "Tezos", image: "Tezos.svg", link: "https://tezos.com/" },
  { name: "Celo", image: "Celo.svg", link: "https://celo.org/" },
  { name: "Repl.it", image: "Repl.svg", link: "https://replit.com" },
  { name: "Taskade", image: "Taskade.svg", link: "https://www.taskade.com" },
  { name: "Egghead", image: "Egghead.svg", link: "https://egghead.io/" },
];

const CertificatePartner = [
  {
    name: "GiveMyCertificate",
    image: "GMC.png",
    link: "https://givemycertificate.com/",
  },
];

const SponsorSection = () => {
  return (
    <div id="sponsor-section" className="my-20 space-y-20 md:px-16 lg:px-24">
      <div className="flex flex-col place-items-center space-y-7">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Platinum <span className="text-theme-primary">Sponsors</span>
        </h2>
        <div className="px-10 grid grid-cols-2 gap-10 md:gap-20 place-items-center m-auto w-full justify-evenly ">
          {PlatinumSponsors.map((sponsor, key) => (
            <Card key={key} sponsor={sponsor} height={300} width={300} />
          ))}
        </div>
      </div>
      <div className="flex flex-col place-items-center space-y-7">
        <h2 className="text-4xl font-bold text-white">
          Gold <span className="text-theme-primary-500">Sponsors</span>
        </h2>
        <div className="px-10 md:py-10 grid grid-cols-4 gap-10 lg:gap-16 place-items-center m-auto w-full justify-evenly">
          {GoldSponsors.map((sponsor, key) => (
            <Card key={key} sponsor={sponsor} height={200} width={200} />
          ))}
        </div>
      </div>
      <div className="flex flex-col place-items-center space-y-5">
        <h2 className="text-3xl font-bold text-white">
          Certificate <span className="text-theme-primary">Partner</span>
        </h2>
        <div className="px-10 flex flex-wrap md:flex-nowrap place-items-center m-auto w-full justify-evenly ">
          {CertificatePartner.map((partner, key) => (
            <Card key={key} sponsor={partner} height={100} width={300} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { SponsorSection };
