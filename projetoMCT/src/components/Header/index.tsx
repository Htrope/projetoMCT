import "./styles.css";
import logo from"../../assets/logoMCT.png"
export default function Header() {
  return (
    <header className="header">
      <div className="logo"><img src={logo} alt="" /></div>
      <nav className="nav">
        <a href="#home"></a>
        <a href="#sobre"></a>
        <a href="#contato"></a>
      </nav>
    </header>
  );
}
