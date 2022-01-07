import styled from "styled-components";
import { darken } from "polished";
interface ContainerProps {
  color: string;
}

export const Container = styled.div<ContainerProps>`
  border: 3px solid ${(props) => props.color};
  border-radius: 1.5rem;
  width: 12rem;
  margin: 1rem;
  text-align: center;
  background: linear-gradient(transparent 30%, ${(props) => props.color});
  transition: 0.3s;
  :hover {
    background: linear-gradient(
      transparent 0%,
      ${(props) => darken(0.1, props.color)}
    );
    --webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  .image {
    width: 90%;
    cursor: pointer;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${(props) => props.color};
    margin: 0.7rem;
    font-weight: 500;
  }
  .icon {
    transition: 0.2s;
    cursor: pointer;
  }
  .icon:hover {
    color: ${(props) => darken(0.2, props.color)};
  }

  .name {
    margin-bottom: 0.2rem;
    width: 100%;
    color: #fff;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 500;
  }
`;

export const PokemonsDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 95%;
  max-width: 720px;
  margin: 0 auto;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    .types .first {
      margin-right: 0.5rem;
    }

    img {
      width: 2.3rem;
    }

    span {
      font-size: 2rem;
    }
  }

  .body {
    width: 100%;
    text-align: center;
    img {
      width: 14rem;
    }
  }

  .spanEvo {
    font-size: 1.5rem;
  }

  .evolutions {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 1rem;
    img {
      width: 5rem;
    }
  }

  .table {
    img {
      width: 4.5rem;
    }
    .first {
      margin-right: 0.5rem;
    }
  }
`;
