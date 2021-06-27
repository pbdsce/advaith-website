import Image from "next/image";
const SponsorImages = ({ Sponsors, className }) => {
  return (
    <div className={className}>
      {Sponsors.map((sponsor, key) => (
        <Image
          key={key}
          src={`/Assets/Images/Sponsors/${sponsor.ImgSrc}`}
          alt={sponsor.AltText}
          width={80}
          height={80}
          className="object-contain"
        />
      ))}
    </div>
  );
};

export { SponsorImages };
