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

  img {
    width: 90%;
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
