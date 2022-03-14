import styled from "styled-components";
import { Link } from "gatsby";
import { COLORS } from "../../../theme";

export const StyledNavLink = styled(Link)`
  color: ${COLORS.primaryText};
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: ${COLORS.secondary};
  }

  transition: all 200ms ease;
`;
