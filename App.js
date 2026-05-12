import { SafeAreaView, ScrollView, View, Text, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image
            source={{ uri: 'https://picsum.photos/id/1027/400/400' }}
            style={{ width: 120, height: 120, borderRadius: 60 }}
          />
          <Text>José Lemus</Text>
          <Text>Desarrollador de aplicaciones móvil con React Native</Text>
        </View>

        <View>
          <Text>Acerca de mí</Text>
          <Text>
            Me gusta crear apps claras y útiles para Android, iOS y web. Trabajo
            con Expo y React Native, aprendo rápido y disfruto mejorar la
            experiencia del usuario en cada pantalla.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
