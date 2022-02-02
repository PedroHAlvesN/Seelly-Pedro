import styled from "styled-components";
import colors from "../../styles/variables";

export const SidemenuBody = styled.div`
  background-color: ${colors.BrownGenshin};
  width: 200px;
  height: 100%;
  border-top-right-radius: 15px;
`;

export const SidemenuTop = styled.div`
  background-color: ${colors.DarkBrown};
  width: calc(100%-10px);
  height: 30px;
  display: flex;
  padding: 5px;
  border-top-right-radius: 15px;
`;

export const SidemenuHeadline = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.BegeGenshin};
  align-self: center;
  margin: auto;
`;

export const SidemenuItem = styled.div`
  background-color: ${colors.BegeGenshin};
  border-bottom: 1px solid ${colors.DarkBrownGenshin};
  width: calc(100%-10px);
  height: 30px;
  display: flex;
  padding: 5px;

  &:hover {
    border-right: 5px solid ${colors.DarkBrown};
  }
`;

export const SidemenuItemIcon = styled.img`
  margin-left: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const SidemenuItemText = styled.p`
  margin-left: 10px;
  align-self: center;
  text-decoration: none;
  font-weight: bold;
  color: ${colors.DarkBrownGenshin};

  &:hover {
    cursor: pointer;
  }
`;
