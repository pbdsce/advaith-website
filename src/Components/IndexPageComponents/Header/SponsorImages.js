
const SponsorImages = ({ Sponsors, className }) => {
  return (
    <div className={className}>
      {Sponsors.map((sponsor, key) => (
        <img
          key={key}
          src={`/Assets/Images/Sponsors/${sponsor.ImgSrc}`}
          alt={sponsor.AltText}
          width={sponsor.width}
          height={sponsor.height}
          className="object-contain"
        />
      ))}
    </div>
  );
};

export { SponsorImages };
