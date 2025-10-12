import SmartCursor from "@/components/SmartCursor";
import Image from "next/image";

export default function BlogScreen() {
  return (
    <main id="blog" className="flex px-10 items-center justify-center min-h-screen gap-20 cursor-none">
      <SmartCursor areaId="blog" />

      <div>
        <h1>Blog</h1>
        <span>Ideias, insights e reflexões sobre tecnologia e inovação.</span>
      </div>


      <section>
        <h2>Artigos em destaque</h2>
        <div>
          <div>
            <img src="/banner.png" alt="Capa do artigo" />
            <h3>O futuro da tecnologia: tendencias e inovações</h3>
            <time>10 de maio de 2024</time>
            <p>Explore as últimas tendencias tecnológicas que estão moldando o futuro, desde inteligencia artificial até computação quantica.</p>
          </div>
          <div>
            <img src="/banner.png" alt="Capa do artigo" />
            <h3>O futuro da tecnologia: tendencias e inovações</h3>
            <time>10 de maio de 2024</time>
            <p>Explore as últimas tendencias tecnológicas que estão moldando o futuro, desde inteligencia artificial até computação quantica.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Artigos recentes</h2>
        <div>
          <div>
            <h3>O futuro da tecnologia: tendencias e inovações</h3>
            <time>10 de maio de 2024</time>
            <p>Explore as últimas tendencias tecnológicas que estão moldando o futuro, desde inteligencia artificial até computação quantica.</p>
          </div>
          <div>
            <h3>O futuro da tecnologia: tendencias e inovações</h3>
            <time>10 de maio de 2024</time>
            <p>Explore as últimas tendencias tecnológicas que estão moldando o futuro, desde inteligencia artificial até computação quantica.</p>
          </div>
          <div>
            <h3>O futuro da tecnologia: tendencias e inovações</h3>
            <time>10 de maio de 2024</time>
            <p>Explore as últimas tendencias tecnológicas que estão moldando o futuro, desde inteligencia artificial até computação quantica.</p>
          </div>
          <div>
            <h3>O futuro da tecnologia: tendencias e inovações</h3>
            <time>10 de maio de 2024</time>
            <p>Explore as últimas tendencias tecnológicas que estão moldando o futuro, desde inteligencia artificial até computação quantica.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
