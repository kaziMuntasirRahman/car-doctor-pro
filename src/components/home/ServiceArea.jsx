import { getServices } from "@/services/getServices";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa'
// import { services } from "@/lib/services";

const ServiceArea = async () => {
  const services = await getServices()
  return (
    <div className="flex flex-col items-center gap-5 mt-[130px]">
      <p className="section-title text-center">Service</p>
      <h1 className="section-heading text-center">Our Service Area</h1>
      <p className="section-details text-center max-w-[700px]">
        the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable.
      </p>
      <section className="grid grid-cols-3 justify-between gap-7 my-[30px]">
        {
          services.map((service, index) =>
            <ServiceAreaCart key={index} service={service} />
          )}
      </section>
      <Link href='services' className="btn btn-primary">More Services</Link>
    </div>
  );
};

export default ServiceArea;

const ServiceAreaCart = ({ service }) => {
  const { _id, title = "Electrical System", img = "/assets/images/services/1.jpg", price } = service;
  return (
    <div className="p-[25px] pb-5 rounded-[10px] border border-[#e8e8e8] flex flex-col gap-5">
      <Image alt={title} src={img} width={500} height={400} className="rounded-lg object-cover w-80 h-52" />
      <h2>{title}</h2>
      <div className="flex justify-between items-center">
        <h3 className="section-title">Price:${price}</h3>
        <Link href={`/services/${_id}`}>
          <FaArrowRight className="section-title" />
        </Link>
      </div>
    </div>
  );
};