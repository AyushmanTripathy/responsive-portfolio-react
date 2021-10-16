import styled from "styled-components";
/*
//for scroll-behaviour
const head = document.querySelector("main-header");
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 10) {
    head.classList.add("scrolled");
  } else {
    head.classList.remove("scrolled");
  }
});
*/
export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  height: 80px;
  width: 100vw;
  padding: 0 10vw;
  color: var(--white);
  z-index: 1;
  background-color: var(--light_black);

  a {
    text-decoration: none;
  }

  .logo {
    .header {
      color: var(--white);
      margin: 0.2rem;
      padding: 1rem 0.5rem;
      font-size: 1.5rem;
      font-weight: 800;
      margin-right: 3rem;

      &:hover {
        color: var(--light_blue);
      }
    }
  }

  .nav-links {
    display: flex;
    list-style: none;

    .nav-link {
      color: var(--white);
      margin: 0.2rem;
      padding: 1rem 0.5rem;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 400;

      &:hover {
        color: var(--light_blue);
        border-bottom: 2px solid var(--light_blue);
        transition: 0.3s ease;
      }
    }
  }

  .menu-icon {
    position: relative;
    padding: 26px 10px;
    cursor: pointer;
    z-index: 1;
    display: none;

    &__line {
      display: block;
      position: relative;
      background: var(--white);
      height: 2px;
      width: 20px;
      border-radius: 4px;

      &::before,
      &::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 4px;
        background: var(--white);
        transition: background 0.8s ease;
      }

      &::before {
        transform: translateY(-5px);
      }

      &::after {
        transform: translateY(5px);
      }
    }
  }

  //check-box
  .menu-btn {
    display: none;
  }

  //end
  //js -for scroll - change in scroll
  &.scrolled {
    height: 80px;
    background: var(--light_blue);
    color: var(--white);

    .menu-icon {
      &__line,
      &__line::before,
      &__line::after {
        color: var(--white);
      }
    }
  }

  @media screen and (max-width: 690px) {
    //under ipad

    .menu-icon {
      display: block;
    }

    .nav-links {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      padding: 10rem 0;
      width: 100vw;
      height: 100vh;
      font-size: 2rem;
      background: linear-gradient(
        to right,
        var(--light_blue),
        var(--dark_blue)
      );

      transition: opacity 0.8s 0.5s, clip-path 1s 0.5s;
      clip-path: circle(200px at top right);
    }

    .menu-btn:checked ~ .nav-links {
      opacity: 1;
      clip-path: circle(100% at center);
    }
  }

  @media screen and (min-width: 900px) {
    .logo {
      //background-color: black;
      .header {
        margin-left: 3rem;
      }
    }

    .nav-links {
      .nav-link {
        margin-left: 1rem;
      }
    }
  }

  @media screen and (min-width: 1080px) {
    .logo {
      //background-color: green;
      .header {
        padding: 1rem 5.3rem;
      }
    }
    .nav-links {
      .nav-link {
        padding: 1rem 1.3rem;
      }
    }
  }
`;
