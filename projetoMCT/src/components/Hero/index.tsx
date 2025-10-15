import "./styles.css";
import hero from "../../assets/newHeroMCT.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
     <h2>
  Entenda <span>como a Matemática cai</span> no ENEM<br /><br />
  descubra <span>o que mais aparece</span><br /><br />
  e conquiste sua <span>nota máxima</span>.
</h2>


      </div>

      <div className="hero-img">
        <img className="imgHero" src={hero} alt="Herói do site" />
      </div>
    </section>
  );
}
