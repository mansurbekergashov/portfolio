import html from "/src/assets/html-5.png";
import css from "/src/assets/css.png";
import tailwindcss from "/src/assets/tailwindcss.svg";
import js from "/src/assets/js.png";
import figma from "/src/assets/figma.png";
import react from "/src/assets/react.png";
import typeScript from "/src/assets/typescript.png";
import next from "/src/assets/nextjs.svg";
import nextDark from "/src/assets/next-dark.png";

export default function Skills({ dark }) {
  return (
    <div
      id="skills"
      className="px-30 max-[970px]:px-20 max-[632px]:px-10  mt-40 mb-20"
      data-aos="zoom-in"
    >
      <h1 className="text-5xl max-[450px]:text-4xl text-center font-semibold">
        Ko'nikmalar
      </h1>
      <div className="grid grid-cols-2  sm:grid-cols-4 lg:grid-cols-8 items-center justify-center gap-y-10 max-[400px]:gap-x-10 max-[400px]:px-10 max-[500px]:gap-x-10 max-[500px]:px-15 max-[600px]:gap-x-20 max-[600px]:px-10 max-[632px]:gap-x-40 max-sm:px-15 max-md:gap-x-15 max-lg:gap-x-25 lg:gap-x-16 mt-20">
        <img src={html} alt="HTML-logo" />
        <img src={css} alt="CSS-logo" />
        <img src={tailwindcss} alt="TailwindCSS-logo" />
        <img src={js} alt="JavaScript-logo" />
        <img src={figma} alt="Figma-logo" />
        <img src={react} alt="React-logo" />
        <img src={typeScript} alt="TypeScript-logo" />
        {dark ? (
          <img src={nextDark} alt="Next-logo" />
        ) : (
          <img src={next} alt="Next-logo" />
        )}
      </div>
    </div>
  );
}
