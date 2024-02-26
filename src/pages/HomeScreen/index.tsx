import {Button, Text, View} from 'react-native';
import {useNavigation} from '../../hooks/useNavigation';
import {useAuth} from '../../hooks/useAuth';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const {logout} = useAuth();

  return (
    <View>
      <Text>I AM HOMESCREEN</Text>
      <Button title="Logout" onPress={logout} />
      <Button title="Click Me" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
};

export default HomeScreen;
