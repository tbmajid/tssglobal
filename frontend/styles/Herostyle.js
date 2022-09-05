import styled from "styled-components";

export const HeroStyle = styled.div`
  padding: 2rem;
  color: #ffff;
`;

export const BackgroundImage = styled.div`
  background: url("https://tssglobal.74by4.com/wp-content/uploads/2021/04/9o8ydygtt64.jpg")
    0 0 no-repeat fixed;

  background-size: cover;
  overflow: hidden;
  max-width: 1300px;
  z-index: 0;
  /* opacity: 0.6; */
  /* background-color: #253ebb;
  background-blend-mode: multiply; */
`;

export const BackgroundImageOverlay = styled.div`
  background: rgba(40, 67, 184, 0.82);
  overflow: hidden;
  max-width: 1300px;
  z-index: 2;
`;
