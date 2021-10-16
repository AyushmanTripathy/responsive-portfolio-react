import styled from "styled-components";

import Back from "../stuff/project_back.svg";
export const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
  background-image: url(${Back});

  .title {
    font-weight: 800;
    font-size: 1.7rem;
    color: var(--white);
    text-align: center;
    padding-top: 3rem;

    span {
      border-bottom: 3px solid var(--light_blue);
    }
  }

  .cards {
    color: black;
    display: flex;
    flex-direction: row;
    gap: 10px;
    padding: 3rem 10rem;
    justify-content: space-around;

    .card {
      flex-direction: column;
      width: 350px;
      height: 400px;
      border-radius: 10px;
      // box-shadow: 5px 5px 20px var(--white);
      background: linear-gradient(
        to right,
        var(--light_blue),
        var(--dark_blue)
      );
      color: var(--white);
      text-align: center;

      a {
        color: var(--white);
        text-decoration: none;
        font-size: 1rem;

        &:hover {
          color: var(--light_black);
        }
      }

      h1 {
        font-size: 1.2rem;
        font-weight: 800;
      }

      p {
        font-size: 0.8rem;
        font-weight: 300;
      }

      img {
        padding: 0.3rem 0.3rem;
        width: 340px;
        height: 250px;
        border-radius: 20px;
      }
    }
  }

  .links {
    text-align: center;
    .other-project {
      text-decoration: none;
      color: var(--white);
      cursor: pointer;
      text-align: center;
      &:hover {
        color: var(--light_blue);
        cursor: pointer;
      }
    }
  }

  @media screen and (max-width: 1050px) {
    padding-top: 0.2rem;
    height: 230vh;

    .title {
      align-items: center;
    }

    .cards {
      display: grid;
      align-items: center;

      gap: 1rem;
      width: 100%;
    }
  }
`;
