import React from "react";

const WelcomeLink = ({ text }) => (
    <a className="font-serif text-dark_pink italic underline leading-6">{text}</a>
)

export const Welcome = ({ bio }) => {
  return (
    <div className="px-6 py-6 w-96 rounded-lg border-4 border-primary_pink">
        <h3 className="font-serif font-medium text-4xl">Welcome!</h3>
        <p className="text-black mt-4 text-lg font-serif leading-8 font-light">{bio}</p>
        <div className="flex justify-end">
            <h4 className="mt-6 font-xoxo text-2xl font-normal">xoxo Nyla</h4>
        </div>
        <div className="mt-20 mb-4 flex justify-between">
            <WelcomeLink text="about me -" />
            <WelcomeLink text="portfolio -" />
            <WelcomeLink text="services -" />
        </div>
    </div>
  );
};
