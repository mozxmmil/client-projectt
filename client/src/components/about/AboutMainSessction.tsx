"use client";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const AboutMainSection = () => {
  const main = useRef(null);
  const h1 = useRef(null);
  const h2 = useRef(null);
  const h3 = useRef(null);
  const h4 = useRef(null);
  const h5 = useRef(null);
  const h6 = useRef(null);
  const h7 = useRef(null);
  const h8 = useRef(null);
  const h9 = useRef(null);
  const h10 = useRef(null);
  useGSAP(() => {
    const ti = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "10% 30%",
        end: "500% 50%",
        scrub: true,
        
        pin: true,
      },
    });
    ti.to(h1.current, {
      opacity: 1,
      duration: 1,
      filter: "blur(0px)",
    })
      .to(h2.current, {
        opacity: 1,
        duration: 1,
        delay: "-.5",
        filter: "blur(0px)",
      })
      .to(h3.current, {
        opacity: 1,
        duration: 1,
        delay: "-.5",
        filter: "blur(0px)",
      })
      .to(h4.current, {
        opacity: 1,
        duration: 1,
        delay: "-.5",
        filter: "blur(0px)",
      })
      .to(h5.current, {
        opacity: 1,
        duration: 1,
        delay: "-.5",
        filter: "blur(0px)",
      })
      .to(h6.current, {
        opacity: 1,
        duration: 1,
        delay: "-.5",
        filter: "blur(0px)",
      })
      .to(h7.current, {
        opacity: 1,
        duration: 1,
        delay: "-.5",
        filter: "blur(0px)",
      })
      .to(h8.current, {
        opacity: 1,
        duration: 1,
        delay: "-.5",
        filter: "blur(0px)",
      })
      .to(h9.current, {
        opacity: 1,
        duration: 1,
        delay: "-.5",
        filter: "blur(0px)",
      })
      .to(h10.current, {
        opacity: 1,
        duration: 1,
        delay: "-.5",
        filter: "blur(0px)",
      })
  });

  return (
    <div ref={main} className="w-full h-full flex bg-white dark:bg-zinc-900">
      <div className="md:w-[70%] w-full h-full  flex items-center flex-col gap-5 mx-auto">
        <h1
          ref={h1}
          className=" text-center text-3xl px-3 py-2  opacity-0 blur-sm"
        >
          Who We Are
        </h1>
        <h1 ref={h2} className="   opacity-0 blur-sm">
          <li>
            Welcome to Adarsh Advertisement! We are a passionate freelance
            advertising agency dedicated to bringing your vision to life.
            Founded by Aadarsh Patle, we aim to provide top-notch advertising
            services that resonate globally.
          </li>
        </h1>
        <h1
          ref={h3}
          className="text-center text-3xl px-3 py-2  opacity-0 blur-sm"
        >
          Our Journey
        </h1>
        <h1 ref={h4} className="  opacity-0 blur-sm text-center" >
          <li>
            Adarsh Advertisement was born from a love for creativity and a
            desire to connect businesses with their audience in meaningful ways.
            Aadarsh Patle, our founder, embarked on this journey with a simple
            yet profound belief: every brand has a story that deserves to be
            told beautifully.
          </li>
        </h1>
        <h1
          ref={h5}
          className="text-center text-3xl px-3 py-2  opacity-0 blur-sm"
        >
          What We Do
        </h1>
        <h1 ref={h6} className="  opacity-0 blur-sm text-center" >
          <li>
          At Adarsh Advertisement, we specialize in creating diverse advertising content that speaks both Hindi and English, bridging cultural gaps and reaching a wider audience. Our services include digital marketing, social media campaigns, print ads, and more.
          </li>
        </h1>
        <h1
          ref={h7}
          className="text-center text-3xl px-3 py-2  opacity-0 blur-sm"
        >
          Our Promise
        </h1>
        <h1 ref={h8} className="  opacity-0 blur-sm text-center" >
          <li>
          We promise to treat your brand with the same care and commitment as we would our own. At Adarsh Advertisement, your success is our success.
          </li>
        </h1>
        <h1
          ref={h9}
          className="text-center text-3xl px-3 py-2  opacity-0 blur-sm"
        >
          Join Us
        </h1>
        <h1 ref={h10} className="  opacity-0 blur-sm text-center" >
          <li>
          Be a part of our journey. Let&#39;s create something extraordinary together. Reach out to us, and let&#39;s bring your ideas to life.
          </li>
        </h1>
      </div>
    </div>
  );
};

export default AboutMainSection;
