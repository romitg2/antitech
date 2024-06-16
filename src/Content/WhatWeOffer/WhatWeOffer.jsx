/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export const WhatWeOffer = () => {
  return (
    <div className="w-[100vw] bg-white h-min-[100vh]">
      <section className="mx-auto px-4 w-[90vw] py-12 text-slate-800">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
          <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
            Services We Offer
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
          >
            Explore Our Services
          </motion.button>
        </div>
        <div className="mb-4 grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-4">
            <CardTitle>Web Development</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center font-semibold text-indigo-50">
                Create dynamic, responsive websites that drive engagement and
                growth. Our web development services are designed to deliver
                exceptional user experiences and robust performance
              </span>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-8">
            <CardTitle>Game Development</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center font-semibold text-orange-50">
                Bring your game ideas to life with our innovative game
                development services. We specialize in creating immersive and
                engaging gaming experiences for all platforms
              </span>
            </div>
          </BounceCard>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-8">
            <CardTitle>Mobile App Development</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-400 to-emerald-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center font-semibold text-emerald-50">
                Develop powerful mobile apps that provide seamless user
                experiences. Our mobile app development services are tailored to
                meet your business objectives and user needs
              </span>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-4">
            <CardTitle>Digital Marketing</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-400 to-red-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center font-semibold text-red-50">
                Boost your online presence and reach your target audience with
                our strategic digital marketing services. From SEO to social
                media marketing, we help you achieve your marketing goals
              </span>
            </div>
          </BounceCard>
        </div>
      </section>
    </div>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};
