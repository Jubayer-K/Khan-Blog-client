import { Footer as FlowFooter } from "flowbite-react";
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
        <FlowFooter>
          <div className="w-full">
            <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
              <div>
                <h1 className="font-thin text-center font-raleway md:pt-12 md:pb-6 py-6 md:text-4xl text-2xl">
                  KHAN BLOG
                </h1>
              </div>
              <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                <div>
                  <FlowFooter.Title title="about" />
                  <FlowFooter.LinkGroup col>
                    <FlowFooter.Link href="#">Home</FlowFooter.Link>
                    <FlowFooter.Link href="#">Contact</FlowFooter.Link>
                  </FlowFooter.LinkGroup>
                </div>
                <div>
                  <FlowFooter.Title title="Follow us" />
                  <FlowFooter.LinkGroup col>
                    <FlowFooter.Link href="#">Twitter</FlowFooter.Link>
                    <FlowFooter.Link href="#">FaceBook</FlowFooter.Link>
                  </FlowFooter.LinkGroup>
                </div>
                <div>
                  <FlowFooter.Title title="Legal" />
                  <FlowFooter.LinkGroup col>
                    <FlowFooter.Link href="#">Privacy Policy</FlowFooter.Link>
                    <FlowFooter.Link href="#">
                      Terms &amp; Conditions
                    </FlowFooter.Link>
                  </FlowFooter.LinkGroup>
                </div>
              </div>
            </div>
            <FlowFooter.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between">
              <FlowFooter.Copyright href="#" by="Khan Blog™" year={2024} />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                <FlowFooter.Icon href="#" icon={BsFacebook} />
                <FlowFooter.Icon href="#" icon={BsInstagram} />
                <FlowFooter.Icon href="#" icon={BsTwitter} />
                <FlowFooter.Icon href="#" icon={BsGithub} />
                <FlowFooter.Icon href="#" icon={BsDribbble} />
              </div>
            </div>
          </div>
        </FlowFooter>
      </div>
    </>
  );
};

export default Footer;
