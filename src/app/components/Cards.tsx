import { fazendas } from "../data/fazendas";
import "./Cards.css";

export default function Cards() {
    return (
        <section className="cards-section">

            <main className="cards-container">
                {fazendas.map((product, index) => (
                    <div key={index} className="card">
                        <div className="card-content">
                            <div className="card-info">
                                <h3 className="card-title">{product.title}</h3>
                                <img className="card-image" src={product.image} />
                            </div>
                            <div className="card-details">
                                <p className="card-subtitle">{product.subtitle}</p>
                                <a href="/login">
                                    <div className="card-subinfo">
                                        <img className="card-image2" src={product.image2} />
                                        <p className="card-item">{product.item}</p>
                                    </div>
                                    <p className="card-description">{product.description}</p>
                                </a>
                            </div>
                        </div>
                        <button className="card-button">Adicionar plantação</button>
                    </div>
                ))}
            </main>
        </section >
    );
}