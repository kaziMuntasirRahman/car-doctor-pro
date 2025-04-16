import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";


const SideBar = ({ _id, price }) => {
  const services = [
    "Full Car Repair",
    "Engine Repair",
    "Automatic Services",
    "Engine Oil Change",
    "Battery Charge"
  ]
  return (
    <div className=" min-w-[364px] flex flex-col gap-8" >
      <section className="w-full flex flex-col gap-5 p-10 bg-[#F3F3F3] rounded-[10px]">
        <h1 className="text-[#151515] text-[25px] font-bold ">Services</h1>
        {
          services.map((service) =>
            <div className="text-[#151515] font-semibold group flex justify-between items-center p-[18px] bg-white hover:bg-primaryColor rounded-md cursor-pointer group transition-all duration-150 hover:bg-gray-700 " key={service}>
              <p className="group-hover:text-white transition-all duration-200">{service}</p>
              <FaArrowRight className="text-primaryColor group-hover:text-white transition-all duration-200" />
            </div>
          )}
      </section>
      <section className="w-full h-[262px] bg-[#151515] rounded-[10px] p-10 flex flex-col gap-5">
        <h1 className="text-white text-[25px] font-bold">Download</h1>
        <div className=" flex items-center gap-[10px]">
          <Image alt="pdf icon" width={30} height={30} src="/assets/icons/pdf.png" />
          <div>
            <h3 className="text-white text-lg font-semibold">Our Brochure</h3>
            <p className="text-[#a2a2a2]">Download</p>
          </div>
          <button className="btn bg-primary text-white border-none size-14 ml-auto">
            <Image alt='right' width={100} height={100} src="/assets/icons/right-arrow.svg" />
          </button>
        </div>
        <div className=" flex items-center gap-[10px]">
          <Image alt='pdf icon' width={30} height={30} src="/assets/icons/pdf.png" />
          <div>
            <h3 className="text-white text-lg font-semibold">Our Brochure</h3>
            <p className="text-[#a2a2a2]">Download</p>
          </div>
          <button className="btn bg-primary text-white border-none size-14 ml-auto">
            <Image alt='right' width={100} height={100} src="/assets/icons/right-arrow.svg" />
          </button>
        </div>
      </section>
      <section className="w-full bg-[#151515] rounded-[10px] p-[50px] pb-14 flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-1">
          <Image alt='car doctor logo' width={100} height={100} src="/assets/logo white.png" className="w-32" />
          <h2 className="text-center text-white text-2xl font-bold">Car Doctor</h2>
        </div>
        <h3 className="text-center text-white text-xl font-bold leading-[35px]">Need Help? We Are Here To Help You</h3>
        <div className="w-full bg-white rounded-[10px] relative pt-5 pb-10">
          <h3 className="text-center text-[#ff3811] text-xl font-bold  leading-[35px]">Car Doctor{" "}
            <span className="text-[#151515]">Special</span>
          </h3>
          <h4 className="text-center text-neutral-500 font-bold  leading-[35px]">Save up to {" "}
            <span className="text-[#ff3811]">60% off</span>
          </h4>
          <button className="btn btn-primary absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2">Get A Quote</button>
        </div>
      </section>
      <section className="text-[#151515] text-[35px] font-bold">Price ${price}</section>
      <section>
        <Link href={`/checkout/${_id}`}>
          <button className="btn btn-primary w-full">Proceed Checkout</button>
        </Link>
      </section>
    </div>
  );
};

export default SideBar;