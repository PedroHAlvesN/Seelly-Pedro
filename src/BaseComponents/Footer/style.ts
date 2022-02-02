import styled from "styled-components";
import colors from "../../styles/variables";
import { Link } from "react-router-dom";

export const FooterStructure = styled.section`
  display: flex;
  border-left: 0px solid ${colors.lightGray};
  border-right: 0px solid ${colors.lightGray};
  border-bottom: 0 solid ${colors.lightGray};
  color: ${colors.white};
  padding: 20px 12px;
`;

export const FooterHeadLine = styled.div`
  margin-left: 0 0 20px 0;
  display: flex;
`;

export const FooterHeadLineP = styled(Link)`
  font-size: 32px;
  font-weight: bold;
  color: ${colors.SaddleBrown};
  text-decoration: none;
`;

export const FooterLink = styled.p`
  color: ${colors.SaddleBrown};
  font-size: 12px;
  margin-right: 70px;
  cursor: pointer;
`;

export const FooterLinkContainer = styled.div`
  width: calc(100% - 169px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Logo = styled.div`
  margin-right: 100px;
`;

export const ItemFooter = styled.div`
  color: ${colors.lightGray};
`;
