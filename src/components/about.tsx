import { FC } from "react";
import Image from "next/image";
interface aboutProps {}

const About: FC<aboutProps> = ({}) => {
  return (
    <section
      id="about-us"
      className="relative bg-light-black text-white p-7 md:px-24 pb-16 lg:pb-32 rounded-b-3xl pt-10  z-40 rounded-t-3xl"
    >
      <section>
        <div className="flex justify-between items-center">
          <div className="text-center lg:text-left lg:w-1/2">
            <p className=" gradient-bg text-sm md:text-xl lg:text-2xl tracking-wider uppercase mb-3">
              About The Event
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-6">
              Tech Invent CU <span className="text-light-grey">2023</span>{" "}
            </h2>
            <p className=" leading-loose md:leading-loose md:text-xl lg:text-[3vmin] text-justify font-normal my-[0.5vmin] z-20 text-white lg:w-[85%] ">
              Tech Invent is a visionary series of events that aims to foster
              creativity, collaboration, and advancement within the tech
              industry.
              <br />
              <span className="text-light-grey ">
                Our mission is to inspire and empower individuals to explore and
                embrace the limitless possibilities that technology offers.
              </span>
            </p>
          </div>
          <Image
            src={"/Assets/1.png"}
            width={500}
            height={500}
            alt="vector"
            className="object-cover hidden lg:block"
          />
        </div>
        <div className="flex justify-between items-center gap-x-24">
          <Image
            src={"/Assets/3.png"}
            width={500}
            height={500}
            alt="vector"
            className="object-cover flex-1 hidden lg:block"
          />
          <div className="text-center lg:text-left mt-10">
            <p className=" gradient-bg text-sm md:text-xl lg:text-2xl tracking-wider uppercase mb-3">
              Here for the heroes
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-6">
              Campus Ambassador{" "}
              <span className="text-light-grey ">Programme</span>
            </h2>
            <p className="leading-loose md:leading-loose md:text-xl lg:text-[3vmin] text-justify font-normal my-[0.5vmin] z-20 text-white lg:w-[85%] ">
              The CA Program is an initiative within Tech Invent, creating a
              powerful network of student ambassadors who proudly represent our
              organization on their respective campuses.
              <br />
              <span className="text-light-grey">
                As Campus Ambassadors, students play a vital role in actively
                engaging with their peers.
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="  bg-dark-black text-center py-10 mt-8 md:mt-16 rounded-3xl">
        <p className=" gradient-bg text-sm md:text-xl tracking-wider uppercase mb-3">
          Benefits & Incentives
        </p>
        <h2 className="text-2xl md:text-5xl font-light mb-6">
          Elevate Your Leadership Journey
        </h2>

        <div className="px-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-12  pb-10">
          {benefits.map((benefit) => (
            <BenefitsCard
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </section>
      <Image
        src={"/Assets/group.png"}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 hidden lg:block"
        width={500}
        height={500}
        alt="vector"
      />
    </section>
  );
};

export default About;

const BenefitsCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="max-w-[250px] md:max-w-none mx-auto bg-light-black text-center text-white px-5 lg:py-3 pb-5 rounded-2xl">
      <h3 className="lg:text-[3vmin] text-lg py-1 text-white mt-[5vmin] leading-[35px]">{title}</h3>
      <p className="text-[#7d828e] text-sm md:text-xl text-justify">{description}</p>
    </div>
  );
};

const benefits = [
  {
    title: `Get Exclusive Certificates`,
    description: `Receive personalized and exclusive certificates of recognition for your contributions as a Tech Invent CU Campus Ambassador, highlighting your leadership and impact.`,
  },
  {
    title: `Networking Opportunities`,
    description: `Connect with industry professionals, guest speakers, and fellow ambassadors, expanding your professional network and creating valuable connections.`,
  },
  {
    title: `Campus Ambassador Award`,
    description: `Stand a chance to be recognized as the "CA of the Year" based on your exceptional performance and dedication, with a special prize and recognition.`,
  },
  {
    title: `Chance to visit CU Campus`,

    description: `The best-performing ambassadors may have the opportunity to visit the prestigious Tech Invent CU campus, immersing themselves in the vibrant tech environment.`,
  },
];
