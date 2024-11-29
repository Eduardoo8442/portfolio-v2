import { FaLinkedin, FaGithub, FaInstagram, FaBehance } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
export default function AboutUs() {
    return (
        <div className="bg-gray-800 p-10 rounded-lg shadow-lg max-w-6xl mx-auto border-r-4 border-green-400">
            {/* Seção de Introdução */}
            <h2 className="text-green-400 text-lg font-semibold uppercase mb-2 tracking-wide">Quem sou</h2>
            <h1 className="text-white text-4xl font-bold mb-2">Eduardo</h1>
            <h3 className="text-gray-400 text-lg font-medium mb-6">Engenheiro de Sistemas</h3>

            {/* Descrição */}
            <p className="text-gray-300 text-base leading-relaxed mb-6">
                Olá! Meu nome é Eduardo, sou apaixonado por tecnologia e especializado no desenvolvimento de APIs e sistemas backend.
                Meu foco é criar soluções eficientes, seguras e escaláveis, garantindo alta performance e qualidade.
            </p>

            {/* Habilidades */}
            <div className="mb-6">
                <h3 className="text-green-400 text-xl font-semibold mb-4">Habilidades</h3>
                <ul className="text-gray-300 text-base list-disc ml-6 space-y-2">
                    <li>Desenvolvimento Backend com Fastify e MySQL</li>
                    <li>APIs RESTful e autenticação JWT</li>
                    <li>Integração com React e Tailwind CSS</li>
                    <li>Otimização de performance e escalabilidade</li>
                </ul>
            </div>

            {/* Redes Sociais */}
            <div>
                <h3 className="text-green-400 text-xl font-semibold mb-4">Conecte-se comigo</h3>
                <div className="flex space-x-6">
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 text-3xl hover:text-green-300 transition transform hover:scale-110"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/eduardoo8442"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 text-3xl hover:text-green-300 transition transform hover:scale-110"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://instagram.com/eduardoo8442"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 text-3xl hover:text-green-300 transition transform hover:scale-110"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://discord.com/users/347853688649547776"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 text-3xl hover:text-green-300 transition transform hover:scale-110"
                    >
                        <FaDiscord />
                    </a>
                </div>
            </div>
        </div>
    );
}
