import styles from "./styles.module.scss";
import { LinkButton } from "../LinkButton";

export function SectionCourses({ secaoCursos }) {
  return (
    <section id="cursos" className={styles.sectionCourses}>
      <h2 className={styles.sectionTitle}>{`${secaoCursos.titulo} {`}</h2>
      <div className={styles.nextCourses}>
        {secaoCursos.cursos.map((curso, index) => (
          <div key={index} className={styles.course}>
            <p className={styles.courseSubtitle}>{curso.tipo}</p>
            <h3>{curso.titulo}</h3>
            <h4>{curso.tituloSecundario}</h4>
            <p className={styles.courseInfo}>
              {curso.descricao}
            </p>
            <LinkButton
              label={curso.linkCurso.rotuloBotao}
              variant="white"
              to={curso.linkCurso.url}
            />
          </div>
        ))}
      </div>

      <span className={styles.sectionTitle}>{"}"}</span>
    </section>
  );
}
