import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { HashLink } from "react-router-hash-link";

export default function Navbar({ dark, setDark }) {
  function toggleMode() {
    setDark(!dark);
  }

  return (
    <div
      id="home"
      className="flex justify-between items-center py-4 px-30 max-[970px]:px-20 max-[632px]:px-10 "
    >
      <HashLink to="/#home" className="text-xl font-bold max-sm:hidden">
        Mansurbek Ergashov
      </HashLink>
      <HashLink to="/#home" className="text-xl font-bold sm:hidden">
        ME
      </HashLink>
      <ul className="flex gap-6 max-md:hidden justify-between max-[810px]:text-[14px]">
        <li>
          <HashLink smooth to="/#home" className="hover:opacity-60 transition duration-150">
            Bosh sahifa
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#projects" className="hover:opacity-60 transition duration-150">
            Loyihlar
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#skills" className="hover:opacity-60 transition duration-150">
            Ko'nikmalar
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#contact" className="hover:opacity-60 transition duration-150">
            Bog'lanish
          </HashLink>
        </li>
      </ul>
      <div className="flex gap-4">
        <Button
          variant="secondary"
          className="cursor-pointer"
          onClick={toggleMode}
        >
          {dark ? <Sun /> : <Moon />}
        </Button>

        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button variant="outline" className={"max-md:block hidden"}>
              <Menu />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="no-scrollbar overflow-y-auto px-4">
              {Array.from({ length: 1 }).map((_, index) => (
                <ul
                  key={index}
                  className="style-lyra:mb-2 style-lyra:leading-relaxed mb-4 leading-normal mt-8 flex flex-col gap-4"
                >
                  <DrawerClose asChild>
                    <HashLink smooth to="/#home">
                      Bosh sahifa
                    </HashLink>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <HashLink smooth to="/#projects">
                      Loyihlar
                    </HashLink>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <HashLink smooth to="/#skills">
                      Ko'nikmalar
                    </HashLink>
                  </DrawerClose>
                  <DrawerClose asChild>
                    <HashLink smooth to="/#contact">
                      Bog'lanish
                    </HashLink>
                  </DrawerClose>
                </ul>
              ))}
            </div>
            <DrawerFooter>
              <DrawerTrigger asChild>
                <Button variant="outline">Bekor qilish</Button>
              </DrawerTrigger>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
