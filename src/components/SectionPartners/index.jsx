import styles from "./styles.module.scss";
import { LinkButton } from "../LinkButton";
import { getImageUrl } from "../../utils/getImageUrl";

export function SectionPartners({ secaoParcerias }) {
  return (
    <section id="partners" className={styles.sectionPartners}>
      <div className={styles.partnersText}>
        <h3>{secaoParcerias.titulo}</h3>
        <p>{secaoParcerias.descricao}</p>
        <LinkButton label="Saiba Mais" variant="outlined" to="/parcerias" />
      </div>
      <div className={styles.partnersLogos}>
        {secaoParcerias.parceiros.map((parceiro, index) => (
          <img key={index}
            alt={`logo ${parceiro.nome}`}
            src={getImageUrl(parceiro.logo.url)}
          />
        ))}
      </div>
    </section>
  );
}
