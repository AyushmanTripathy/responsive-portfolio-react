import styled from "styled-components";

import Back from "../stuff/skill_back2.svg";

export const Wrapper = styled.section`
  height: fit-content;
  width: 100vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-image: url(${Back});
  padding-top:10px;
  padding-bottom:80px;

  h2 {
    text-align: center;
    font-weight: 800;
    font-size: 1.6rem;
    span {
      color: var(--dark_black);
      border-bottom: 2px solid var(--dark_black);
    }
  }

  .skill-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding:5%;
    gap:5%;
  }

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
      padding:5%;

      .icon {
        font-size: 4.2rem;
      }

      h3 {
        font-size: 1.4rem;
      }
    }

  @media screen and (min-width: 480px) and (max-width: 1080px) {
    .skill-container {
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 480px) {
    .skill-container {
      grid-template-rows: 1fr;
      grid-template-columns: auto;
    }
  }
`;
