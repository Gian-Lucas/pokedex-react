import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  background: #eee;

  .logo {
    text-decoration: none;
    color: #000;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: row;
  }

  .favorites {
    text-decoration: none;
    color: #000;
    font-size: 1.4rem;
  }
`;
