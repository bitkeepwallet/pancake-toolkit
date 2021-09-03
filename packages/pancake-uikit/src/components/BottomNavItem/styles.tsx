import styled from "styled-components";
import { Text } from "../Text";
import { BottomNavItemProps } from "./types";

type StyledBottomNavItemProps = Pick<BottomNavItemProps, "isActive">;

export const StyledBottomNavItem = styled.button<StyledBottomNavItemProps>`
  display: block;
  border: 0;
  background: transparent;
  cursor: pointer;
  height: 44px;
  padding: 4px 21px;
  &:hover {
    border-radius: 16px;
  }
  &:hover,
  &:hover div {
    background: ${({ theme }) => theme.colors.tertiary};
  }
`;

export const StyledBottomNavText = styled(Text)`
  user-select: none;
`;