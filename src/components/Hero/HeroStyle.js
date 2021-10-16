import styled from "styled-components";

import Back from "../stuff/back_try2.svg";

export const HeroWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  background-image: url(${Back});
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 60px 220px; // top-bottom left-rigth
    justify-content: center;
    color: var(--white);

    .text {
      padding-top: 110px;
    }
    .upper_text {
      font-size: 19px;
      margin: 0px;
      font-weight: 300;
      line-height: 150%;
    }

    .name_text {
      margin: -4px 0px;
      font-size: 3rem;
      font-weight: 900;
      padding-bottom: 0.5rem;
    }

    .bottom_text {
      font-size: 1.3rem;
      padding-bottom: 3.9rem;
    }

    .button {
      background: linear-gradient(
        134deg,
        rgb(106, 152, 240) 0%,
        rgb(73, 97, 220) 99%
      );
      color: var(--white);
      padding: 0.79rem 2rem;
      border-radius: 7px;
      text-decoration: none;
      cursor: pointer;
      font-weight: 400;
    }

    .social_icon {
      padding-top: 3.7rem;
      font-size: 1.5rem;
      .icon {
        color: var(--dark_blue);
        margin-right: 2rem;

        &:hover {
          color: var(--white);
          font-size: 1.7rem;
          transition: 0.2s ease;
        }
      }
    }
  }

  @media (max-width: 900px) {
    background-color: black;

    .extras {
      .cards {
        flex-direction: column;
      }
    }
  }
`;
