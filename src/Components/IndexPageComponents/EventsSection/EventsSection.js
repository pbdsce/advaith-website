import { useState } from "react";
import { Card } from "./Card";
import { EventModal } from "../ScheduleTimelineSection/EventModal";

const EventDetails = [
  {
    date: "22-25 JULY 2021",
    time: "",
    eventName: "Capture the Flag",
    imgLink: "/Assets/Images/Icons/ctf.svg",
    eventTagline: "Try Harder",
    eventCaption:
      "A Cybersecurity challenge where hackers exploit vulnerabilities to find the flags hidden in an open arena.",
    eventDetails: [
      `It is a 3 day long Jeopardy-style CTF event, in which participants try to complete as many challenges as they can, completing a challenge earns them a flag that provides them points.`,
      `The participant with the most points at the end of the event will be the winner.`,
      `There will be an introductory session on CTFs to encourage newcomers towards Cybersecurity.`,
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
      `A theme-based technical writing event.`,
      `Participants have to design their ideas on a particular theme.`,
      `Participantes have to  submit design prototypes in Figma or XD files as PDFs.`,
      `After successful submission, a panel of judges will decide the top designer.`,
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
      `Brush up your problem solving skills and get ready for this ultimate coding competition, Coding Marathon brought to you by Coding Ninjas.`,
      `Code, Test, Optimize and ace the leaderboard.`,
      `Winners take home attractive prizes.`,
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
      `A week long of learning various technologies and writing. Get creative with your words as you write about the technologies that inspire you.`,
      `A panel of judges will go through your submissions and the winner gets exciting prizes as well as a featured blog on various platforms.`,
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
