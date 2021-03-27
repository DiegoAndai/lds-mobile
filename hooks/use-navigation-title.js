import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function useNavigationTitle(title) {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title,
    });
  });
}
