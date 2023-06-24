import { FC } from "react";

const RolesResponsibility = () => {
  return (
    <section id="roles-and-responsibility" className="text-center py-10 p-7">
      <p className=" gradient-bg text-sm md:text-xl tracking-wider uppercase mb-3">
        Roles and Responsibilities
      </p>
      <h2 className="text-white text-2xl md:text-4xl font-light mb-6">
        Drive Engagement and Inspire Others
      </h2>
      <section className="max-w-[1200px] mx-auto  grid px-20 sm:grid-cols-2 justify-center items-center gap-9">
        {roles.map((role) => (
          <RoleCard
            key={role.title}
            title={role.title}
            description={role.description}
          />
        ))}
      </section>
    </section>
  );
};

export default RolesResponsibility;
const RoleCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-light-black h-full w-[300px] lg:w-[500px] sm:max-w-none mx-auto  lg:max-w-none  text-white rounded-xl p-10 px-6 space-y-4">
      <h3 className="lg:text-[3.5vmin]">{title}</h3>
      <p className="text-[#7d828e] lg:text-[2.5vmin] text-justify ">{description}</p>
    </div>
  );
};
const roles: {
  title: string;
  description: string;
}[] = [
  {
    title: "Feedback and Reporting",
    description:
      "Provide valuable feedback and insights to the Tech Invent team to improve programs and ensure a better experience for participants.",
  },
  {
    title: "Promotion and Outreach",
    description:
      "Promote Tech Invent events, initiatives, and programs through various channels, including social media, posters, workshops, and word-of-mouth.",
  },
  {
    title: "Campus Engagement",
    description:
      "Organize and conduct on-campus activities such as hackathons, tech workshops, seminars and networking events to engage and inspire your fellow students.",
  },
  {
    title: "Brand Advocacy",
    description:
      "Be an enthusiastic advocate for Tech Invent, sharing your experiences and encouraging participation among your peers.",
  },
];
