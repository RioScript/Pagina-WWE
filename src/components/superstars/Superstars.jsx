import "./Superstars.css";
import superstars from "../../data/superstars-data";

export default function Superstars() {
  return (
    <section className="superstars">
      <ul className="brand">
        <li><span className="brand-color raw"></span> Pertenece a Raw</li>
        <li><span className="brand-color smackdown"></span> Pertenece a SmackDown</li>
        <li><span className="brand-color legend"></span> Pertenece a las Leyendas</li>
      </ul>

      <div className="superstars-grid">
        {superstars.map((s) => (
          <div key={s.id} className={`superstar-card ${s.color}`}>
            <img src={s.img} className="superstar-img" />
            <div className="superstar-name">{s.name}</div>
          </div>
        ))}
      </div>
    </section>

  );
}
