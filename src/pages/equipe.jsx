import Head from "next/head";
import client from "../graphql/client";
import GET_EQUIPE from "../graphql/queries/getEquipe";
import { Banner } from "../components/Banner";
import { SectionIntro } from "../components/SectionIntro";
import { SectionTeamGroups } from "../components/SectionTeamGroups";

export default function Equipe({ banner, intro, grupos }) {
  return (
    <>
      <Head>
        <title>{"{reprograma} | Equipe"}</title>
      </Head>
      <Banner banner={banner} />
      <SectionIntro intro={intro} />
      <SectionTeamGroups grupos={grupos} />
    </>
  );
}

Equipe.getInitialProps = async (ctx) => {
  const { paginaEquipe } = await client.request(GET_EQUIPE);

  console.log(paginaEquipe);

  return {
    banner: paginaEquipe.EquipeBanner,
    intro: paginaEquipe.Intro,
    grupos: paginaEquipe.EquipeGrupo,
  };
};
