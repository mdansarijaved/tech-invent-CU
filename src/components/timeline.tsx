import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Timeline = ({}) => {
  useEffect(() => {
    AOS.init();
    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <section className="text-center p-7 md:mb-20">
      <p className=" gradient-bg text-sm md:text-xl tracking-wider uppercase mb-3 ">
        STRUCTURE
      </p>
      <h2 className="text-white text-2xl md:text-4xl font-light mb-4">
        Step-by-Step Ambassador Journey
      </h2>
      <p className="text-t-gray">
        At Tech Invent CU, we have a streamlined process for task completion,
        review, and feedback within our Campus Ambassador Program.
      </p>
      <section className="w-fit mx-auto mt-10 md:mt-24 px-4 sm:p-7 pt-16">
        {timeline.map((item, index) => (
          <TimelineCard
            key={index}
            step={item.step}
            heading={item.heading}
            description={item.description}
            stepnumber={index + 1}
            lastStep={item.lastStep}
          />
        ))}
      </section>
    </section>
  );
};

export default Timeline;

const TimelineCard = ({
  heading,
  description,
  step,
  stepnumber,
  lastStep,
}: {
  heading: string;
  description: string;
  step: string;
  stepnumber: number;
  lastStep?: boolean;
}) => {
  return (
    <div
      data-aos="fade-up"
      className={`   relative px-5 lg:px-24   ${
        !lastStep ? " border-l-2 border-dashed border-white/30 pb-24" : " pb-0 "
      } `}
    >
      <span className="absolute top-0 left-0 -translate-x-1/2 p-1 grid place-items-center w-10 h-10 aspect-square rounded-full text-white timelineStep">
        <span className="w-full h-full grid place-items-center rounded-full bg-dark-black">
          {stepnumber}
        </span>
      </span>
      <span className="bg-white block text-dark-black uppercase py-3 px-4 rounded-[5px] w-fit relative">
        {step}
      </span>
      <div className="bg-light-black text-white p-5 rounded-xl mt-4 sm:max-w-[250px] lg:max-w-[707px]">
        <h3 className="text-2xl lg:text-left">{heading}</h3>
        <p className="mt-3 text-lg text-justify font-light text-[#7d828e] max-w-[640px]">
          {description}
        </p>
      </div>
    </div>
  );
};

const timeline: {
  step: string;
  heading: string;
  description: string;
  lastStep?: boolean;
}[] = [
  {
    step: "FIRST STEP",
    heading: "Task Assignment",
    description:
      "CA’s are assigned specific responsibilities related to event organization, promotion, outreach, and feedback. Clear instructions and deadlines are provided for each task, ensuring ambassadors have the necessary guidance to complete them successfully.",
  },
  {
    step: "SECOND STEP",
    heading: "Task Execution",
    description:
      " Ambassadors utilise their leadership skills and creativity to execute assigned tasks while aligning with Tech Invent CU's objectives. Once tasks are completed, ambassadors inform us and provide relevant documentation for verification and evaluation.",
  },
  {
    step: "THIRD STEP",
    heading: "Evaluation and Review",
    description:
      "CA’s are assigned specific responsibilities related to event organization, promotion, outreach, and feedback. Clear instructions and deadlines are provided for each task, ensuring ambassadors have the necessary guidance to complete them successfully.",
  },
  {
    step: "FOURTH STEP",
    heading: "Feedback",
    description:
      " Ambassadors stay involved in subsequent tasks, applying feedback, refining strategies, and maximizing their impact. We value ambassador input and provide channels for them to share suggestions, concerns, and ideas to improve the program.",
    lastStep: true,
  },
];
