import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList, RectButton } from 'react-native-gesture-handler';
import { Provider } from '.';

interface ProviderContainerProps {
  selected: boolean;
}

interface ProviderNameProps {
  selected: boolean;
}

interface HourProps {
  available: boolean;
  selected: boolean;
}

interface HourTextProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight(true) + 24}px;
  background: #28262e;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const HeaderTitle = styled.Text`
  margin-left: 16px;
  font-family: 'RobotoSlab-Medium';
  font-size: 20px;
  color: #f5ede8;
`;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  margin-left: auto;
`;

export const Content = styled.ScrollView``;

export const ProvidersListContainer = styled.View`
  height: 112px;
`;

export const ProvidersList = styled(FlatList as new () => FlatList<Provider>)`
  padding: 32px 24px;
`;

export const ProviderContainer = styled(RectButton) <ProviderContainerProps>`
  padding: 8px 12px;
  margin-right: 16px;

  flex-direction: row;
  align-items: center;

  border-radius: 10px;
  background: ${({ selected }) => (selected ? '#ff9000' : '#3e3b47')};
`;

export const ProviderAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const ProviderName = styled.Text<ProviderNameProps>`
  margin-left: 8px;
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: ${({ selected }) => (selected ? '#232129' : '#f4ede8')};
`;

export const Calendar = styled.View``;

export const Title = styled.Text`
  margin: 0 24px 24px;
  font-family: 'RobotoSlab-Medium';
  font-size: 24px;
  color: #f4ede8;
`;

export const OpenDatePickerbutton = styled(RectButton)`
  height: 46px;
  margin: 0 24px;
  background: #ff9000;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const OpenDatePickerbuttonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 16px;
  color: #232129;
`;

export const Schedule = styled.View`
  padding: 24px 0 16px;
`;

export const Section = styled.View`
  margin-bottom: 24px;
`;

export const SectionTitle = styled.Text`
  margin: 0 24px 12px;
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #999591;
`;

export const SectionContent = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 24 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Hour = styled(RectButton) <HourProps>`
  padding: 12px;
  margin-right: 8px;
  border-radius: 10px;
  background: ${({ selected }) => (selected ? '#FF9000' : '#3e3b47')};

  opacity: ${({ available }) => (available ? 1 : 0.3)};
`;

export const HourText = styled.Text<HourTextProps>`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: ${({ selected }) => (selected ? '#232129' : '#f4ede8')};
`;

export const CreateAppointmentButton = styled(RectButton)`
  height: 50px;
  margin: 0 24px 24px;
  background: #ff9000;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const CreateAppointmentButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #232129;
`;
