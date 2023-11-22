import { Slider } from "./Slider";

export const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="project-container">
        <h4 className="project-title">Projetos</h4>
        <p className="link-project">
          Clique na <strong>imagem</strong> para ir ao projeto.
        </p>
        <Slider></Slider>
      </div>
    </div>
  );
};
