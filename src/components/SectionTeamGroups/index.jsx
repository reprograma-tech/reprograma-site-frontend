import styles from "./styles.module.scss";
import { getImageUrl } from "../../utils/getImageUrl";

export function SectionTeamGroups({ grupos }) {
  return (
    <>
      <svg class="defs-only">
        <filter
          id="monochrome"
          color-interpolation-filters="sRGB"
          x="0"
          y="0"
          height="100%"
          width="100%"
        >
          <feColorMatrix
            type="matrix"
            values="0.60 0 0 0 0.40 
              0.87 0 0 0  0.13  
              0.54 0 0 0  0.46 
                0  0 0 1  0"
          />
        </filter>
      </svg>
      <section className={styles.sectionTeamGroups}>
        {grupos.map((grupo) => (
          <div key={grupo.nomeGrupo} className={styles.group}>
            <h2>{grupo.nomeGrupo}</h2>
            <div className={styles.cards}>
              {grupo.equipes.map((item, index) => (
                <div
                  className={styles.card}
                  key={index}
                >
                  
                  <div className={styles.cardFront}
                    style={{
                      backgroundImage: "url(" + getImageUrl(item.foto.url) + ")",
                    }}
                  >
                    <span className={styles.colorLayer} />
                    <span className={styles.cardPlus}>+</span>
                    <div>
                      <p>{item.nome}</p>
                      <span className={styles.function}>{item.funcao}</span>
                    </div>
                  </div>
                  <div className={styles.cardBack}>
                    <p class="team-title">
                      Contato:{" "}
                      <a
                        href="https://www.LinkedIn.com/in/mariel-reyes-milk-0a138663"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
      <div className={styles.join}>
        <div className={styles.joinImg}>
          <img
            alt="foto das alunas juntas sorrindo com os braços para cima"
            className={styles.responsive}
            src="assets/img/join-foto.png"
          />
        </div>
        <div className={styles.joinText}>
          <h3>Faça parte desse time</h3>
          <div className={styles.joinOptions}>
            <div className={styles.joinOption1}>
              <p>
                {`Quer ajudar a reduzir o gap de gênero no setor de tecnologia e
                mudar o mundo? Junte-se a nós :)`}
              </p>
              <a
                href="https://reprograma.typeform.com/to/hLT0stvN"
                target="_blank"
              >
                <button type="button" className={styles.btnPurple}>
                  Vem fazer parte
                </button>
              </a>
            </div>
            <div className={styles.joinOption2}>
              <p>
                Sem tempo mas ainda quer ajudar? Faça uma doação via paypal e
                apoie a iniciativa!{" "}
              </p>
              <form
                action="https://www.paypal.com/cgi-bin/webscr"
                method="post"
                target="_top"
                className={styles.btn}
              >
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input
                  type="hidden"
                  name="hosted_button_id"
                  value="NSZZUNGJ8A296"
                />
                <input
                  type="image"
                  src="assets/img/btn-paypal.png"
                  border="0"
                  name="submit"
                  alt="PayPal - A maneira fácil e segura de enviar pagamentos online!"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
