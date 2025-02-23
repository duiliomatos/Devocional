import { useState } from "react";

const versosBiblicos = [
  "Posso todas as coisas naquele que me fortalece. - Filipenses 4:13",
  "Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna. - João 3:16",
  "Entrega o teu caminho ao Senhor, confia nele e o mais ele fará. - Salmos 37:5",
  "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz e não de mal, para vos dar o fim que esperais. - Jeremias 29:11",
  "O Senhor é o meu pastor; nada me faltará. - Salmos 23:1",
];

function Devocional() {
  const [versoAtual, setVersoAtual] = useState(versosBiblicos[0]);

  const getVerso = () => {
    // Seleciona um índice aleatório do array
    const indiceAleatorio = Math.floor(Math.random() * versosBiblicos.length);
    setVersoAtual(versosBiblicos[indiceAleatorio]);
  };

  return (
    <section >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h3 className="text-2xl text-gray-800 mb-6">
          {versoAtual}
        </h3>
        <button
          onClick={getVerso}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 cursor-pointer"
        >
          Próximo
        </button>
      </div>
    </section>
  );
}

export default Devocional;
