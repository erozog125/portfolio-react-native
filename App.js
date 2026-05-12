import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable, Linking } from 'react-native';

export default function App() {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.appBackground}>
      <View style={styles.phone}>
        <View style={styles.notch} />
        <View style={styles.screen}>
          <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <Image source={require('./assets/profile1.jpeg')} style={styles.logo} />
            <Text style={styles.name}>Jazmín Nathalia García Ocampo</Text>
            <Text style={styles.role}>Estudiante de Análisis y Desarrollo de Software</Text>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Sobre mí</Text>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>
                  Estoy en mi último año de carrera, apasionada por el desarrollo web de las páginas y el desarrollo. Me gusta aprender cosas nuevas y enfrentar desafíos que me permitan crecer profesionalmente. Mi objetivo es convertirme en una desarrolladora web full stack, creando experiencias digitales innovadoras y eficientes.
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Proyectos</Text>
              <Pressable style={styles.projectItem}>
                <View style={styles.projectImagePlaceholder}>
                  <Image source={require('./assets/Logo Syncra.jpeg')} style={styles.projectImage} />
                </View>
                <View style={styles.projectInfo}>
                  <Text style={styles.projectTitle}>Syncra</Text>
                  <Text style={styles.projectSubtitle}>Sincronía entre Notion y Trello para mayor comodidad a los estudiantes del Sena Galán.</Text>
                </View>
                <Text style={styles.projectArrow}>›</Text>
              </Pressable>
              <Pressable style={styles.projectItem}>
                <View style={styles.projectImagePlaceholder}>
                  <Image source={require('./assets/Super.png')} style={styles.projectImage} />
                </View>
                <View style={styles.projectInfo}>
                  <Text style={styles.projectTitle}>Supermarket</Text>
                  <Text style={styles.projectSubtitle}>Aplicación de compras en línea con interfaz intuitiva y funcionalidades completas.</Text>
                </View>
                <Text style={styles.projectArrow}>›</Text>
              </Pressable>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Estudios</Text>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>
                  Bachillerato · Análisis y Desarrollo de Software · Estudios en inglés A1 y sin finalizar A4 
                </Text>
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
    backgroundColor: '#008864',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    width: 330,
    height: 640,
    backgroundColor: '#154d38',
    borderRadius: 44,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 22 },
    shadowOpacity: 0.5,
    shadowRadius: 34,
    elevation: 14,
  },
  notch: {
    width: 110,
    height: 8,
    backgroundColor: '#b0e1c4',
    borderRadius: 5,
    marginBottom: 14,
  },
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: '#e8eae9',
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
    borderColor: '#929395',
    marginBottom: 16,
  },
  name: {
    color: '#104328',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
    textAlign: 'center',
  },
  role: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    width: '100%',
    marginBottom: 18,
  },
  sectionTitle: {
    color: '#0f2a1d',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  listItem: {
    width: '100%',
    backgroundColor: '#4546472f',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: '#9d9d9d',
  },
  itemText: {
    color: '#a0a0a0',
    fontSize: 13,
    lineHeight: 20,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillBadge: {
    backgroundColor: '#1e1e1e',
    borderWidth: 1,
    borderColor: '#00b4d8',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  skillText: {
    color: '#00b4d8',
    fontSize: 11,
    fontWeight: '500',
  },
  projectItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b6b6b6',
    borderRadius: 22,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#898a8b',
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
    borderRadius: 18,
  },
  projectInfo: {
    flex: 1,
  },
  projectTitle: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  projectSubtitle: {
    color: '#a0a0a0',
    fontSize: 11,
    lineHeight: 16,
  },
  projectTech: {
    color: '#00b4d8',
    fontSize: 9,
    marginTop: 4,
  },
  projectArrow: {
    color: '#2eb871',
    fontSize: 24,
    marginLeft: 8,
  },
  contactItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 22,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  contactImage: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  contactText: {
    color: '#a0a0a0',
    fontSize: 13,
    flex: 1,
  },
});