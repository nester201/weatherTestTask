import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TypeRootStackParamList} from '../interfaces /navigation';

export const useNavigationApp = () => useNavigation<NavigationProp<TypeRootStackParamList>>();
