import { useEffect, useState } from "react";

export default function Main() {
    const [text, setText] = useState<string>('');
    const [isVisible, setIsVisible] = useState<boolean>(false);

    function handleClick() {
        window.location.href = 'https://github.com/eduardoo8442';
    }

    useEffect(() => {
        setText('');
        const nick = 'Sou um desenvolvedor especializado em backend e APIs. Meu foco é criar sistemas robustos, escaláveis e eficientes, sempre garantindo segurança e performance para aplicações web modernas.';
        let index = 0;
        const intervalNick = setInterval(() => {
            if (index === nick.length - 1) clearInterval(intervalNick);
            setText((prevText) => `${prevText}${nick[prevText.length]}`);
            index++;
        }, 10);

        setIsVisible(true);

        return () => clearInterval(intervalNick);
    }, []);

    return (
        <div className="h-screen flex items-center">
            <div
                className={`transition-all duration-700 ease-out transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } text-white text-lg max-w-2xl mx-auto ml-10 md:ml-36`}
            >
                <p className="text-green-300 font-mono text-lg mb-2">
                    Olá, meu nome é
                </p>
                <h1 className="text-5xl font-bold mb-4">
                    Eduardo. 👋
                </h1>
                <h2 className="text-4xl font-semibold text-gray-300 mb-6">
                    E sou Engenheiro de software.
                </h2>
                <p className="text-gray-400 text-base mb-8">
                    {text}
                    <span className="text-green-300 animate-blink">|</span>
                </p>
                <button onClick={handleClick} className="px-6 py-3 bg-green-300 text-gray-900 rounded-md text-lg font-medium hover:bg-green-400 transition duration-300">
                    Veja meu trabalho
                </button>
            </div>
        </div>
    );
}
