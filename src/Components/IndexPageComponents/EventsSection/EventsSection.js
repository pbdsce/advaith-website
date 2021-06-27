import { Card } from "./Card";
const EventDetails = [
  {
    date: "20-26 JULY 2021",
    time: "00:00 pm",
    eventName: "Yet Another Hackathon",
    eventDesc:
      "Our star event, a hackathon where students across India come together, network and build the projects that they always wanted to have.",
  },
  {
    date: "22-25 JULY 2021",
    time: "00:00 pm",
    eventName: "Capture the Flag",
    eventDesc: "A Cybersecurity challenge where hackers exploit vulnerabilities to find the flags hidden in an open arena.",
  },
  {
    date: "23-26 JULY 2021",
    time: "00:00 pm",
    eventName: "Design Wars",
    eventDesc: "Students make use of their creativity and UI/UX skills to create amazing user-friendly designs for their projects.",
  },
  {
    date: "24 JULY 2021",
    time: "00:00 pm",
    eventName: "Coding Marathon",
    eventDesc: "A 3-hour long coding competition event that will be conducted on the CodeZen platform.",
  },
];

const EventsSection = () => {
  return (
    <div className="container flex flex-col place-items-center m-auto justify-evenly w-full space-y-10 py-10 my-10 md:my-20">
      <p className="text-4xl font-semibold text-white">Events</p>
      <div className="flex flex-wrap place-items-center w-full justify-evenly gap-7">
        {EventDetails.map((event,key)=>(<Card event={event} key={key}/>))}
        
      </div>
    </div>
  );
};

export { EventsSection };
