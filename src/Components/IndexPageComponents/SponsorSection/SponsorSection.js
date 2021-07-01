import { Card } from "./Card";

const PlatinumSponsors = [
  {
    name: "Devfolio",
    image: "Devfolio.svg",
    link: "https://devfolio.co/",
    height: 330,
    width: 330,
  },
  {
    name: "Coding Ninjas",
    image: "coding-ninjas.svg",
    link: "https://codingninjas.com/",
    height: 200,
    width: 200,
  },
];

const GoldSponsors = [
  {
    name: "Polygon",
    image: "Polygon.svg",
    link: "https://polygon.technology/",
    height: 200,
    width: 200,
  },
  {
    name: "Portis",
    image: "Portis.svg",
    link: "https://www.portis.io/",
    height: 200,
    width: 200,
  },
  {
    name: "Tezos",
    image: "Tezos.svg",
    link: "https://tezos.com/",
    height: 200,
    width: 200,
  },
  {
    name: "Celo",
    image: "Celo.svg",
    link: "https://celo.org/",
    height: 200,
    width: 200,
  },
  {
    name: "Repl.it",
    image: "Repl.svg",
    link: "https://replit.com",
    height: 200,
    width: 200,
  },
  {
    name: "Taskade",
    image: "Taskade.svg",
    link: "https://www.taskade.com",
    height: 200,
    width: 200,
  },
  {
    name: "Egghead",
    image: "Egghead.svg",
    link: "https://egghead.io/",
    height: 200,
    width: 200,
  },
  {
    name: "Streamyard",
    image: "StreamYard.svg",
    link: "https://streamyard.com",
    height: 200,
    width: 200,
  },
];

const CertificatePartner = [
  {
    name: "GiveMyCertificate",
    image: "GMC.png",
    link: "https://givemycertificate.com/",
    height: 200,
    width: 200,
  },
  {
    name: "AnonAddy",
    image: "AnonAddy.svg",
    link: "https://anonaddy.com",
    height: 150,
    width: 150,
  },
];
const SponsorSection = () => {
  return (
    <div id="sponsor-section" className="my-20 space-y-20 md:px-16 lg:px-24">
      <div className="flex flex-col place-items-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Platinum <span className="text-theme-primary">Sponsors</span>
        </h2>
        <div className="px-10 grid grid-cols-2 gap-10 md:gap-20 place-items-center m-auto w-full justify-evenly container max-w-3xl">
          {PlatinumSponsors.map((sponsor, key) => (
            <Card
              key={key}
              sponsor={sponsor}
              height={sponsor.height}
              width={sponsor.width}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col place-items-center space-y-7">
        <h2 className="text-3xl font-bold text-white">
          Gold <span className="text-theme-primary-500">Sponsors</span>
        </h2>
        <div className="px-10 md:pt-10 grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 place-items-center m-auto w-full justify-evenly">
          {GoldSponsors.map((sponsor, key) => (
            <Card
              key={key}
              sponsor={sponsor}
              height={sponsor.height}
              width={sponsor.width}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col place-items-center space-y-5 px-5">
        <h2 className="text-2xl font-bold text-white">
          Our <span className="text-theme-primary">Partners</span>
        </h2>
        <div className="px-18 grid grid-cols-2 gap-10 md:flex-nowrap place-items-center m-auto w-full justify-evenly container max-w-sm">
          {CertificatePartner.map((partner, key) => (
            <Card
              key={key}
              sponsor={partner}
              height={partner.height}
              width={partner.width}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { SponsorSection };
