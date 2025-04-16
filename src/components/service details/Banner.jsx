import Image from "next/image";

const Banner = ({title="Service Details"}) => {
  const clipPathStyle = {
    clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)'
  };
  return (
    <div className='w-full relative'>
      <div
        className='w-full h-full bg-gradient-to-r from-[#151515] to-[#151515]/5 rounded-[10px] absolute left-0 top-0 flex items-center px-[100px]'>
        <h2 className="text-white text-[45px] font-bold ">{title}</h2>
        <div
          style={clipPathStyle}
          className='bg-primaryColor h-12 w-80 px-3 flex items-center justify-center text-white text-xl font-medium absolute bottom-0 left-1/2 -translate-x-1/2 hover:underline cursor-pointer'>
          Home/Service Details
        </div>
      </div>
      <Image alt={title} width={1000} height={280}
        src="/assets/images/checkout/checkout.png"
        className='w-full'
      />
    </div>
  );
};

export default Banner;
