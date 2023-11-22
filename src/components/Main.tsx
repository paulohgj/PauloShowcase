import { icons } from "../data/icons";

export const Main = () => {
  const icon = icons.map((item) => {
    return (
      <a key={item.id} className="link-icons" target="_blank" href={item.link}>
        <img className="icons" src={item.img} title={item.name} />
      </a>
    );
  });

  return (
    <main id="main" className="main">
      <section className="section-title">
        <div className="title">
          <p className="presentation-title">Olá, sou</p>
          <h1 className="name">Paulo Henrique</h1>
          <p className="profession">Desenvolvedor Front-end</p>
          <div className="social">{icon}</div>
        </div>
        <div className="img-container">
          <img className="img" src="./src/img/technologies.png" />
        </div>
      </section>
    </main>
  );
};
