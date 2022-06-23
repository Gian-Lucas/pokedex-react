import styled from "styled-components";

interface ContainerProps {
  bg?: string;
}

export const Container = styled.div<ContainerProps>`
  main {
    padding-top: 2rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 2rem;

    background: ${(props) => props.bg};

    .poke {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 0 2rem;

      header {
        width: 100%;
        display: flex;
        justify-content: space-between;

        div {
          img {
            max-width: 3rem;
          }

          .mg {
            margin-left: 0.7rem;
          }
        }
      }

      img {
        max-width: 90vw;
      }
    }

    .info {
      text-align: center;

      table {
        th {
          text-align: start;
          background: #ccc;
          padding: 1rem;
        }

        td {
          font-weight: 500;
          text-align: start;
          vertical-align: center;
          background: #ddd;
          padding: 1rem;

          img {
            margin-left: 0.5rem;
            width: 5rem;
          }
        }
      }
    }
  }

  section.evolutions {
    margin-top: 2rem;
    text-align: center;

    .cards {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  @media (max-width: 800px) {
    main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
