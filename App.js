import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.phone}>
        <View style={styles.notch} />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scroll}
        >
          {/* Header */}
          <View style={styles.header}>
            <Image
              source={require('./assets/Perfil1.jpeg')}
              style={styles.profile}
            />

            <Text style={styles.name}>Jazmín Nathalia García</Text>

            <Text style={styles.role}>
              Desarrolladora de Software
            </Text>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                Disponible para proyectos
              </Text>
            </View>
          </View>

          {/* Sobre mí */}
          <View style={styles.card}>
            <Text style={styles.title}>Sobre mí</Text>

            <Text style={styles.description}>
              Soy una apasionada por el desarrollo de software y la creación
              de experiencias modernas. Disfruto diseñar interfaces elegantes,
              desarrollar soluciones eficientes y aprender nuevas tecnologías
              constantemente.
            </Text>
          </View>

          {/* Habilidades */}
          <View style={styles.card}>
            <Text style={styles.title}>Tecnologías</Text>

            <View style={styles.skills}>
              <View style={styles.skill}>
                <Text style={styles.skillText}>Java</Text>
              </View>

              <View style={styles.skill}>
                <Text style={styles.skillText}>Spring Boot</Text>
              </View>

              <View style={styles.skill}>
                <Text style={styles.skillText}>MySQL</Text>
              </View>

              <View style={styles.skill}>
                <Text style={styles.skillText}>Angular</Text>
              </View>

              <View style={styles.skill}>
                <Text style={styles.skillText}>React Native</Text>
              </View>
            </View>
          </View>

          {/* Proyecto */}
          <View style={styles.card}>
            <Text style={styles.title}>Proyecto Destacado</Text>

            <View style={styles.project}>
              <Image
                source={require('./assets/Logo.jpeg')}
                style={styles.projectImage}
              />

              <View style={styles.projectInfo}>
                <Text style={styles.projectTitle}>Syncra</Text>

                <Text style={styles.projectDescription}>
                  Plataforma moderna para gestión de proyectos,
                  colaboración entre equipos y organización de tareas.
                </Text>

                <Text style={styles.projectTech}>
                  Java • Spring Boot • Angular • MySQL
                </Text>
              </View>
            </View>
          </View>

          {/* Contacto */}
          <View style={styles.card}>
            <Text style={styles.title}>Contacto</Text>

            <Pressable style={styles.contact}>
              <Text style={styles.contactLabel}> Correo</Text>
              <Text style={styles.contactText}>
                nathaliaocampo2007@gmail.com
              </Text>
            </Pressable>

          </View>
        </ScrollView>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071a1a',
    justifyContent: 'center',
    alignItems: 'center',
  },

  phone: {
    width: 340,
    height: 700,
    backgroundColor: '#0b2b2b',
    borderRadius: 45,
    paddingTop: 14,
    paddingHorizontal: 14,
    shadowColor: '#2ee6c5',
    shadowOpacity: 0.45,
    shadowRadius: 22,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation: 15,
  },

  notch: {
    width: 120,
    height: 8,
    backgroundColor: '#134040',
    alignSelf: 'center',
    borderRadius: 20,
    marginBottom: 14,
  },

  scroll: {
    paddingBottom: 30,
  },

  header: {
    alignItems: 'center',
    marginBottom: 24,
  },

  profile: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#4fffd7',
    marginBottom: 14,
  },

  name: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  role: {
    color: '#9fe8dc',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 12,
  },

  badge: {
    backgroundColor: '#1ec8a5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 30,
  },

  badgeText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 12,
  },

  card: {
    backgroundColor: '#123737',
    borderRadius: 24,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#1c5a5a',
  },

  title: {
    color: '#59ffd9',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 14,
  },

  description: {
    color: '#d7f7f1',
    lineHeight: 22,
    fontSize: 14,
  },

  skills: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  skill: {
    backgroundColor: '#0d2525',
    borderWidth: 1,
    borderColor: '#4fffd7',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },

  skillText: {
    color: '#59ffd9',
    fontWeight: '600',
    fontSize: 12,
  },

  project: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  projectImage: {
    width: 70,
    height: 70,
    borderRadius: 18,
    marginRight: 14,
    borderWidth: 2,
    borderColor: '#4fffd7',
  },

  projectInfo: {
    flex: 1,
  },

  projectTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  projectDescription: {
    color: '#d7f7f1',
    fontSize: 12,
    lineHeight: 18,
  },

  projectTech: {
    color: '#59ffd9',
    fontSize: 11,
    marginTop: 8,
    fontWeight: '600',
  },

  contact: {
    backgroundColor: '#0d2525',
    borderRadius: 18,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1c5a5a',
  },

  contactLabel: {
    color: '#59ffd9',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  contactText: {
    color: '#f1fffc',
    fontSize: 13,
  },
});