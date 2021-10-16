import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  color: var(--white);
  background-color: grey;

  h1 {
    font-size: 1.8rem;
    font-weight: 800;
    text-align: center;
    span {
      border-bottom: 3px solid var(--dark_blue);
    }
  }

  p {
    font-size: 1.2rem;
    text-align: center;
    padding: 1rem 1rem;
  }

  .social_icon {
    justify-content: center;
    text-align: center;
    font-size: 1.8rem;
    .icon {
      color: var(--dark_black);
      margin-right: 2rem;
    }
  }

  .bottom {
    background-color: var(--dark_black);

    padding: 1.5rem;
    text-align: center;
  }
`;
