import bgImage from "../img/bg-about.jpg";

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="aboutMe">
        <h2 className="about-h2">Sobre Mim</h2>
        <p className="about-p">
          Sou um programador front-end apaixonado por design e criar
          experiências interativas na web. Estou sempre em busca de aprimorar
          minhas habilidades.
        </p>
        <p className="about-p">Cursando Ciências da Computação na Estácio.</p>
      </div>
      <img className="bgImage" src={bgImage} />
    </section>
  );
};
