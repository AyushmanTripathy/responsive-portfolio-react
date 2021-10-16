import styled from "styled-components";

import Back from "../stuff/skill_back2.svg";

export const Wrapper = styled.section`
  height: 50vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-image: url(${Back});

  h2 {
    text-align: center;
    padding: 2rem 1rem;
    font-weight: 800;
    font-size: 1.6rem;
    span {
      color: var(--dark_black);
      border-bottom: 2px solid var(--dark_black);
    }
  }

  .skill-container {
    display: flex;
    justify-content: center;
    gap: 40px;

    .skill-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: var(--light_blue);
      text-align: center;
      background: linear-gradient(
        to right,
        var(--light_black),
        var(--dark_black)
      );
      border-radius: 10px;
      width: 200px;
      height: 200px;

      .icon {
        font-size: 4.2rem;
      }

      h3 {
        font-size: 1.4rem;
      }
    }
  }

  @media screen and (max-width: 1000px) {
    height: 70vh;
    .skill-container {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;
