import { gql } from "graphql-request";

const GET_HOME = gql`
query GET_HOME {
  home {
    banner {
      titulo
      subtitulo
      imagemFundo {
        url
      }
      button {
        rotuloBotao
        descricaoAcessivel
        variante
        url
      }
    }
    secaoCenario {
      CenarioItem {
        cenarioImagem {
          url
          alternativeText
        }
        cenarioInfo
        fonte
      }
    }
    secaoSobre {
      titulo
      paragrafoSobre
      urlVideoInstitucional
      dadosReprograma {
        rotuloDado
        valorDado
      }
    }
    secaoDepoimentos {
      depoimentoAluna {
        fotoAluna {
          url
        }
        depoimento
        nomeAluna
        turma
      }
    }
    secaoTime {
      titulo
      descricao
      imagem {
        url
        alternativeText
      }
      button {
        rotuloBotao
        url
        variante
      }
    }
    secaoParcerias {
      titulo
      descricao
      parceiros {
        logo {
          url
        }
        nome
      }
    }
    secaoCursos {
      titulo
      cursos {
        tipo
        titulo
        tituloSecundario
        descricao
        linkCurso {
          rotuloBotao
          descricaoAcessivel
          url
        }
      }
    }
  }
}
`;

export default GET_HOME;
