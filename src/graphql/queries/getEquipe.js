import { gql } from "graphql-request";

const GET_EQUIPE = gql`
  query GET_EQUIPE {
    paginaEquipe {
      EquipeBanner {
        titulo
        imagemFundo {
          url
        }
      }
      Intro {
        titulo
        descricao
      }
      EquipeGrupo {
        nomeGrupo
        equipes {
          nome
          funcao
          profissao
          linkedin
          foto{
            url
          }
        }
      }
    }
  }
`;

export default GET_EQUIPE;
