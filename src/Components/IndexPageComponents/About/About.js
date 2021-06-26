import Image from "next/image";

const About = () => {
  return (
    <div className="flex justify-evenly place-items-center text-gray-200 space-y-5 p-7 text-justify container px-5 py-10 mx-auto">
      <div className="md:w-1/2 space-y-5">
        <div className="flex flex-col justify-start space-y-2">
          <h2 className="text-4xl font-semibold tracking-wider">YeAH</h2>
          <h4 className="text-2xl text-theme-primary-500 font-semibold">
            Yet Another Hackathon
          </h4>
        </div>
        <p className="md:text-lg">
          <b>Date :</b> 20-26 July 2021<br></br>
          Our star event, a hackathon where students across India come together, network, and build the projects that they always wanted to have.<br></br>
          The event strives to encourage participants to make an active impact in their community through innovation. Our goal is to create an environment for students to network, learn, develop, and create amongst each other. By providing a safe, supportive, and collaborative space where participants of all skill levels are inspired to “hack,” our mission of making an impact is accomplished.

          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dui duis
          fringilla id. Est mauris, sociis tincidunt aliquet pharetra, nunc.
          Tellus ipsum commodo ultricies ornare sociis porta consequat accumsan.
          Urna, in aliquam id fermentum ultrices mauris erat imperdiet a. Orci
          sit adipiscing tempus tellus adipiscing ultrices in at et. Vitae
          vulputate vulputate ornare eget tristique scelerisque ac, in. Nunc sem
          egestas at semper leo proin. Felis enim id donec interdum Vitae
          facilisis metus eget sed. Vitae mattis mi, egestas risus. Est
          accumsan, scelerisque sagittis aliquet. Nam luctus morbi pharetra cras
          turpis purus ut. Urna facilisis adipiscing viverra nibh turpis
          placerat duis mauris. Ac consequat ac nulla dui diam blandit risus,
          elementum, sed. At in pretium rutrum massa et justo. Vitae tortor
          turpis phasellus facilisi. */}
        </p>
      </div>
      <div className="hidden md:block">
        <Image src={"/Assets/Images/Hackathon.svg"} width={450} height={450} alt="Hackthon-Logo" />
      </div>
    </div>
  );
};

export { About };
