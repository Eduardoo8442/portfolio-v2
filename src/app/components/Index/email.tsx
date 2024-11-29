import { useState } from "react";
import {isEmail} from "validator";
export default function Email() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);
  
    if (!email.trim() || !isEmail(email)) {
      setIsError(true);
      setIsSubmitting(false);
      return;
    }
  
    const data = {
      email: email,
      message: message,
    };
  
    try {
      const response = await fetch("https://formspree.io/f/mknldozn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        setIsSuccess(true);
        setEmail('');
        setMessage('');
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error("Erro ao enviar o email:", error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-3xl font-bold text-green-400 mb-8">Fale Comigo</h2>
        <p className="text-lg mb-10">
          Estou aqui para ouvir suas dúvidas ou sugestões. Envie uma mensagem abaixo!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium mb-2">
              Seu email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Digite seu email"
              className="w-full p-4 rounded-md text-gray-900 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-lg font-medium mb-2">
              Sua mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Escreva sua mensagem"
              rows={6}
              className="w-full p-4 rounded-md text-gray-900 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {isSuccess && (
            <p className="text-green-400">Mensagem enviada com sucesso! 😊</p>
          )}
          {isError && (
            <p className="text-red-400">Houve um erro ao enviar sua mensagem. Tente novamente.</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-400 text-white py-3 rounded-md hover:bg-green-500 transition duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
          </button>
        </form>
      </div>
    </div>
  );
}
