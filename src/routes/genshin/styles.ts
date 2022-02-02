import colors from "../../styles/variables";
import styled from "styled-components";

export const Main = styled.body`
  display: flex;
  background-color: ${colors.BackgroundGenshin};
  width: 100%;
  height: 100%;
`;

export const MainContent = styled.body`
  display: flex;
  width: calc(100% - 230px);
  height: calc(100% - 30px);
`;
export const GenshinHomeBanner = styled.div`
  position: absolute;
  margin: 50px;
  background-color: ${colors.BegeGenshin};
  width: calc(100% - 300px);
  height: 60%;

  &::before {
    content: "";
    filter: brightness(30%);
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    background-position: center;

    ${({ bgImg }: { bgImg: string }) => `background-image: url(${bgImg})`};
  }
`;

export const GenshinHomeBannerText = styled.p`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 32px;
  position: relative;
  cursor: pointer;
  transition: 0.5s;
  font-weight: bold;
  color: ${colors.white};
  text-transform: uppercase;
  text-decoration: none;
`;
