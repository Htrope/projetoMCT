import "./styles.css";
import hero from"../../assets/newHeroMCT.png"
export default function Hero() {
  return (
  <div >
    <img className="imgHero" src={hero} alt=""/>
  </div>
  );
}
