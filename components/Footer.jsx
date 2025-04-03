import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-5 pb-24 flex flex-col gap-6">
        <h3 className="h3">Socials</h3>
        <div className="flex flex-row top-[90%] gap-12">
          <Link href="https://github.com/rohxn-rai">
            <FaGithub className="text-5xl" />
          </Link>
          <Link href="https://www.linkedin.com/in/rohxnrai/">
            <FaLinkedin className="text-5xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
