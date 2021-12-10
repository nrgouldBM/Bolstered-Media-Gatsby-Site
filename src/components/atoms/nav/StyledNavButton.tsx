import styled from "styled-components";
import { Link } from "gatsby";
import { COLORS, SHADOW } from "../../../theme";

export const StyledNavButton = styled(Link)`
  color: ${COLORS.primaryText};
  text-decoration: none;
  font-weight: 500;
  background: ${COLORS.primary};
  padding: 0.5rem 1.5rem;
  border-radius: 6px;
  box-shadow: ${SHADOW.normal};

  &:hover {
    background: ${COLORS.primarySoft};
    transform: scale(1.01);
  }

  transition: all 200ms ease;
`;
