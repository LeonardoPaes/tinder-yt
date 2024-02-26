import {ImageBackground, Text, View} from 'react-native';
import {useAuth} from '../../hooks/useAuth';
import {useLayoutEffect} from 'react';
import {useNavigation} from '../../hooks/useNavigation';
import {SignInButton} from './styles';

const LoginScreen: React.FC = () => {
  const {signInWithGoogle} = useAuth();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        resizeMode="cover"
        source={{uri: 'https://tinder.com/static/tinder.png'}}
        style={{
          flex: 1,
        }}>
        <SignInButton onPress={signInWithGoogle}>
          <Text>Sign in & get swipping</Text>
        </SignInButton>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
