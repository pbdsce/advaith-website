const FAQs = [
  {
    question: "Who can attend?",
    answer:
      "YEAH is open to all College Students. Rest of the events are exclusive to DSI students. Participation in YEAH is open to everyone.",
  },
  {
    question: "How long will ADVAITH be running for?",
    answer: "The event will be running for 6 days from 20th july to 25th july.",
  },
  {
    question: "How do I form teams?",
    answer:
      "If you already have a team of at most 4 before the hackathon, feel free to apply as a team. If you don’t there’ll be plenty of opportunities for you to meet people and form a team!",
  },
  {
    question: "What am I allowed to hack?",
    answer: `You can build/hack/create anything you want so long as you can get it done within the time limit! Check out our notion [bit.ly/yeah-guide] for inspiration!`,
  },
  {
    question: "I’m a first time hacker, what should I do?",
    answer:
      "No worries, we love to welcome first time hackers! We’ll have plenty of experiences oriented around first time hackers to introduce you to the idea of a hackathon!",
  },
  {
    question: "What do I need to participate?",
    answer:
      "All you need is an internet connection and a desire to build cool stuff!",
  },
  {
    question: "Do YEAH participants have to register on Devfolio too?",
    answer: "YES, you must be registered on Devfolio.",
  },
  {
    question: "Will there be swag?",
    answer: "Yes! Participants will be receiving swags.",
  },
  {
    question: "What is the registration fee for the Event?",
    answer:
      "None. Nada. Zero. Zilch. Nahi. There is no registration fee for any of the events.",
  },
  {
    question: "What language should I use for Coding Marathon?",
    answer:
      "There are no restrictions for any language of your choice for Coding Marathon.",
  },
];

const FAQSection = () => {
  const totalFAQs = FAQs.length;
  return (
    <div id="faq-section">
      <section className="text-gray-300">
        <div className="place-items-center container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-semibold text-center mb-4">
              Frequently Asked{" "}
              <span className="text-theme-primary-500">Questions</span>
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto"></p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {FAQs.map((faq, key) =>
              key <= totalFAQs / 2 ? (
                <div className="w-full lg:w-1/2 px-4" key={key}>
                  <details className="mb-4 cursor-pointer">
                    <summary className="font-semibold bg-gray-800 rounded-md py-2 px-4">
                      {faq.question}
                    </summary>
                    <span className="text-sm p-8 decoration-clone">
                      {faq.answer}
                    </span>
                  </details>
                </div>
              ) : (
                <div className="w-full lg:w-1/2 px-4" key={key}>
                  <details className="mb-4 cursor-pointer">
                    <summary className="font-semibold bg-gray-800 rounded-md py-2 px-4">
                      {faq.question}
                    </summary>
                    <span className="text-sm p-8 decoration-clone">
                      {faq.answer}
                    </span>
                  </details>
                </div>
              )
            )}
          </div>
          <div className="flex container w-full place-items-center">
            <div className="m-auto flex place-items-center p-5 gap-20 rounded bg-theme-card justify-between">
              <h3 className="text-gray-200 text-2xl tracking-wide font-semibold">
                Still have more questions?
              </h3>
              <button className="p-2 rounded-sm bg-theme-primary-500 transform hover:scale-105 text-theme-card font-bold focus:outline-none">
                <a href="https://discord.gg/ePP4wzGY">
                  Join us on Discord &rarr;
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { FAQSection };
