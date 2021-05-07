import styles from "./styles.module.scss";

export function SectionAbout({ secaoSobre }) {
  return (
    <section className={styles.sectionAbout}>
      <div className={styles.about}>
        <h2>{secaoSobre.titulo}</h2>
        <p>{secaoSobre.paragrafoSobre}</p>
      </div>

      <div className={styles.videoMobile}>
        <iframe src={secaoSobre.urlVideoInstitucional} allowFullScreen></iframe>
      </div>
      <div className={styles.videoDesktop}>
        <iframe
          width="560"
          height="315"
          src={secaoSobre.urlVideoInstitucional}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.numbers}>
        {secaoSobre.dadosReprograma.map((item, index) => (
          <div key={index}>
            <h3>{item.valorDado}</h3>
            <p>{item.rotuloDado}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
