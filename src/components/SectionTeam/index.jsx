import styles from "./styles.module.scss";
import { LinkButton } from "../LinkButton";
import { getImageUrl } from "../../utils/getImageUrl";

export function SectionTeam({ secaoTime }) {
  return (
    <section className={styles.sectionTeam}>
      <img
        alt="Imagem de alunas, duas em primeiro plano se cumprimentando"
        className="responsive"
        src={getImageUrl(secaoTime.imagem.url)}
      />
      <div className={styles.teamBlock}>
        <h3>{secaoTime.titulo}</h3>
        <p>{secaoTime.descricao}</p>

        {secaoTime.button.map((button, index) => (
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
