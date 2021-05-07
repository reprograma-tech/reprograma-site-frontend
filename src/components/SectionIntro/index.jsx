import styles from "./styles.module.scss";

export function SectionIntro({ intro }) {
  return (
    <section className={styles.sectionIntro}>
      <div className={styles.intro}>
        <h2>{intro.titulo}</h2>
        <p>{intro.descricao}</p>
      </div>
    </section>
  );
}
