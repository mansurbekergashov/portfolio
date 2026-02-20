import react from "/src/assets/react.svg";
import { Button } from "./ui/button";
import { File, Github, Mail } from "lucide-react";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Home({ dark }) {
  return (
    <>
      <div className="flex justify-between items-center mt-40 mb-30 px-30 max-[970px]:px-20 max-[632px]:px-10 max-[554px]:mt-25">
        <div className="w-160">
          <div className="max-md:flex max-md:justify-center md:hidden">
            <img className="w-80" src={react} alt="Image" />
          </div>
          <p className="text-5xl font-bold max-md:text-center max-md:mt-4 max-[554px]:text-4xl">
            Mansurbek Ergashov
          </p>
          <p className="text-2xl mt-3 text-gray-500 max-md:text-center">
            Frontend Dasturchi
          </p>
          <ul className="flex gap-3 mt-3 max-md:justify-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ergashovmansurbek5577@gmail.com"
              target="_blank"
            >
              <Button variant="outline" className="cursor-pointer">
                <Mail />
              </Button>
            </a>
            <a href="https://github.com/mansurbekergashov" target="_blank">
              <Button variant="outline" className="cursor-pointer">
                <Github />
              </Button>
            </a>
            <a href="/Ergashov-Mansurbek-Resume.pdf" target="_blank">
              <Button variant="outline" className="cursor-pointer">
                <File />
              </Button>
            </a>
          </ul>
          <p className="mt-3 text-[16px] max-md:text-center">
            Men frontend dasturchiman, React va JavaScript bilan ishlayman. Toza
            va qulay interfeyslar yaratishni yoqtiraman.
          </p>
        </div>
        <div className="max-md:hidden">
          <img className="w-80" src={react} alt="Image" />
        </div>
      </div>
      <Projects />
      <Skills dark={dark} />
      <Contact />
    </>
  );
}
