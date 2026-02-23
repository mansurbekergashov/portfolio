import translator from "/src/assets/translator-image.png";
import memoryGame from "/src/assets/memory-game-image.png";
import contextStore from "/src/assets/context-store-image.png";
import ticTacToe from "/src/assets/tic-tac-toe-image.png";
import passwordGeneratorImage from "/src/assets/password-generator-image.png";
import invoicesApp from "/src/assets/invoices-app.png";
import toDoList from "/src/assets/to-do-list.png";
import rockPaperScissors from "/src/assets/rock-paper-image.png";
import shortly from "/src/assets/shortly-image.png";
import ansorMed from "/src/assets/ansormed-image.png";
import myTeam from "/src/assets/my-team-image.png";
import akademnashr from "/src/assets/akademnashr.png";

import { Button } from "../components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowUpRight, Github } from "lucide-react";
import { Badge } from "../components/ui/badge";

export default function AllProjects() {
  return (
    <div className="px-30 max-md:px-15 max-sm:px-10 mt-20">
      <Card className="relative mx-auto w-full">
        <div className="absolute inset-0 z-30 aspect-video " />
        <img
          src={translator}
          alt="Translator image"
          className="relative z-20 w-full object-cover brightness-100"
        />
        <CardHeader>
          <CardTitle>Translator app</CardTitle>
          <CardDescription>
            Istalgan inglizcha so'zingizning inglizcha ma'nosini va
            sinonimlarini toping.
          </CardDescription>
          <div className="flex gap-2 mt-4 -mb-2">
            <Badge>React</Badge>
            <Badge>TailwindCSS</Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full">
            <a
              href="https://github.com/mansurbekergashov/translator-app"
              className="w-full"
              target="_blank"
            >
              <Github className="inline-block mr-1.5 mb-1" /> GitHub
            </a>
          </Button>
          <Button className="w-full">
            <a
              href="https://translator-app-by-ergashov.netlify.app/"
              className="w-full"
              target="_blank"
            >
              Ko'rish
              <ArrowUpRight className="inline-block ml-2 mb-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full mt-18">
        <div className="absolute inset-0 z-30 aspect-video " />
        <img
          src={memoryGame}
          alt="Memory game image"
          className="relative z-20 w-full object-cover brightness-100"
        />
        <CardHeader>
          <CardTitle>Memory game</CardTitle>
          <CardDescription>
            Xotirangiz qanchalik kuchli, sinab ko'ring.
          </CardDescription>
          <div className="flex gap-2 mt-4 -mb-2">
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>JavaScript</Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full">
            <a
              href="https://github.com/mansurbekergashov/memory-game"
              className="w-full"
              target="_blank"
            >
              <Github className="inline-block mr-1.5 mb-1" /> GitHub
            </a>
          </Button>
          <Button className="w-full">
            <a
              href="https://memory-game-by-ergashov.netlify.app/"
              className="w-full"
              target="_blank"
            >
              Ko'rish
              <ArrowUpRight className="inline-block ml-2 mb-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full mt-18">
        <div className="absolute inset-0 z-30 aspect-video " />
        <img
          src={contextStore}
          alt="Context store image"
          className="relative z-20 w-full object-cover brightness-100"
        />
        <CardHeader>
          <CardTitle>Context Store</CardTitle>
          <CardDescription>
            O'zingiz uchun kerakli mahsulot sotib olishingiz mumkin (Demo
            rejimda)
          </CardDescription>
          <div className="flex gap-2 mt-4 -mb-2">
            <Badge>React</Badge>
            <Badge>TailwindCSS</Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full">
            <a
              href="https://github.com/mansurbekergashov/Context-Store"
              className="w-full"
              target="_blank"
            >
              <Github className="inline-block mr-1.5 mb-1" /> GitHub
            </a>
          </Button>
          <Button className="w-full">
            <a
              href="https://context-store-ergashov.netlify.app/"
              className="w-full"
              target="_blank"
            >
              Ko'rish
              <ArrowUpRight className="inline-block ml-2 mb-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full mt-18">
        <div className="absolute inset-0 z-30 aspect-video " />
        <img
          src={ticTacToe}
          alt="Tic tac toe image"
          className="relative z-20 w-full object-cover brightness-100"
        />
        <CardHeader>
          <CardTitle>X O o'yini (TicTacToe)</CardTitle>
          <CardDescription>
            Kompyuter bilan yoki do'stingiz bilan istalgan payt o'ynashingiz
            mumkin
          </CardDescription>
          <div className="flex gap-2 mt-4 -mb-2">
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>JavaScript</Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full">
            <a
              href="https://github.com/mansurbekergashov/xo-game"
              className="w-full"
              target="_blank"
            >
              <Github className="inline-block mr-1.5 mb-1" /> GitHub
            </a>
          </Button>
          <Button className="w-full">
            <a
              href="https://tic-tac-toe-ergashov.netlify.app/"
              className="w-full"
              target="_blank"
            >
              Ko'rish
              <ArrowUpRight className="inline-block ml-2 mb-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full mt-18">
        <div className="absolute inset-0 z-30 aspect-video " />
        <img
          src={passwordGeneratorImage}
          alt="Password Generator image"
          className="relative z-20 w-full object-cover brightness-100"
        />
        <CardHeader>
          <CardTitle>Password Generator</CardTitle>
          <CardDescription>
            Xavfsizligingiz uchun murakkab parol hosil beruvchi yordamchingiz.
            Parol random orqali hosil qilinadi
          </CardDescription>
          <div className="flex gap-2 mt-4 -mb-2">
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>JavaScript</Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full">
            <a
              href="https://github.com/mansurbekergashov/password-generator"
              className="w-full"
              target="_blank"
            >
              <Github className="inline-block mr-1.5 mb-1" /> GitHub
            </a>
          </Button>
          <Button className="w-full">
            <a
              href="https://password-generator-by-ergashov.netlify.app/"
              className="w-full"
              target="_blank"
            >
              Ko'rish
              <ArrowUpRight className="inline-block ml-2 mb-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full mt-18">
        <div className="absolute inset-0 z-30 aspect-video " />
        <img
          src={invoicesApp}
          alt="Invoices app image"
          className="relative z-20 w-full object-cover brightness-100"
        />
        <CardHeader>
          <CardTitle>Invoices app</CardTitle>
          <CardDescription>
            Hisob-kitobingizni oson boshqarish uchun mo'ljallangan veb-sayt
          </CardDescription>
          <div className="flex gap-2 mt-4 -mb-2">
            <Badge>React</Badge>
            <Badge>TailwindCSS</Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full">
            <a
              href="https://github.com/mansurbekergashov/Invoices-app"
              className="w-full"
              target="_blank"
            >
              <Github className="inline-block mr-1.5 mb-1" /> GitHub
            </a>
          </Button>
          <Button className="w-full">
            <a
              href="https://invoices-app-by-ergashov.netlify.app/"
              className="w-full"
              target="_blank"
            >
              Ko'rish
              <ArrowUpRight className="inline-block ml-2 mb-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full mt-18">
        <div className="absolute inset-0 z-30 aspect-video " />
        <img
          src={toDoList}
          alt="To do list image"
          className="relative z-20 w-full object-cover brightness-100"
        />
        <CardHeader>
          <CardTitle>To do list</CardTitle>
          <CardDescription>
            Kundalik ishlaringizni rejalashtiringiz uchun kichik yordamchi
          </CardDescription>
          <div className="flex gap-2 mt-4 -mb-2">
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>JavaScript</Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full">
            <a
              href="https://github.com/mansurbekergashov/4-oy.-10-dars"
              className="w-full"
              target="_blank"
            >
              <Github className="inline-block mr-1.5 mb-1" /> GitHub
            </a>
          </Button>
          <Button className="w-full">
            <a
              href="https://ergashov-todo-list.netlify.app/"
              className="w-full"
              target="_blank"
            >
              Ko'rish
              <ArrowUpRight className="inline-block ml-2 mb-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full mt-18">
        <div className="absolute inset-0 z-30 aspect-video " />
        <img
          src={rockPaperScissors}
          alt="Rock Paper Scissors image"
          className="relative z-20 w-full object-cover brightness-100"
        />
        <CardHeader>
          <CardTitle>Rock Paper Scissors</CardTitle>
          <CardDescription>
            Zerikkan paytingiz kompyuter bilan "don-don-ziki" o'ynang
          </CardDescription>
          <div className="flex gap-2 mt-4 -mb-2">
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>JavaScript</Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full">
            <a
              href="https://github.com/mansurbekergashov/4-oy.-7-dras"
              className="w-full"
              target="_blank"
            >
              <Github className="inline-block mr-1.5 mb-1" /> GitHub
            </a>
          </Button>
          <Button className="w-full">
            <a
              href="https://don-don-ziki-by-ergashov.netlify.app/"
              className="w-full"
              target="_blank"
            >
              Ko'rish
              <ArrowUpRight className="inline-block ml-2 mb-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full mt-18">
        <div className="absolute inset-0 z-30 aspect-video " />
        <img
          src={shortly}
          alt="shortly image"
          className="relative z-20 w-full object-cover brightness-100"
        />
        <CardHeader>
          <CardTitle>Shortly</CardTitle>
          <CardDescription>
            Uzun bo'lgan havolalarni qisqartirishingiz uchun
          </CardDescription>
          <div className="flex gap-2 mt-4 -mb-2">
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>JavaScript</Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full">
            <a
              href="https://github.com/mansurbekergashov/2-oy.-12-dars.-imtixon"
              className="w-full"
              target="_blank"
            >
              <Github className="inline-block mr-1.5 mb-1" /> GitHub
            </a>
          </Button>
          <Button className="w-full">
            <a
              href="https://shortly-by-ergashov.netlify.app/"
              className="w-full"
              target="_blank"
            >
              Ko'rish
              <ArrowUpRight className="inline-block ml-2 mb-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full mt-18">
        <div className="absolute inset-0 z-30 aspect-video " />
        <img
          src={ansorMed}
          alt="AnsorMed image"
          className="relative z-20 w-full object-cover brightness-100"
        />
        <CardHeader>
          <CardTitle>AnsorMed</CardTitle>
          <CardDescription>
            AnsorMed shifoxonasi uchun veb-sayt (Bu yerda faqat dizayn)
          </CardDescription>
          <div className="flex gap-2 mt-4 -mb-2">
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>JavaScript</Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full">
            <a
              href="https://github.com/mansurbekergashov/amaliyot-AnsorMed"
              className="w-full"
              target="_blank"
            >
              <Github className="inline-block mr-1.5 mb-1" /> GitHub
            </a>
          </Button>
          <Button className="w-full">
            <a
              href="https://ergashov-ansor-med-project.netlify.app/"
              className="w-full"
              target="_blank"
            >
              Ko'rish
              <ArrowUpRight className="inline-block ml-2 mb-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full mt-18">
        <div className="absolute inset-0 z-30 aspect-video " />
        <img
          src={myTeam}
          alt="MyTeam image"
          className="relative z-20 w-full object-cover brightness-100"
        />
        <CardHeader>
          <CardTitle>My Team</CardTitle>
          <CardDescription>
            Kompaniyangiz uchun kerakli xodimni toping
          </CardDescription>
          <div className="flex gap-2 mt-4 -mb-2">
            <Badge>React</Badge>
            <Badge>TailwindCSS</Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full">
            <a
              href="https://github.com/mansurbekergashov/my-team"
              className="w-full"
              target="_blank"
            >
              <Github className="inline-block mr-1.5 mb-1" /> GitHub
            </a>
          </Button>
          <Button className="w-full">
            <a
              href="https://my-team-by-ergashov.netlify.app/"
              className="w-full"
              target="_blank"
            >
              Ko'rish
              <ArrowUpRight className="inline-block ml-2 mb-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>

      <Card className="relative mx-auto w-full mt-18">
        <div className="absolute inset-0 z-30 aspect-video " />
        <img
          src={akademnashr}
          alt="Akademnashr image"
          className="relative z-20 w-full object-cover brightness-100"
        />
        <CardHeader>
          <CardTitle>Akademnashr</CardTitle>
          <CardDescription>
            Kitob sotib olishingiz uchun mo'ljallangan onlayn do'kon veb-sayti
            (Bu yerda faqat dizayn)
          </CardDescription>
          <div className="flex gap-2 mt-4 -mb-2">
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>JavaScript</Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full">
            <a
              href="https://github.com/mansurbekergashov/amaliyot-akademnashrr"
              className="w-full"
              target="_blank"
            >
              <Github className="inline-block mr-1.5 mb-1" /> GitHub
            </a>
          </Button>
          <Button className="w-full">
            <a
              href="https://me-akademnashr-project.netlify.app/"
              className="w-full"
              target="_blank"
            >
              Ko'rish
              <ArrowUpRight className="inline-block ml-2 mb-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
