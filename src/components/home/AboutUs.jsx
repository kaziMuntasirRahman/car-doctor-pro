const AboutUs = () => {
  return (
    <div className="flex justify-between md:flex-row flex-col gap-[60px] md:h-[550px] mt-[130px]">
      <section className="relative h-full w-[530px]">
        <img
          src="/assets/images/about_us/person.jpg"
          className="size-[460px] object-cover rounded-[10px]" />
        <img
          src="/assets/images/about_us/parts.jpg"
          className="size-[327px] object-cover border-white border-[15px]  rounded-lg absolute right-0 bottom-0"
        />
      </section>
      <section className="flex flex-col items-start min-w-[490px] max-w-[600px] h-full gap-5">
        <p className="section-title">About Us</p>
        <h1 className="section-heading mb-2.5">We are qualified & of experience in this field</h1>
        <p className="section-details !text-left">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
        <p className="section-details !text-left mb-2.5">the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
        <button className="btn btn-primary">Get More Info</button>
      </section>
    </div>
  );
};

export default AboutUs;