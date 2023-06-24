const Faqs = ({}) => {
  return (
    <section id="faq" className="text-center md:mt-7">
      <p className=" gradient-bg text-sm md:text-xl tracking-wider uppercase mb-3 ">
        Frequently Asked Questions
      </p>
      <h2 className="text-white text-2xl md:text-4xl font-light mb-4">
        Your Questions Answered
      </h2>

      <section className="text-left w-[80%] lg:w-[70%] mx-auto md:mt-14 flex flex-col justify-center items-center relative">
        <div className="faq text-sm lg:text-[2.5vmin] w-full">
          {faqs.map((faq, index) => (
            <Faq key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Faqs;
const Faq = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <>
      <details className="mb-4 group">
        <summary className="list-none flex flex-wrap items-center cursor-pointer group-open:rounded-b-none group-open:z-[1] relative">
          <p className="flex flex-1 p-1 leading-loose text-white">{question}</p>
          <div className="flex w-10 items-center justify-center">
            <div className="border-8 border-transparent bg-transparent border-l-gray-400 ml-2 group-open:rotate-90 transition-transform origin-left"></div>
          </div>
        </summary>
        <div className="px-1 mt-4 text-justify pr-10 pt-0 mx-auto leading-relaxed text-[#7d828e]">
          <p>{answer}</p>
        </div>
      </details>
      <hr className="my-4 py-2 rounded w-full opacity-30" />
    </>
  );
};
const faqs = [
  {
    question: "What is the Tech Invent Campus Ambassador Program?",
    answer:
      "The Tech Invent Campus Ambassador Program is an opportunity for enthusiastic students to represent Tech Invent on their campuses, promote its programs, and foster a vibrant tech community.",
  },
  {
    question: "How can I become a Campus Ambassador for Tech Invent CU?",
    answer:
      "To become a Campus Ambassador, you can apply through the designated application process outlined on our website. We evaluate applications based on your passion for technology, leadership potential, and dedication to promoting our initiatives.",
  },
  {
    question: "What are the responsibilities of a Campus Ambassador?",
    answer:
      "As a Campus Ambassador, you will be responsible for promoting Tech Invent CU events and initiatives on your campus, organizing tech-related activities, engaging with your peers, and acting bridge between your campus community and Tech Invent CU.",
  },
  {
    question:
      "Are there any prerequisites to applying for the Campus Ambassador Program?",
    answer:
      "To apply for the program you need to have a valid Student ID. We welcome applications from students who are passionate about technology, have strong communication skills, and are motivated to make a positive impact on their campuses.",
  },
  {
    question:
      "What incentives and opportunities are provided to Campus Ambassadors?",
    answer: `Campus Ambassadors receive exclusive certificates of recognition, priority access to events, networking opportunities with industry professionals, and a chance to be selected as the "Campus Ambassador of the Year." Exceptional ambassadors may also get the opportunity to visit the Tech Invent CU campus and attend upcoming events.`,
  },
  {
    question: "How long is the Campus Ambassador Program term?",
    answer:
      "The Campus Ambassador Program term typically lasts for an academic year, but the duration may vary depending on specific circumstances like the performance of the Campus Ambassador.",
  },
  {
    question:
      "Is the Campus Ambassador Program open to all colleges and universities?",
    answer:
      "Yes, the Campus Ambassador Program is open to students from colleges and universities across the country. We encourage students from various academic backgrounds to apply.",
  },
  {
    question: "How will I receive guidance and support throughout the program?",
    answer: `Tech Invent team will provide you with the necessary guidance and support through regular communication channels. You will have a dedicated point of contact from our team to address your queries, provide resources, and offer assistance whenever needed.`,
  },
  {
    question:
      "Can I participate in other activities or organisations while being a Campus Ambassador?",
    answer: `Yes, we encourage our Campus Ambassadors to be involved in other activities and organisations on their campuses. We believe in fostering a well-rounded experience and understanding that students have diverse interests.`,
  },
  {
    question: "How can I provide feedback or suggestions for the program?",
    answer: `We value your feedback and suggestions to enhance the Campus Ambassador Program. You can share your thoughts and ideas with us through the designated feedback channels provided during the program.`,
  },
  {
    question: "How can I contact?",
    answer: `For more information Email us at techinvent2023@cumail.in`,
  },
];
