import { Facebook, Instagram, Mail, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <div
      id="contact"
      className="px-30 max-[970px]:px-20 max-[632px]:px-10 mt-40 mb-10"
    >
      <div className="text-center">
        <h1 className="text-5xl max-[450px]:text-4xl font-semibold">
          Bog'lanish
        </h1>
        <p className="text-gray-500 mt-4">
          Qiziqtirgan savollaringiz bo'lsa, aloqaga chiqing
        </p>
      </div>

      <div className="mt-15 flex lg:justify-around flex-col lg:flex-row items-center gap-y-10">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ergashovmansurbek5577@gmail.com"
          className="flex flex-col items-center w-70"
        >
          <Button className="size-16 cursor-pointer" variant="secondary">
            <Mail className="size-8" />
          </Button>
          <p className="font-bold mt-4 text-xl">Email</p>
          <p className="text-gray-500">ergashovmansurbek5577@gmail.com</p>
        </a>

        <a href="tel:+998941485577" className="flex flex-col items-center w-70">
          <Button className="size-16 cursor-pointer" variant="secondary">
            <Phone className="size-8" />
          </Button>
          <p className="font-bold mt-4 text-xl">Telefon</p>
          <p className="text-gray-500">+998 94 148 55 77</p>
        </a>

        <a
          href="https://t.me/ergashov_mansurbek"
          className="flex flex-col items-center w-70"
        >
          <Button className="size-16 cursor-pointer" variant="secondary">
            <Send className="size-8" />
          </Button>
          <p className="font-bold mt-4 text-xl">Telegram</p>
          <p className="text-gray-500">@ergashov_mansurbek</p>
        </a>
      </div>

      <hr className="mt-30" />

      <div className="mt-10">
        <div className="flex gap-3">
          <a
            href="https://instagram.com/ergashov__off"
            target="_blank"
            className="text-gray-500"
          >
            <Instagram />
          </a>
          <a
            href="https://facebook.com/ergashovmansurbek"
            target="_blank"
            className="text-gray-500"
          >
            <Facebook />
          </a>
        </div>

        <div></div>
      </div>
    </div>
  );
}
