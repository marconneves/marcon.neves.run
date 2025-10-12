import SmartCursor from "@/components/SmartCursor";
import { Button } from "@/components/ui/button";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { LuMail, LuPhone } from "react-icons/lu";

export default function ContactScreen() {
  return (
    <main id="contact" className="flex px-10 items-center justify-center min-h-screen gap-20 cursor-none">
      <SmartCursor areaId="contact" />

      <div>
        <header>
          Nova Mensagem
        </header>
        <body>
            <div>
              <span>Para:</span> <span>marcon@neves.run</span>
            </div>
            <div>
              <span>Assunto:</span> 
            </div>
            <div>
              <span>Sua Mensagem...</span> 
            </div>
        </body>
        <footer>
          <Button>Enviar</Button>
        </footer>
      </div>

      <div className="w-full h-[1.5px] bg-gray-800" />
      <footer>
        <div>
          <span><LuMail /> marcon@neves.run</span>
          <span><LuPhone /> (66) 99695-6402</span>
        </div>
        <div>
          <button>
            <IoLogoLinkedin />
          </button>
          <button>
            <IoLogoGithub/>
          </button>
        </div>
      </footer>
    </main>
  )
}
