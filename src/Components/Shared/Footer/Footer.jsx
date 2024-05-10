import { Footer as flowFooter } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="p-12 font-roboto">
        <flowFooter>
          <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div>
                <h1 className="font-thin text-center font-raleway md:pt-12 md:pb-6 py-6 md:text-4xl">
                  KHAN BLOG
                </h1>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                  <flowFooter.Title title="about" />
                  <flowFooter.LinkGroup col>
                    <flowFooter.Link href="#">Home</flowFooter.Link>
                    <flowFooter.Link href="#">Contact</flowFooter.Link>
                  </flowFooter.LinkGroup>
                </div>
                <div>
                  <flowFooter.Title title="Follow us" />
                  <flowFooter.LinkGroup col>
                    <flowFooter.Link href="#">Twitter</flowFooter.Link>
                    <flowFooter.Link href="#">FaceBook</flowFooter.Link>
                  </flowFooter.LinkGroup>
                </div>
                <div>
                  <flowFooter.Title title="Legal" />
                  <flowFooter.LinkGroup col>
                    <flowFooter.Link href="#">Privacy Policy</flowFooter.Link>
                    <flowFooter.Link href="#">
                      Terms &amp; Conditions
                    </flowFooter.Link>
                  </flowFooter.LinkGroup>
                </div>
              </div>
            </div>
            <flowFooter.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <flowFooter.Copyright href="#" by="Khan Blog™" year={2024} />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <flowFooter.Icon href="#" icon={BsFacebook} />
                <flowFooter.Icon href="#" icon={BsInstagram} />
                <flowFooter.Icon href="#" icon={BsTwitter} />
                <flowFooter.Icon href="#" icon={BsGithub} />
                <flowFooter.Icon href="#" icon={BsDribbble} />
              </div>
            </div>
          </div>
        </flowFooter>
      </div>
    </>
  );
};

export default Footer;
