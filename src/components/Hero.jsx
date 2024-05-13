import React, { useRef, useEffect } from "react";
import { camera_guy } from "../assets";
import Section from "./Section";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);
  const maskRef = useRef(null);
  const imageRef = useRef(null);

  const words = [
    " mental health awareness",
    " positive mindset",
    " mental clarity",
    " behavioral change",
    " self-care",
    " betterness",
  ];

  useEffect(() => {
    const mask = maskRef.current;

    gsap.set(mask, { xPercent: -100, width:0 });

    const tl = gsap.timeline();
    tl.to(mask, { width:50,duration: 1, xPercent: 700, ease: 'power2.inOut' }).to(mask, {width:0, duration:1});

    if (textRef.current) {
      // Check if textRef.current is not null
      let mainTimeline = gsap.timeline({ repeat: -1 });
      words.forEach((word) => {
        let textTimeline = gsap.timeline({
          repeat: 1,
          yoyo: true,
          repeatDelay: 2,
        });
        textTimeline.to(textRef.current, { text: word, duration: 1 });
        mainTimeline.add(textTimeline);
      });

      let cursorTimeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.8,
      });

      cursorTimeline
        .to(cursorRef.current, { opacity: 1, duration: 0 })
        .to(cursorRef.current, { opacity: 0, duration: 0, delay: 0.8 });

      // Optionally, you can return a cleanup function to clean up the timelines when the component unmounts
      return () => {
        mainTimeline.kill();
      };
    }
  }, [gsap, words]);

  return (
    <Section className="bg-gray-200 py-20">
      <div className="container mx-auto flex flex-col md:flex-row mx-8 items-center justify-between">
        <div className="absolute md:relative z-2 md:w-1/2">
          <h1 className="text-5xl montserrat-black mb-4">
            We are a
            <span ref={textRef} className=" text-cyan-600 text-5xl "></span>
            <span ref={cursorRef} className=" text-cyan-600">
              {" "}
              |{" "}
            </span>
          </h1>
          <h1 className="text-5xl font-bold montserrat-black mb-12">
            organisation
          </h1>
          <p className="text-xl mb-8">
            Using film as a tool to promote mental health awareness and
            behavioral change
          </p>
          <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
        <div className="relative flex h-90 flex-col items-center md:w-1/2 mt-8 md:mt-0">
          {/* <div className="absolute top-8 w-32 mx-8 h-full border-8 border-yellow-400 px-40 "></div> */}
          <img
            ref={imageRef}
            src={camera_guy}
            alt="Hero"
            className="transform mx-auto h-full w-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gray-800" ref={maskRef}></div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
