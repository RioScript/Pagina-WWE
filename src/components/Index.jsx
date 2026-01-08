import { Link } from "react-router-dom";
export default function Index() {
    return (
        <>
            <section className="hero">
                <h1 className="hero-title reveal delay-1">WWE</h1>

                <p className="hero-text reveal delay-2">
                    Movimientos personales y remates de 15 luchadores de la WWE
                </p>

                <Link to="/superstars" className="hero-btn">
                    Entrar al ring
                </Link>
            </section>
        </>

    )
}