import Image from "next/image";

const ServiceDetailsBody = ({ title, img, description, facility }) => {
  return (
    <div className="w-[752px] flex flex-col gap-[30px]">
      <Image src={img} alt={title} width={500} height={400} className="w-full h-[400px] rounded-[10px] object-cover" />
      <h1 className="text-[#151515] text-[35px] font-bold mt-5">
        {title}
      </h1>
      <p className="w-full text-neutral-500 text-base font-normal  capitalize leading-[30px]">{description}</p>
      <section className="grid grid-cols-2 gap-6 justify-start">
        {
          facility.map(({ name, details }, index) =>
            <div key={index} className="w-[364px] h-[204px] bg-[#f3f3f3] rounded-[10px] border-t-2 border-primaryColor p-10 flex flex-col gap-2.5">
              <h4 className="text-[#444444] text-xl font-bold ">{name}</h4>
              <p className="w-[282px] text-neutral-500 capitalize leading-[30px]">{details}</p>
            </div>
          )}
      </section>
      <p className="w-full text-neutral-500 capitalize leading-[30px]">{description}</p>
      <h1 className="text-[#151515] text-[35px] font-bold mt-5">3 Simple Steps to Process</h1>
      <section className="flex gap-6">
        {
          [...Array(3)].map((_, index) =>
            <div key={index} className="w-[235px] h-[277px] rounded-[10px] border border-[#e8e8e8] flex flex-col justify-center items-center gap-5">
              <h2 className="text-white text-xl font-bold size-14 uppercase bg-primaryColor rounded-full flex items-center justify-center border-[14px] border-[#ffebe7] box-content">01</h2>
              <h1 className="text-[#151515] text-xl font-bold uppercase">Step One</h1>
              <p className="w-[163px] text-center text-neutral-500 capitalize leading-relaxed">It uses a dictionary of over 200 .</p>
            </div>
          )}
      </section>
      <video className="w-full h-[400px] object-cover" controls poster="/assets/images/checkout/thumbnail.png">
        <source src="/assets/images/checkout/9261df01-b5d9-40fb-a6ea-1997c60713ea.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ServiceDetailsBody;