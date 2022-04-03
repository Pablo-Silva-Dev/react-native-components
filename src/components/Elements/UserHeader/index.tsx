import React from 'react';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import {
  Container,
  UserContainer,
  OptionsContainer,
  Title,
  UserNameText,
  UserInfoContainer,
  UserEmailText,
  UserPhoto,
  SettingsButton,
} from './styles';

interface UserHeaderProps {
  title: string;
  userName: string;
  userEmail: string;
  userPhotoUrl?: string;
  showSettings?: boolean;
  onOpenSettings?: () => void;
}

export function UserHeader({
  title,
  userName,
  userEmail,
  userPhotoUrl,
  showSettings,
  onOpenSettings
}: UserHeaderProps) {

  const theme = useTheme()

  return (
    <Container
    >
      <OptionsContainer>
        <Title>{title}</Title>
        {showSettings && (
          <SettingsButton
            activeOpacity={.8}
            onPress={onOpenSettings}
          >
            <Feather
              name='settings'
              size={16}
              color={theme.colors.element_base}
            />
          </SettingsButton>
        )}

      </OptionsContainer>
      <UserContainer>
        <UserPhoto
          source={{ uri: userPhotoUrl }}
        />
        <UserInfoContainer>
          <UserNameText>{userName}</UserNameText>
          <UserEmailText>{userEmail}</UserEmailText>
        </UserInfoContainer>
      </UserContainer>
    </Container>
  )
}