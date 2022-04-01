import styled from "styled-components/native";

interface AvatarProps {
  avatarUrl?: string;
  size?: "small" | "medium" | "large";
}

export const Container = styled.View<AvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image<AvatarProps>`
  width: ${({ size }) =>
    size === "small" ? "56px" : size === "medium" ? "72px" : "96px"};
  height: ${({ size }) =>
    size === "small" ? "56px" : size === "medium" ? "72px" : "96px"};
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.element_base};
  border-radius: 48px;
`;
