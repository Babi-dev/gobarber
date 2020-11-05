import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  margin-top: 48px;
  font-family: 'RobotoSlab-Medium';
  font-size: 32px;
  text-align: center;
  color: #f4ede8;
`;

export const Description = styled.Text`
  margin-top: 16px;
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #999591;
`;

export const OkButton = styled(RectButton)`
  padding: 12px 24px;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #ff9000;
`;

export const OkButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #312e38;
`;
