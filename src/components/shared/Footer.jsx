import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-black text-white py-10 px-5">
      <aside>
        <Image src='/assets/logo.svg' width={60} height={60} alt="Car Doctor Logo" />
        <p className="max-w-2xs">
        Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial.
        </p>
        <div>
          social connections
        </div>
      </aside>
      <nav>
        <h6 className="footer-title !text-white">About</h6>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">Service</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav>
        <h6 className="footer-title !text-white">Company</h6>
        <a className="link link-hover">Why Car Doctor</a>
        <a className="link link-hover">About us</a>
      </nav>
      <nav>
        <h6 className="footer-title !text-white">Support</h6>
        <a className="link link-hover">Support Center</a>
        <a className="link link-hover">Feedback</a>
        <a className="link link-hover">Accessibility</a>
      </nav>
    </footer>
  );
};

export default Footer;