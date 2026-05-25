import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.appBackground}>
      <View style={styles.phone}>
        <View style={styles.notch} />
        <View style={styles.screen}>
          <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <Image source={require('./assets/kari.jpeg')} style={styles.logo} />
            <Text style={styles.name}>Kariangel Silva</Text>
            <Text style={styles.role}>Analista Desarrolladora </Text>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Acerca de mí</Text>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>
               Eres una persona curiosa y dedicada a aprender sobre desarrollo de software, especialmente temas como programación, Git, React Native y arquitecturas de software. Aunque a veces los errores técnicos te frustran, sigues buscando soluciones y mejorando poco a poco tus habilidades.
 </Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Proyectos</Text>
              <Pressable style={styles.projectItem}>
                <View style={styles.projectImagePlaceholder}>
                  <Image source={require('./assets/eduplanner.webp')} style={styles.projectImage} />
                </View>
                <View style={styles.projectInfo}>
                  <Text style={styles.projectTitle}>EduPlanner</Text>
                  <Text style={styles.projectSubtitle}>Software Educativo</Text>
                </View>
                <Text style={styles.projectArrow}>›</Text>
              </Pressable>
              <Pressable style={styles.projectItem}>
                <View style={styles.projectImagePlaceholder}>
                  <Image source={require('./assets/vela.jpg')} style={styles.projectImage} />
                </View>
                <View style={styles.projectInfo}>
                  <Text style={styles.projectTitle}>NK VELAS</Text>
                  <Text style={styles.projectSubtitle}>Proyecto Formativo</Text>
                </View>
                <Text style={styles.projectArrow}>›</Text>
              </Pressable>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Estudios</Text>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>
                  Bachillerato ·
                 Tecnico en Programacion de Software · 
                 Tecnologo en Analisis y desarrollo de software.
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
    backgroundColor: '#121111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    width: 330,
    height: 640,
    backgroundColor: '#8b50fb',
    borderRadius: 49,
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
    backgroundColor: '#1b3c6f',
    borderRadius: 5,
    marginBottom: 14,
  },
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: '#222426',
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
    borderColor: '#8b50fb',
    marginBottom: 16,
  },
  name: {
    color: '#463a72',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  role: {
    color: '#101011',
    fontSize: 14,
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginBottom: 18,
  },
  sectionTitle: {
    color: '#823aa8',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  listItem: {
    width: '100%',
    backgroundColor: '#262424',
    borderRadius: 22,
    padding: 16,
    borderWidth: 2,
    borderColor: '#8f4187',
  },
  itemText: {
    color: '#ffffff',
    fontSize: 13,
    lineHeight: 20,
  },
  projectItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262424',
    borderRadius: 22,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#dbe7fb',
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
    color: '#1c161d',
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
    color: '#681f98',
    fontSize: 24,
    marginLeft: 8,
  },
});
