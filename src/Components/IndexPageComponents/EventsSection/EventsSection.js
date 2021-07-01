import { useState } from "react";
import { Card } from "./Card";
import { EventModal } from "../ScheduleTimelineSection/EventModal";

const EventDetails = [
  {
    date: "22-25 JULY 2021",
    time: "",
    eventName: "Capture the Flag",
    imgLink: "/Assets/Images/Icons/ctf.svg",
    eventTagline: "TRY HARDER!!",
    eventCaption:
      "A Cybersecurity challenge where hackers exploit vulnerabilities to find the flags hidden in an open arena.",
    eventDetails: [
      `In this challenge, you will be asked to find a specific piece of text/code that may be hidden on the server or behind a webpage.`,
      `This goal is called the flag, Hence the name!`,
      `This event will test your coding as well as your mental and logical abilities.`,
      `The ticking clock and the rush of the competition are bound to make it really exhilarating.`,
    ],
  },
  {
    date: "23-26 JULY 2021",
    time: "",
    eventName: "Design Wars",
    imgLink: "/Assets/Images/Icons/design.svg",
    eventTagline: "Building a world with good design",
    eventCaption:
      "Students make use of their creativity and UI/UX skills to create amazing user-friendly designs for their projects.",
    eventDetails: [
      `This is where creativity and functionality join forces.`,
      `A product with a great UX (user experience) cannot have a poor UI (user interface).`,
      `Here is the chance to use your technical knowledge and skills of design to make a website that creates an intuitive experience that doesn't require the user to think too much!`,
      `Each team can consist of 2 to 4 members.`,
      `The members will have to work on the design of interfaces of the given problem statement.`,
      `They can submit design prototypes in Figma or XD files as PDFs.`,
    ],
  },
  {
    date: "24 JULY 2021",
    time: "",
    eventName: "Coding Marathon",
    imgLink: "/Assets/Images/Icons/coding.svg",
    eventTagline: "Think. Code. Compete. Win",
    eventCaption:
      "A 3-hour long coding competition event that will be conducted on the CodeZen platform.",
    eventDetails: [
      `This is a cross swords between your skill sets and the timelines.`,
      `Showcase your skill sets with the best solutions while challenging the time limits.`,
      `Ready to take up this challenge?`,
      `Come along, and join CodeCombat.`,
      `A set of questions will be provided along with a deadline for each. Right submissions get points and wrong ones get a penalty.`,
      `People with the most solutions and the least penalty wins!`,
    ],
  },
  {
    date: "20-26 JULY 2021",
    time: "",
    eventName: "Technical Writing",
    imgLink: "/Assets/Images/Icons/technicalwriting.svg",
    eventTagline: "Code might break, Words stay forever!",
    eventCaption: "Code might break, Words stay forever!",
    eventDetails: [
      `Gear up - meet your contenders.`,
      `Pack your exploits and come compete about something you can't buy - your spoils of war.`,
      `Get creative with your words as you write about the technologies that surround you, inventions that inspire you.`,
      `Technical Writing invites you to share your creativity and knowledge to keep us motivated and going.`,
      `Use this opportunity to unload your backpack of knowledge and experience and find like-minded people all in one go.`,
      `We eagerly await for you to join us, so here's your chance to tell us all about it in your article.`,
      `Selected ones will be officially published on the DSCE ACM-W's medium as well as Point Blank's forum/blog and numerous social media platforms.`,
    ],
  },
];

const EventsSection = () => {
  const [isEventModal, setEventModal] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const handleModalOpen = (key) => {
    setCurrentCard(key);
    setEventModal(true);
  };
  return (
    <>
      {isEventModal && (
        <EventModal
          cardDetails={EventDetails[currentCard]}
          setEventModal={setEventModal}
        />
      )}
      <div
        id="events-section"
        className="container flex flex-col place-items-center m-auto justify-evenly w-full space-y-10 py-10 my-10 md:my-20"
      >
        <div className="flex flex-col place-items-center space-y-2">
          <h3 className="text-4xl font-semibold text-white">
            More <span className="text-theme-primary-500">Events</span>
          </h3>
          <p className="text-theme-primary-300 font-semibold text-sm">
            DSI exclusive events
          </p>
        </div>
        <div className="flex flex-wrap place-items-center w-full justify-evenly gap-7">
          {EventDetails.map((event, key) => (
            <Card
              event={event}
              key={key}
              dataKey={key}
              handleModalOpen={handleModalOpen}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export { EventsSection };
