import About from "@/components/about";
import Faqs from "@/components/faqs";
import Footer from "@/components/footer";
import Form from "@/components/form";
import Navbar from "@/components/navbar";
import RolesResponsibility from "@/components/roles-and-responsibilities";
import ThreeLanding from "@/components/threeLanding";
import Timeline from "@/components/timeline";
import { useState } from "react";

const Home = ({}) => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
      <Navbar toggleForm={toggleForm} />
      <ThreeLanding toggleForm={toggleForm} />
      <About />
      <RolesResponsibility />
      <Timeline />
      <Faqs />
      <Footer />
      {showForm && (
        <div className="fixed z-[999]  backdrop-blur-lg inset-0">
          <Form toggleForm={toggleForm} />
        </div>
      )}
    </div>
  );
};

export default Home;
