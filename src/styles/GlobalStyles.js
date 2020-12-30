import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

  body {
    font-size: 1rem;
    font-family: 'Lato', sans-serif;
    width: 100%;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  h1 {
    font-size: 1.6rem;

    @media (min-width: 576px) {
      font-size: 2rem;
    }


    @media (min-width: 576px) {
      font-size: 2.15rem;
    }

    @media (min-width: 768px) {
      font-size: 2.4rem;
    }
  }

  h2 {
    font-size: 1.8rem;

    @media (min-width: 576px) {
      font-size: 2.25rem;
    }

    @media (min-width: 768px) {
      font-size: 3.5rem;
    }

    @media (min-width: 1024px) {
      font-size: 4rem;
    }
  }


  h3 {
    font-size: 1.8rem;

    @media (min-width: 576px) {
      font-size: 2.25rem;
    }

    @media (min-width: 768px) {
      font-size: 2.8rem;
    }
  }

  p {
    font-size: 1.45rem;
    line-height: 2.9rem;

    @media (min-width: 576px) {
      font-size: 1.8rem;
      line-height: 3.6rem;
    }

    @media (min-width: 768px) {
    font-size: 1.5rem;
    line-height: 3.4rem;
    }

    @media (min-width: 1200px) {
    font-size: 1.8rem;
    line-height: 3.6rem;
  }
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
