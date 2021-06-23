import React from 'react';
import {
  Image, Text,
  View
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';
import { styles } from './styles';

export function SignIn() {
  return (
    <View style={styles.container}>
      
      <Image
      source={ IllustrationImg }
      style={styles.image}
      resizeMode='stretch'
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'}
          e organize{'\n'}
          seus jogos.
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos{'\n'}
          e jogue com seus amigos
        </Text>

        <ButtonIcon
        title='Entrar com Discord'
        activeOpacity={0.5}
        />
      </View>
    </View>
  );
}

