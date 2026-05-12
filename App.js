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

        <View>
          <Text>Proyectos</Text>

          <View>
            <Image
              source={{ uri: 'https://picsum.photos/300' }}
              style={{ width: 300, height: 160 }}
            />
            <Text>Control de gastos personales</Text>
            <Text>
              App para registrar ingresos y gastos, con resumen por categoría y
              recordatorios básicos.
            </Text>
          </View>

          <View>
            <Image
              source={{ uri: 'https://picsum.photos/300' }}
              style={{ width: 300, height: 160 }}
            />
            <Text>Lista de tareas offline</Text>
            <Text>
              Gestión de pendientes sincronizada localmente, con filtros por
              prioridad y fecha.
            </Text>
          </View>

          <View>
            <Image
              source={{ uri: 'https://picsum.photos/300' }}
              style={{ width: 300, height: 160 }}
            />
            <Text>Explorador de clima urbano</Text>
            <Text>
              Vista del clima por barrio usando datos públicos y favoritos guardados
              en el dispositivo.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
