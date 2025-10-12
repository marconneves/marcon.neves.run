import SmartCursor from "@/components/SmartCursor";
import { BiShare } from "react-icons/bi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export default function BlogArticleScreen() {
  return (
    <main id="blog-article" className="flex px-10 items-center justify-center min-h-screen gap-20 cursor-none">
      <SmartCursor areaId="blog-article" />
      <article>
        <div>
          <h1>O futuro da tecnologia: tendencias e inovações</h1>
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <span>Por Marcon Neves</span>
            <span>•</span>
            <span>10 de maio de 2024</span>
          </div>
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque harum aspernatur dolor architecto, minima nobis quam commodi cumque.
            Magni similique inventore earum quod adipisci quis laborum commodi laudantium, fugit recusandae.
          </p>

          <h2>Inteligência Artificial (IA) e Aprendizado de Máquina</h2>
          <p>
            Mollit aute laboris adipisicing proident. Ut aute deserunt velit reprehenderit aute ad culpa ea nostrud{' '}
            officia reprehenderit ex. Est consectetur labore aliqua fugiat dolor laboris excepteur in. Occaecat tempor sunt est{' '}
            Lorem proident in deserunt magna. Mollit est veniam veniam qui deserunt pariatur reprehenderit.
          </p>

          <p>
            Mollit aute laboris adipisicing proident. Ut aute deserunt velit reprehenderit aute ad culpa ea nostrud{' '}
            officia reprehenderit ex. Est consectetur labore aliqua fugiat dolor laboris excepteur in. Occaecat tempor sunt est{' '}
            Lorem proident in deserunt magna. Mollit est veniam veniam qui deserunt pariatur reprehenderit.
          </p>

          <code>
            Mollit aute laboris adipisicing proident. Ut aute deserunt velit reprehenderit aute ad culpa ea nostrud{' '}
            officia reprehenderit ex. Est consectetur labore aliqua fugiat dolor laboris excepteur in. Occaecat tempor sunt est{' '}
            Lorem proident in deserunt magna. Mollit est veniam veniam qui deserunt pariatur reprehenderit.
          </code>

          <p>
            Mollit aute laboris adipisicing proident. Ut aute deserunt velit reprehenderit aute ad culpa ea nostrud{' '}
            officia reprehenderit ex. Est consectetur labore aliqua fugiat dolor laboris excepteur in. Occaecat tempor sunt est{' '}
            Lorem proident in deserunt magna. Mollit est veniam veniam qui deserunt pariatur reprehenderit.
          </p>
        </div>
        
        <div className="w-full h-[1.5px] bg-gray-800" />
        <div>
          <button>
            <FaFacebook />
          </button>
          <button>
            <FaInstagram />
          </button>
          <button>
            <FaX />
          </button>
          <button>
            <BiShare />
          </button>
        </div>
      </article>
    </main>
  )
}
