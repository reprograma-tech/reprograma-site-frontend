import Head from "next/head";
import { Banner } from "../components/Banner";
import { SectionScenario } from "../components/SectionScenario";
import { SectionAbout } from "../components/SectionAbout";
import { SectionTestimony } from "../components/SectionTestimony";
import { SectionTeam } from "../components/SectionTeam";
import { SectionPartners } from "../components/SectionPartners";
import { SectionCourses } from "../components/SectionCourses";
import client from "../graphql/client";
import GET_HOME from "../graphql/queries/getHome";

export default function Home({
  banner,
  secaoCenario,
  secaoSobre,
  secaoDepoimentos,
  secaoTime,
  secaoParcerias,
  secaoCursos
}) {
  return (
    <>
      <Head>
        {" "}
        <title>{"{reprograma} | Home"}</title>
      </Head>
      <Banner banner={banner} />
      <SectionScenario secaoCenario={secaoCenario} />
      <SectionAbout secaoSobre={secaoSobre} />
      <SectionTestimony secaoDepoimentos={secaoDepoimentos} />
      <SectionTeam secaoTime={secaoTime} />
      <SectionPartners secaoParcerias={secaoParcerias}/>
      <SectionCourses secaoCursos={secaoCursos}/>
    </>
  );
}

export const getStaticProps = async () => {
  const {
    home: banner,
    home: secaoCenario,
    home: secaoSobre,
    home: secaoDepoimentos,
    home: secaoTime,
    home: secaoParcerias,
    home: secaoCursos
  } = await client.request(GET_HOME);

  return {
    props: {
      ...banner,
      ...secaoCenario,
      ...secaoSobre,
      ...secaoDepoimentos,
      ...secaoTime,
      ...secaoParcerias,
      ...secaoCursos
    }
  };
};
