import styled from "styled-components";

export const HeroStyle = styled.div`
  padding: 4rem;
  color: #ffff;
`;

export const BackgroundImage = styled.div`
  background: url("https://res.cloudinary.com/tabim/image/upload/v1662923781/TSS-Pages/hero-image_zroia6.jpg")
    0 0 no-repeat fixed;

  background-size: cover;
  overflow: hidden;

  z-index: 0;
`;

export const BackgroundImageOverlay = styled.div`
  background: rgba(40, 67, 184, 0.82);
  overflow: hidden;
  z-index: 2;
`;

export const HeroTextCards = styled.div`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border-width: 0.8rem 0.8rem 0.8rem 0.8rem;
  border-style: solid;
  border-color: #ffffff;
  padding: 1rem;
  word-wrap: break-word;
  height: 10rem;
`;
