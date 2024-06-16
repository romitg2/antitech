/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export const Stats = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 md:py-24">
      {/* <h2 className="mb-8 text-center text-base text-indigo-500 sm:text-lg md:mb-16"> */}
      {/*   BUILD TRUST WITH YOUR USERS WITH A */}
      {/*   <span className="text-indigo-500"> BEAUTIFUL LANDING PAGE</span> */}
      {/* </h2> */}

      <div className="flex flex-col items-center justify-center sm:flex-row">
        <Stat num={100} suffix="%" subheading="Project Completion Rate" />
        <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
        <Stat
          num={30}
          decimals={1}
          suffix="+"
          subheading="Projects Successfully Delivered"
        />
        <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" />
        <Stat num={5} suffix="/5" subheading="Client Satisfaction Rating" />
      </div>
    </div>
  );
};

const Stat = ({ num, suffix, decimals = 0, subheading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-72 flex-col items-center py-8 sm:py-0">
      <p className="mb-2 text-center text-7xl font-semibold sm:text-6xl">
        <span ref={ref}></span>
        {suffix}
      </p>
      <p className="max-w-48 text-center ">{subheading}</p>
    </div>
  );
};
