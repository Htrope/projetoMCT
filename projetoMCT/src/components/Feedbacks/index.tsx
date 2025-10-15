import { useState } from "react";
import "./styles.css";

export default function FeedbackCarousel() {
  const feedbacks = [
    {
      nome: "Lucas Andrade",
      curso: "Medicina",
      acertos: "43/45 acertos",
      texto:
        "Antes eu travava nas questões mais difíceis de matemática, mas depois das aulas com o Profe tudo ficou claro! A didática é direta, prática e cheia de macetes. No simulado final acertei 43 de 45 questões, e finalmente entendi como raciocinar rápido.",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
    {
      nome: "Marina Costa",
      curso: "Engenharia Elétrica",
      acertos: "44/45 acertos",
      texto:
        "Eu sempre tive dificuldade com funções e geometria espacial. As aulas me ajudaram a visualizar cada passo e entender o porquê das fórmulas. A plataforma é leve, os exercícios são bem explicados e o acompanhamento faz toda diferença.",
      avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
      nome: "João Henrique",
      curso: "Direito",
      acertos: "42/45 acertos",
      texto:
        "Mesmo sendo de humanas, consegui finalmente pegar gosto por matemática! As explicações são simples, objetivas e com exemplos que realmente caem no ENEM. Recomendo pra qualquer um que quer subir nota rápido sem enrolação.",
      avatar: "https://i.pravatar.cc/100?img=7",
    },
  ];

  const [atual, setAtual] = useState(0);

  const proximo = () => setAtual((prev) => (prev + 1) % feedbacks.length);
  const anterior = () =>
    setAtual((prev) => (prev - 1 + feedbacks.length) % feedbacks.length);

  return (
    <section className="carousel">
      <h2 className="titulo">
        O QUE FALAM SOBRE AS <span>AULAS</span>
      </h2>

      {/* === 3 Cards fixos no Desktop === */}
      <div className="feedback-desktop">
        {feedbacks.map((f, index) => (
          <div className="feedback-card" key={index}>
            <div className="feedback-header">
              <img src={f.avatar} alt={f.nome} className="avatar" />
              <div>
                <h3>{f.nome}</h3>
                <p className="curso">{f.curso}</p>
              </div>
              <span className="acertos">{f.acertos}</span>
            </div>
            <p className="texto">{f.texto}</p>
          </div>
        ))}
      </div>

      {/* === Carrossel Mobile === */}
      <div className="feedback-mobile">
        <div className="carousel-wrapper">
          <button className="seta seta-esquerda" onClick={anterior}>
            ‹
          </button>

          <div className="feedback-card">
            <div className="feedback-header">
              <img
                src={feedbacks[atual].avatar}
                alt={feedbacks[atual].nome}
                className="avatar"
              />
              <div>
                <h3>{feedbacks[atual].nome}</h3>
                <p className="curso">{feedbacks[atual].curso}</p>
              </div>
              <span className="acertos">{feedbacks[atual].acertos}</span>
            </div>
            <p className="texto">{feedbacks[atual].texto}</p>
          </div>

          <button className="seta seta-direita" onClick={proximo}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
