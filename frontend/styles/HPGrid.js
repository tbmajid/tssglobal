import styled from "styled-components";

export const ContainerStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
export const Address = styled.div`
  background-color: #4731d4;
  color: #ffff;
  border-width: 0.8rem 0.8rem 0.8rem 0.8rem;
  border-style: solid;
  border-color: #ffffff;
  padding: 1rem;
  word-wrap: break-word;
  height: 10rem;
`;

export const PhoneEmail = styled.div`
  background-color: #cdf185;
  border-width: 0.8rem 0.8rem 0.8rem 0.8rem;
  border-style: solid;
  border-color: #ffffff;
  padding: 1rem;
  word-wrap: break-word;
  height: 10rem;
`;

export const OpeningHours = styled.div`
  background-color: #253ebb;
  color: #ffff;
  border-width: 0.8rem 0.8rem 0.8rem 0.8rem;
  border-style: solid;
  border-color: #ffffff;
  padding: 1rem;
  word-wrap: break-word;
  height: 10rem;
`;

export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2em;
  margin: 2em;
`;

export const WhyUsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 0;
  margin: 0.5em;
`;

export const MainContainer = styled.div`
  margin: auto;
`;

export const DropShadow = styled.div`
  filter: drop-shadow(10px 10px 0 #253ebb);
`;
