import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.appBackground}>
      <View style={styles.phone}>
        <View style={styles.notch} />
        <View style={styles.screen}>
          <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <Image source={require('./assets/image.png')} style={styles.logo} />
            <Text style={styles.name}>Ricardo Molina</Text>
            <Text style={styles.role}>Aprendiz de Todo, Experto en Nada</Text>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>About Me</Text>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>
                  Aprendiz de ADSO con conocimientos básicos para las soluciones digitales.
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>My Work</Text>
              <Pressable style={styles.projectItem}>
                <View style={styles.projectImagePlaceholder}>
                  <Image source={require('./assets/M.png')} style={styles.projectImage} />
                </View>
                <View style={styles.projectInfo}>
                  <Text style={styles.projectTitle}>Morfik</Text>
                  <Text style={styles.projectSubtitle}>Plataforma E-commerce para emprendedores Colombianos.</Text>
                </View>
                <Text style={styles.projectArrow}>›</Text>
              </Pressable>
              <Pressable style={styles.projectItem}>
                <View style={styles.projectImagePlaceholder}>
                  <Image source={require('./assets/Pulsegym.png')} style={styles.projectImage} />
                </View>
                <View style={styles.projectInfo}>
                  <Text style={styles.projectTitle}>Pulse GYM</Text>
                  <Text style={styles.projectSubtitle}>Software para Gestión de Gimnasios.</Text>
                </View>
                <Text style={styles.projectArrow}>›</Text>
              </Pressable>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Estudios</Text>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>
                  Técnico en Desarrollo de Software en el SENA
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Strengths</Text>
              <View style={styles.section2}>
                <Text>Trabajo en Equipo</Text>
                <Text>⭐️⭐️⭐️</Text>
              </View>
              <View style={styles.section2}>
                <Text>Activo</Text>
                <Text>⭐️⭐️⭐️⭐️</Text>
              </View>
              <View style={styles.section2}>
                <Text>Brat</Text>
                <Text>⭐️⭐️⭐️⭐️⭐️</Text>
              </View>
              <View style={styles.section2}>
                <Text>Creatividad</Text>
                <Text>⭐️⭐️⭐️⭐️⭐️</Text>
              </View>
              <View style={styles.section2}>
                <Text>Liderazgo</Text>
                <Text>⭐️⭐️⭐️⭐️⭐️</Text>
              </View>
            </View>


          </ScrollView>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  appBackground: {
    flex: 1,
    backgroundImage: 'url()',
    backgroundColor: '#7bff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    width: 330,
    height: 640,
    backgroundColor: '#000000',
    borderRadius: 44,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 22 },
    shadowOpacity: 0.28,
    shadowRadius: 34,
    elevation: 14,
  },
  notch: {
    width: 110,
    height: 8,
    backgroundColor: '#4b4b4b',
    borderRadius: 5,
    marginBottom: 14,
  },
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f4f7fb',
    borderRadius: 32,
    padding: 20,
  },
  content: {
    alignItems: 'center',
    paddingBottom: 24,
  },
  logo: {
    width: 140,
    height: 140,
    resizeMode: 'cover',
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#37ff0077',
    marginBottom: 16,
  },
  name: {
    color: '#102a43',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  role: {
    color: '#475569',
    fontSize: 14,
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginBottom: 18,
  },
  sectionTitle: {
    color: '#0f172a',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  listItem: {
    width: '100%',
    backgroundColor: '#7efd0061',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: '#37ff0077',
  },
  itemText: {
    color: '#334155',
    fontSize: 13,
    lineHeight: 20,
  },
  projectItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 22,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#37ff0077',
  },
  projectImagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 18,
    marginRight: 12,
    marginLeft: 4,
  },
  projectImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 6,
  },
  projectInfo: {
    flex: 1,
  },
  projectTitle: {
    color: '#102a43',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  projectSubtitle: {
    color: '#475569',
    fontSize: 13,
    lineHeight: 19,
  },
  projectArrow: {
    color: '#2e4eb8',
    fontSize: 24,
    marginLeft: 8,
  },
  section2: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
