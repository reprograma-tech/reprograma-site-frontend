import styles from "./styles.module.scss";
import { LinkButton } from "../LinkButton";
import { getImageUrl } from "../../utils/getImageUrl";

export function Banner({ banner }) {
  return (
    <section className={styles.banner} style={{ backgroundImage: "url(" + getImageUrl(banner.imagemFundo.url) + ")" }}>
      <div className={styles.bannerContent}>
        <h1>{banner.titulo}</h1>
        {banner.subtitulo && <p>{banner.subtitulo}</p>}
        {banner.button && banner.button.map((button, index) => (
          <LinkButton
            key={index}
            label={button.rotuloBotao}
            aria-label={button.descricaoAcessivel}
            variant={button.variante ? button.variante : ""}
            to={button.url}
          />
        ))}
      </div>
    </section>
  );
}
