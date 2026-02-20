import translator from "/src/assets/translator-image.png";
import memoryGame from "/src/assets/memory-game-image.png";
import contextStore from "/src/assets/context-store-image.png";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div
      id="projects"
      className="px-30 max-[970px]:px-20 max-[632px]:px-10 mt-50 mb-30"
    >
      <h1 className="text-5xl max-[450px]:text-4xl text-center font-semibold">
        Loyihalar
      </h1>

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-y-8 gap-x-14 mt-20">
        <Card className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 z-30 aspect-video" />
          <img
            src={translator}
            alt="Project image"
            className="relative z-20 aspect-video w-full object-cover brightness-100  dark:brightness-100"
          />
          <CardHeader>
            <CardTitle>Translator app</CardTitle>
            <CardDescription>
              Istalgan inglizcha so'zingizning inglizcha ma'nosini va
              sinonimlarini toping.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-wrap gap-4 mb-4 mt-auto">
            <Button variant="outline">
              <a
                href="https://translator-app-by-ergashov.netlify.app/"
                target="_blank"
              >
                Ko'rish
                <ArrowUpRight className="inline-block ml-2 mb-1" />
              </a>
            </Button>
            <Button>
              <a
                href="https://github.com/mansurbekergashov/ergashov-translator"
                target="_blank"
              >
                <Github className="inline-block mr-1.5 mb-1" />
                GitHub
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 z-30 aspect-video" />
          <img
            src={memoryGame}
            alt="Project image"
            className="relative z-20 aspect-video w-full object-cover brightness-100  dark:brightness-100"
          />
          <CardHeader>
            <CardTitle>Memory game</CardTitle>
            <CardDescription>
              Xotirangiz qanchalik kuchli, sinab ko'ring <br /> <br />
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-wrap gap-4 mb-4 mt-auto">
            <Button variant="outline">
              <a
                href="https://memory-game-by-ergashov.netlify.app/"
                target="_blank"
              >
                Ko'rish
                <ArrowUpRight className="inline-block ml-2 mb-1" />
              </a>
            </Button>
            <Button>
              <a
                href="https://github.com/mansurbekergashov/memory-game"
                target="_blank"
              >
                <Github className="inline-block mr-1.5 mb-1" />
                GitHub
              </a>
            </Button>
          </CardFooter>
        </Card>

        <Card className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 z-30 aspect-video " />
          <img
            src={contextStore}
            alt="Project image"
            className="relative z-20 aspect-video w-full object-cover brightness-100 dark:brightness-100"
          />
          <CardHeader>
            <CardTitle>Context Store</CardTitle>
            <CardDescription>
              O'zingiz uchun kerakli mahsulot sotib olishingiz mumkin (Demo
              rejimda) <br /> <br />
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-wrap gap-4 mt-auto mb-4">
            <Button variant="outline">
              <a
                href="https://invoices-app-by-ergashov.netlify.app/"
                target="_blank"
              >
                Ko'rish
                <ArrowUpRight className="inline-block ml-2 mb-1" />
              </a>
            </Button>
            <Button>
              <a
                href="https://github.com/mansurbekergashov/Invoices-app"
                target="_blank"
              >
                <Github className="inline-block mr-1.5 mb-1" />
                GitHub
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-center">
        <Button
          variant="outline"
          className="mt-4 w-full max-md:max-w-sm px-0 py-0"
        >
          <Link className="text-center w-full" to={"allProjects"}>
            Barcha loyihalar bu yerda <ArrowRight className="inline-block" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
