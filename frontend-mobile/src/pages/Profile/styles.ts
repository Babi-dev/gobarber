import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
  flex: 1;
  justify-content: center;
  padding: 0 30px 10px;
`;

export const HeaderProfile = styled.View`
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  text-align: left;
  color: #f4ede8;
`;

export const SignOutButton = styled.TouchableOpacity``;

export const UserAvatarButton = styled.TouchableOpacity`
  margin: 24px 0;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;
