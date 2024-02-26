import {
  useNavigation as useNav,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';

export function useNavigation(): NavigationProp<ParamListBase> {
  return useNav<NavigationProp<ParamListBase>>();
}
