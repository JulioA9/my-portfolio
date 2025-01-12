"use client";

import React from "react";
import { IconType } from "react-icons";

interface SkillCardsProps {
  icon: IconType;
  name: string;
}

const SkillCards: React.FC<SkillCardsProps> = ({ icon: Icon, name }) => {
  return (
    <div className="flex flex-col space-y-2 py-4 items-center border shadow-md hover:shadow-lg hover:scale-105 justify-around bg-cyan-600 rounded-md">
      <Icon className="text-5xl text-white" />
      <h6 className="font-semibold text-lg text-white">{name}</h6>
    </div>
  );
};

export default SkillCards;
