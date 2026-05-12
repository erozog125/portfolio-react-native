import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.card, styles.heroCard]}>
          <Image
            source={{ uri: 'https://picsum.photos/id/1027/400/400' }}
            style={styles.avatar}
          />
          <Text style={styles.name}>José Lemus</Text>
          <Text style={styles.role}>
            Desarrollador de aplicaciones móvil con React Native
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Acerca de mí</Text>
          <Text style={styles.body}>
            Me gusta crear apps claras y útiles para Android, iOS y web. Trabajo
            con Expo y React Native, aprendo rápido y disfruto mejorar la
            experiencia del usuario en cada pantalla.
          </Text>
        </View>

        <View style={styles.projectsSection}>
          <Text style={styles.sectionTitle}>Proyectos</Text>

          <View style={styles.card}>
            <Image
              source={{ uri: 'https://picsum.photos/300' }}
              style={styles.projectImage}
            />
            <Text style={styles.projectTitle}>Control de gastos personales</Text>
            <Text style={styles.projectDescription}>
              App para registrar ingresos y gastos, con resumen por categoría y
              recordatorios básicos.
            </Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{ uri: 'https://picsum.photos/300' }}
              style={styles.projectImage}
            />
            <Text style={styles.projectTitle}>Lista de tareas offline</Text>
            <Text style={styles.projectDescription}>
              Gestión de pendientes sincronizada localmente, con filtros por
              prioridad y fecha.
            </Text>
          </View>

          <View style={styles.card}>
            <Image
              source={{ uri: 'https://picsum.photos/300' }}
              style={styles.projectImage}
            />
            <Text style={styles.projectTitle}>Explorador de clima urbano</Text>
            <Text style={styles.projectDescription}>
              Vista del clima por barrio usando datos públicos y favoritos
              guardados en el dispositivo.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const softShadow = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.08,
  shadowRadius: 14,
  elevation: 4,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 32,
    gap: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    gap: 12,
    ...softShadow,
  },
  heroCard: {
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
  },
  role: {
    fontSize: 15,
    color: '#6B7280',
    lineHeight: 22,
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  body: {
    fontSize: 15,
    color: '#4B5563',
    lineHeight: 24,
  },
  projectsSection: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  projectImage: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
  },
  projectTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1F2937',
  },
  projectDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 21,
  },
});
