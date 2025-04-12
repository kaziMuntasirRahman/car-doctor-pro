'use client'

import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../../styles/swiper.css';
import Image from "next/image";
const buttonStyle = "absolute bottom-12 z-10 text-white bg-white/50 hover:bg-primary transition-all duration-200 ease-in-out size-14 rounded-full flex items-center justify-center cursor-pointer"


const Banner = () => {

  const repairSlides = [
    {
      id: 1,
      title: 'Expert Engine Diagnostics',
      description: 'We provide top-notch diagnostics to identify and fix engine issues efficiently and affordably.'
    },
    {
      id: 2,
      title: 'Brake Inspection & Repair',
      description: 'Ensure your safety with our complete brake inspection and professional repair services.'
    },
    {
      id: 3,
      title: 'Oil Change Services',
      description: 'Keep your car running smoothly with our quick and affordable oil change services.'
    },
    {
      id: 4,
      title: 'Tire Rotation & Balancing',
      description: 'Improve performance and extend tire life with our rotation and balancing services.'
    },
    {
      id: 5,
      title: 'AC System Maintenance',
      description: 'Stay cool on the road with full AC checks, refills, and performance tuning.'
    },
    {
      id: 6,
      title: 'Battery Check & Replacement',
      description: 'Don’t let a dead battery stop you—get tested and replaced by our experts quickly.'
    }
  ];

  return (
    <div>
      <Carousel
        showArrows={true}
        showThumbs={false}
        axis="horizontal"
        centerMode={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={10000}
        swipeable={true}
        transitionTime={1500}
        showStatus={false}
        renderArrowPrev={(onclickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onclickHandler}
              title={label}
              className={`${buttonStyle} right-32`}
            >
              <IoArrowBack />
            </button>
          )
        }
        renderArrowNext={(onclickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onclickHandler}
              title={label}
              className={`${buttonStyle} right-12`}
            >
              <IoArrowForward />
            </button>
          )
        }
      >
        {
          repairSlides.map(({ title, description }, index) =>
            <div key={title} className="h-[600px] relative rounded-[10px] overflow-hidden" >
              <Image src={`/assets/images/banner/${index + 1}.jpg`} alt={title} height={600} width={1140} />
              <div className="absolute p-24 top-0 left-0 h-full w-full flex flex-col items-start gap-7 bg-gradient-to-r from-neutral-900 to-neutral-900/0 ">
                <h1 className="w-[463px] justify-start text-white text-6xl font-bold leading-[75px] text-left">{title}</h1>
                <p className="w-[522px] justify-start text-white text-lg font-normal capitalize leading-loose text-left">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                <div className="flex gap-4 ">
                  <button className="btn btn-primary">Discover Me</button>
                  <button className="btn btn-outline border-white text-white hover:border-white/0 hover:bg-primary">Latest Project</button>
                </div>
              </div>
            </div>
          )}
      </Carousel>
    </div>
  );
};

export default Banner;