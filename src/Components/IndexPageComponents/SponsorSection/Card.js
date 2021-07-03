
const Card = ({ sponsor, height = 100, width = 100 }) => {
  return (
    <div>
      <a href={sponsor.link} target="_blank">
        <img
          src={`/Assets/Images/Sponsors/${sponsor.image}`}
          alt={sponsor.name}
          height={height}
          width={width}
          className=""
        />
      </a>
    </div>
  );
};

export { Card };
