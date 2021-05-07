import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import styles from "./styles.module.scss";
import { getImageUrl } from "../../utils/getImageUrl";

SwiperCore.use([Navigation]);

export function SectionTestimony({secaoDepoimentos}) {
  return (
    <section className={styles.sectionTestimony}>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        loop={true}
        navigation={true}
      >
        {secaoDepoimentos.depoimentoAluna.map((item, index) => (
          <SwiperSlide key={index}>
          <figure className={styles.testimony}>
            <img src={getImageUrl(item.fotoAluna.url)}/>
            <div>
              <p className={styles.testimonyText}>{item.depoimento}</p>
              <p className={styles.testimonyAuthor}>{item.nomeAluna}</p>
              <p className={styles.testimonyClass}>{item.turma}</p>
            </div>
        </figure>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
