import { FC, useEffect, useRef, useState } from "react";
// @ts-ignore
import NET from "vanta/dist/vanta.net.min";

import * as THREE from "three";
interface threeLandingProps { }
import Script from "next/script";



const ThreeLanding = ({ toggleForm }: { toggleForm: () => void }) =>  {
  const [vantaEffect, setVantaEffect] = useState<any>(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,

          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 300.0,
          minWidth: 300.0,
          scale: 1.0,
          scaleMobile: 1.0,
          maxDistance: 25.0,
          spacing: 20.0,
          color: 0xff0000,
          backgroundColor: 0x0d0e12,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <>
      <Script src="/menu.js" />
      <section
        ref={vantaRef}
        className="black bg-dark-black text-white w-full h-screen grid place-items-center  relative"
      >
        <div className="text-center space-y-4">
          <p className="uppercase text-2xl font-semibold">Tech Invent 2023</p>
          <h1 className="text-5xl">Become a Campus Ambassador</h1>
          <button className="red-shadow bg-white text-dark-black px-5 py-2 rounded-xl" onClick={toggleForm} >
            Register Now
          </button>
        </div>
      </section>
    </>
  );
};

export default ThreeLanding;
