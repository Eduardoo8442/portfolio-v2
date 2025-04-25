import { useEffect, useState, useRef } from "react";

export default function ShowNewBlog() {
    const [show, setShow] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true); // em 4 segundos vai aparecer para o usuário sobre meu blog
        }, 4000);
        return () => clearTimeout(timer);
    }, []);

    const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            setShow(false);
        }
    };

    return (
        <>
            {show && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    onClick={handleClickOutside}
                >
                    {/* Fundo escuro */}
                    <div className="fixed inset-0 bg-black opacity-60"></div>

                    {/* Modal */}
                    <div
                        ref={modalRef}
                        className="relative z-50 bg-[#1e293b] text-white p-6 rounded-2xl shadow-lg w-[90%] max-w-md text-center animate-pop"
                    >
                        <h2 className="text-2xl font-bold mb-2 text-green-300">
                            Novo por aqui! 📢
                        </h2>
                        <p className="mb-4 text-lg">
                            Agora temos um <strong>blog pessoal do dev</strong> no portfólio!
                            Dicas, projetos e experiências direto do código.
                        </p>
                        <a
                            href="/blog"
                            className="inline-block px-6 py-2 bg-green-400 text-gray-900 font-semibold rounded-lg hover:bg-green-300 transition"
                        >
                            Acessar o blog
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
