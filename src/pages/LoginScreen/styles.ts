import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';

export const SignInButton = styled(TouchableOpacity)`
  position: absolute;
  bottom: 60px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25%;
  margin-right: 25%;

  padding: 10px;
  background: white;
  border-radius: 10px;
`;
