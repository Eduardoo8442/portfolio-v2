import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold text-center text-green-400 mb-10 border-b-4 border-green-400 pb-4">
        Meus Projetos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Projeto 1 */}
        <div className="bg-blue-900 p-6 rounded-lg shadow-lg relative overflow-hidden transform hover:scale-105 transition-transform duration-300 group">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-all duration-500 group-hover:opacity-50 group-hover:transition-all"></div>
          
          <h3 className="text-white text-2xl font-semibold mb-4">Rocket.A</h3>
          <p className="text-gray-200 mb-4">
            Uma plataforma de interação online onde você pode fazer amigos, com as funcionalidades que uma plataforma do tipo teria.
          </p>
          <div className="group relative">
            <a
              href="https://github.com/Eduardoo8442/Rocket.A-client"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition duration-200"
            >
              <FaGithub className="mr-2" />
              Ver no GitHub
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </div>
        </div>

        {/* Projeto 2 */}
        <div className="bg-blue-900 p-6 rounded-lg shadow-lg relative overflow-hidden transform hover:scale-105 transition-transform duration-300 group">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-all duration-500 group-hover:opacity-50 group-hover:transition-all"></div>
          
          <h3 className="text-white text-2xl font-semibold mb-4">Jogo</h3>
          <p className="text-gray-200 mb-4">
            Um jogo multiplayer de acertar palavras, onde você pode criar uma sala privada para jogar com seus amigos.
          </p>
          <div className="group relative">
            <a
              href="https://github.com/Eduardoo8442/Jogo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition duration-200"
            >
              <FaGithub className="mr-2" />
              Ver no GitHub
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </div>
        </div>

        {/* Projeto 3 */}
        <div className="bg-blue-900 p-6 rounded-lg shadow-lg relative overflow-hidden transform hover:scale-105 transition-transform duration-300 group">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-all duration-500 group-hover:opacity-50 group-hover:transition-all"></div>
          
          <h3 className="text-white text-2xl font-semibold mb-4">Portfólio</h3>
          <p className="text-gray-200 mb-4">
            Meu portfólio antigo, com tecnologias menos usadas, como styled components. Além de ser "React puro".
          </p>
          <div className="group relative">
            <a
              href="https://eduardoport.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-400 hover:text-green-300 transition duration-200"
            >
              <FaGithub className="mr-2" />
              Ver no GitHub
            </a>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
