import IntroAnimation from "./IntroAnimation";
import ArrowDown from "./ArrowDown";
import ProfilePic from "./ProfilePic";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-around h-screen md:h-screen">
      <div className={`flex items-center  w-full  px-4`}>
        <div className="flex flex-col md:flex-row items-center justify-around w-full space-y-8 md:space-y-0 py-4 space-x-0 md:space-x-8">
          <ProfilePic />
          <IntroAnimation />
        </div>
      </div>
      <div>
        <ArrowDown />
      </div>
    </div>
  );
};

export default HeroSection;
