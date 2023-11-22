import { skills, dev } from "../data/skills";

export const Skills = () => {
  const abilities = skills.map((item) => {
    return (
      <div className="iconSkill">
        <img
          className="imgIcon"
          key={item.id}
          src={item.img}
          title={item.name}
        />
      </div>
    );
  });

  const deve = dev.map((item) => {
    return (
      <div className="iconSkill">
        <img
          className="imgIcon"
          key={item.id}
          src={item.img}
          title={item.name}
        />
      </div>
    );
  });

  return (
    <section id="skills" className="skills">
      <div className="skill-container">
        <div className="sc">
          <h3 className="skill-h3">Habilidades</h3>
          <div className="icons">{abilities}</div>
        </div>
        <div className="sc">
          <h3 className="skill-h3">Em desenvolvimento</h3>
          <div className="icons">{deve}</div>
        </div>
      </div>
    </section>
  );
};
