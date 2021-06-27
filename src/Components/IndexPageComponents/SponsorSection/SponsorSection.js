import Image from "next/image";
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
    // <div className="flex justify-evenly place-items-center text-gray-200 space-y-5 p-7 text-justify container px-5 py-24 mx-auto">
    //   <div className="md:w-1/2 space-y-5">
    //     <h2 className="text-4xl font-semibold tracking-wider">Our Sponsors</h2>
    //     <div>
    //       <Image
    //         src="/Assets/Images/Sponsors/cn-logo-dark.png"
    //         alt="Coding Ninjas"
    //         className="object-contain"
    //         width={150}
    //         height={70}
    //       />
    //     </div>
    //     <p className="text-md">
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui duis
    //       fringilla id. Est mauris, sociis tincidunt aliquet pharetra, nunc.
    //       Tellus ipsum commodo ultricies ornare sociis porta consequat accumsan.
    //       Urna, in aliquam id fermentum ultrices mauris erat imperdiet a. Orci
    //       sit adipiscing tempus tellus adipiscing ultrices in at et. Vitae
    //       vulputate vulputate ornare eget tristique scelerisque ac, in. Nunc sem
    //       egestas at semper leo proin. Felis enim id donec interdum Vitae
    //       facilisis metus eget sed. Vitae mattis mi, egestas risus. Est
    //       accumsan, scelerisque sagittis aliquet. Nam luctus morbi pharetra cras
    //       turpis purus ut. Urna facilisis adipiscing viverra nibh turpis
    //       placerat duis mauris. Ac consequat ac nulla dui diam blandit risus,
    //       elementum, sed. At in pretium rutrum massa et justo. Vitae tortor
    //       turpis phasellus facilisi.
    //     </p>
    //   </div>
    //   <div className="hidden md:block">
    //     <Image
    //       src={"/Assets/Images/header-computer.svg"}
    //       width={450}
    //       height={450}
    //     />
    //   </div>
    // </div>
    <div className="my-20 space-y-7 md:px-16 lg:px-24">
      <div className="flex flex-col place-items-center space-y-7">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Platinum <span className="text-theme-primary">Sponsors</span>
        </h2>
        <div className="flex flex-wrap md:flex-nowrap place-items-center m-auto w-full justify-evenly ">
          {PlatinumSponsors.map((sponsor, key) => (
            <Card key={key} sponsor={sponsor} height={300} width={300} />
          ))}
        </div>
      </div>
      <div className="flex flex-col place-items-center space-y-7">
        <h2 className="text-4xl font-bold text-white">
          Gold <span className="text-theme-primary-500">Sponsors</span>
        </h2>
        <div className="flex flex-wrap md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center m-auto w-full justify-evenly">
          {GoldSponsors.map((sponsor, key) => (
            <Card key={key} sponsor={sponsor} height={200} width={200} />
          ))}
        </div>
      </div>
      <div className="flex flex-col place-items-center space-y-5">
        <h2 className="text-3xl font-bold text-white">
          Certificate <span className="text-theme-primary">Partner</span>
        </h2>
        <div className="flex flex-wrap md:flex-nowrap place-items-center m-auto w-full justify-evenly ">
          {CertificatePartner.map((partner, key) => (
            <Card key={key} sponsor={partner} height={100} width={300} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { SponsorSection };
