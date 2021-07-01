import { useState } from "react";
import { EventModal } from "./EventModal";

const EventDetails = [
  {
    date: "20-26 JULY 2021",
    time: "",
    eventName: "Yet Another Hackathon",
    imgLink: "/Assets/Images/Icons/hackathon.svg",
    eventTagline: "Create.collaborate.compete ",
    eventCaption:
      "Our star event, a hackathon where students across India come together, network and build the projects that they always wanted to have.",
    eventDetails: [
      `Join the Hackfest, communicate, collaborate and use real tech to solve problems and build sustainable solutions.`,
      ` Don’t just create but also implement!`,
      `Each team can consist of 2-4 people.`,
      `The Development comprises your entire coded project.`,
      `And the Submission bit must include the presentation of the working project and GitHub link of the project, deployed project link being optional.`,
      `The included tracks can be social inclusion, passion track, and the last one could be climate change or the current pandemic situation and ways to handle it in an exceptional way.`,
    ],
  },
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

const ScheduleTimelineSection = () => {
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
        id="schedule-section"
        className="container px-3 py-10 flex flex-col place-items-center w-full m-auto text-gray-200 space-y-10"
      >
        <h2 className="text-4xl font-semibold tracking-wider">
          Our <span className="text-theme-primary-500">Schedule</span>
        </h2>
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 max-w-4xl">
          {EventDetails.map((event, key) =>
            key % 2 == 0 ? (
              <div
                className="flex flex-row-reverse md:contents "
                key={key}
                id="left-timeline-element"
              >
                <div className="bg-theme-bg shadow-md col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto space-y-2">
                  <p className="text-gray-200 text-md">
                    {event.date} {event.time}
                  </p>
                  <h3 className="font-semibold text-2xl mb-1">
                    {event.eventName}
                  </h3>
                  <p className="leading-snug text-justify ">
                    {event.eventTagline}
                  </p>
                  <button
                    className="focus:outline-none"
                    onClick={() => {
                      handleModalOpen(key);
                    }}
                  >
                    <p className="py-1 text-theme-primary-500">
                      Read More &rarr;
                    </p>
                  </button>
                </div>
                <div className="bg-theme-cardcol-start-5 col-end-6 md:mx-auto relative mr-10">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-theme-primary-600 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-theme-primary-300 shadow"></div>
                </div>
              </div>
            ) : (
              <div
                className="flex md:contents"
                key={key}
                id="right-timeline-element"
              >
                <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-theme-primary-600 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-theme-primary-500 shadow"></div>
                </div>
                <div className="bg-theme-bg shadow-md col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto">
                  <p>
                    {event.date} {event.time}
                  </p>
                  <h3 className="font-semibold text-2xl mb-1">
                    {event.eventName}
                  </h3>
                  <p className="leading-tight text-justify">
                    {event.eventTagline}
                  </p>
                  <button
                    className="focus:outline-none"
                    onClick={() => {
                      handleModalOpen(key);
                    }}
                  >
                    <p className="py-1 text-theme-primary-500">
                      Read More &rarr;
                    </p>
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export { ScheduleTimelineSection };
