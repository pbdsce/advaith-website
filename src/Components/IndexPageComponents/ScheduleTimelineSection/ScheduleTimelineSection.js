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
    eventDesc:
      "A Cybersecurity challenge where hackers exploit vulnerabilities to find the flags hidden in an open arena.",
  },
  {
    date: "23-26 JULY 2021",
    time: "00:00 pm",
    eventName: "Design Wars",
    eventDesc:
      "Students make use of their creativity and UI/UX skills to create amazing user-friendly designs for their projects.",
  },
  {
    date: "24 JULY 2021",
    time: "00:00 pm",
    eventName: "Coding Marathon",
    eventDesc:
      "A 3-hour long coding competition event that will be conducted on the CodeZen platform.",
  },
];

const ScheduleTimelineSection = () => {
  return (
    <div className="container px-3 py-10 flex flex-col place-items-center w-full m-auto text-gray-200 space-y-10">
      <h2 className="text-4xl font-semibold tracking-wider">Our <span className="text-theme-primary-500">Schedule</span></h2>
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
                <p className="leading-snug text-justify ">{event.eventDesc}</p>
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
                <h3 className="font-semibold text-lg mb-1">
                  {event.eventName}
                </h3>
                <p className="leading-tight text-justify">{event.eventDesc}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export { ScheduleTimelineSection };
