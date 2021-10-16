import styled from "styled-components";
import Back from "../stuff/about_back3.svg";

export const Wrapper = styled.section`
  width: 100vw;
  height: 50vh;
  color: var(--white);
  background-image: url(${Back});
  display: flex;
  justify-content: space-around;
  gap: 40px;
  padding: 0 80px;

  .info {
    color: var(--white);
    .title {
      padding-top: 1.8rem;
      padding-bottom: 1rem;
      text-align: center;
      font-weight: 800;
      font-size: 1.8rem;
      span {
        border-bottom: 3px solid var(--light_blue);
      }
    }
    .desc {
      font-size: 1rem;
      font-weight: 300;
    }

    .link {
      text-decoration: none;
      color: var(--light_blue);
      font-weight: 300;
      line-height: 4rem;

      .icon {
        color: var(--light_blue);
        padding-top: 0.3rem;
      }

      &:hover {
        color: var(--white);
      }
    }
  }

  .image-container {
    padding-top: 2rem;
    .image {
      width: 260px;
    }
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
    display: grid;
    text-align: center;
    grid-row-gap: 20px;
  }
`;
