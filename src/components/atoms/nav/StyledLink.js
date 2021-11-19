import styled from "styled-components";
import { Link } from "gatsby";
import { COLORS } from "../../../constants";

export const StyledLink = styled(Link)`
  color: ${COLORS.primaryText};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: ${COLORS.primary};
  }

  transition: all 200ms ease;
`;
