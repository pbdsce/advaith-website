import Image from "next/image";
const HostImagesList = [
  { imgLink: "/Assets/Images/PointBlank.svg", alt: "PointBlank" },
  { imgLink: "/Assets/Images/DSCE-logo.png", alt: "DSCE" },
  { imgLink: "/Assets/Images/ACM-W.png", alt: "ACM-W" },
];

const HostSection = () => {
  return (
    <div className="text-gray-300 flex flex-col place-items-center space-y-7">
      <h2 className="text-3xl font-bold tracking-wider">Hosted By</h2>
      <div className="flex flex-wrap w-full place-items-center justify-evenly">
        {HostImagesList.map((hostImage, key) => (
          <div key={key}>
            <Image src={hostImage.imgLink} width={200} height={200} alt={hostImage.alt}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export { HostSection };
