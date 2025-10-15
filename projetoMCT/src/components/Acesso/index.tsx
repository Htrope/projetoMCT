import "./styles.css";

export default function Acesso() {
  return (
    <section className="acesso">
      <h2 className="acesso-titulo">
        O QUE VOCÊ VAI TER <span>ACESSO</span>
      </h2>

      <div className="acesso-lista">
        <div className="acesso-item">
          <p>
            <span>4 horas de aula semanal</span> com o Professor Trope,
            explicando passo a passo as principais questões e estratégias que
            mais aparecem no ENEM.
          </p>
        </div>

        <div className="acesso-item">
          <p>
            <span>3 listas exclusivas de exercícios</span> por matéria, com
            resolução comentada e foco nos conteúdos que mais caem na prova.
          </p>
        </div>

        <div className="acesso-item">
          <p>
            <span>2 horas de monitorias diárias</span> para tirar dúvidas,
            revisar assuntos e acompanhar seu progresso, quantas vezes quiser
            durante a semana.
          </p>
        </div>

        <div className="acesso-item">
          <p>
            <span>Simulados inéditos</span>, provas anteriores, aulões, listas
            de revisão e materiais extras para garantir sua nota máxima.
          </p>
        </div>
      </div>
    </section>
  );
}
