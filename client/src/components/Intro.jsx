import React from "react";

const Intro = () => {
  return (
    <div className="flex h-[85vh] xl:h-[90vh]">
      <div className="flex flex-col w-full justify-center text-white">
        <Title title="Artistry Unveiled" />
        <Subtitle subtitle="Where Beauty Meets Perfection" />
        <IntroParagraph />
      </div>
    </div>
  );
};

export const Title = ({ title }) => {
  return (
    <div className="flex w-full justify-center text-white tracking-widest sm:tracking-normal text-6xl pb-4 lg:py-4">
      <p className="text-center">{title}</p>
    </div>
  );
};

export const Subtitle = ({ subtitle }) => {
  return (
    <div className="flex w-full justify-center text-white tracking-wider sm:tracking-normal text-3xl pb-4 lg:py-4">
      <p className="text-center italic">{subtitle}</p>
    </div>
  );
};

export const IntroParagraph = () => {
  return (
    <div className="flex w-full justify-center px-6 text-lg lg:px-32">
      <p className="text-center">
        Welcome to a realm where your beauty is accentuated and celebrated. With
        a brush, a palette, and a gentle touch, we unveil the masterpiece that
        is you. Explore a variety of makeup styles and services designed to
        enhance your natural allure. Your journey towards a captivating
        reflection begins here.
      </p>
    </div>
  );
};

export default Intro;
