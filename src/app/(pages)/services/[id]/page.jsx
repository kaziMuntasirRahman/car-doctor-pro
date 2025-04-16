import Banner from "@/components/service details/Banner";
import ServiceDetailsBody from "@/components/service details/Body";
import SideBar from "@/components/service details/SideBar";
import { getService } from "@/services/getServices";

const SingleService = async ({ params }) => {
  const {id} = await params
  // console.log("Params is:", params);
  const { service_id = "", title = "", img = "", price = "", description = "", facility = [] } = await getService(id)
  return (
    <div className="max-w-6xl mx-auto" data-theme='car-doctor-light'>
      <Banner title={title} />
      <div className="flex justify-between my-10 gap-5 container">
        <ServiceDetailsBody title={title} img={img} facility={facility} description={description} />
        <SideBar _id={id} price={price} />
      </div>
    </div>
  );
};

export default SingleService;