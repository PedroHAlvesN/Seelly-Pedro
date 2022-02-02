import React from "react";
import {
  Main,
  GenshinHomeBanner,
  GenshinHomeBannerText,
  MainContent
} from "./styles";
import {
  SidemenuBody,
  SidemenuTop,
  SidemenuHeadline,
  SidemenuItem,
  SidemenuItemIcon,
  SidemenuItemText
} from "../../BaseComponents/Sidemenu/styles";

const Genshin: React.FC = () => {
  return (
    <Main>
      <SidemenuBody>
        <SidemenuTop>
          <SidemenuHeadline>Menu</SidemenuHeadline>
        </SidemenuTop>
        <SidemenuItem>
          <SidemenuItemIcon src="./icon/paimon.png" />
          <SidemenuItemText>Personagens</SidemenuItemText>
        </SidemenuItem>
        <SidemenuItem>
          <SidemenuItemIcon src="./icon/Icon_equipment.png" />
          <SidemenuItemText>Armas</SidemenuItemText>
        </SidemenuItem>
      </SidemenuBody>
      <MainContent>
        <GenshinHomeBanner bgImg="./ganyu-genshin-impact.jpg">
          <GenshinHomeBannerText>
            Veja os detalhes dos banners atuais aqui
          </GenshinHomeBannerText>
        </GenshinHomeBanner>
      </MainContent>
    </Main>
  );
};

export default Genshin;
