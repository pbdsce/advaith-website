import Image from "next/image";
const HostImagesList = [
  { imgLink: "/Assets/Images/DSCE-logo.png", alt: "DSCE" },
  { imgLink: "/Assets/Images/DSCE-logo.png", alt: "DSCE" },
];

const HostSection = () => {
  return (
    <div className="text-gray-300 flex flex-col place-items-center">
      <h2 className="text-3xl font-bold tracking-wider">Hosted By</h2>
      <div className="flex flex-wrap place-items-center gap-2">
        {HostImagesList.map((hostImage, key) => (
          <div key={key}>
            <Image src={hostImage.imgLink} width={100} height={100} alt={hostImage.alt}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export { HostSection };
