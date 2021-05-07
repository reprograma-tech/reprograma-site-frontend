import styles from "./styles.module.scss";
import {getImageUrl} from "../../utils/getImageUrl";

export function SectionScenario({secaoCenario}) {
  return (
    <section className={styles.sectionScenario}>
      {secaoCenario.CenarioItem.map((item, index) => (
        <figure key={index} className={styles.scenarioItem}>
          <img alt={item.cenarioImagem.alternativeText} src={getImageUrl(item.cenarioImagem.url)} />
          <div dangerouslySetInnerHTML={{__html: `${item.cenarioInfo} <span>[${item.fonte}]</span>`}} />
        </figure>
      ))}
    </section>
  );
}
