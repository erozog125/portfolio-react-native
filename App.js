import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.appBackground}>
      <View style={styles.phone}>
        <View style={styles.notch} />
        <View style={styles.screen}>
          <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <Image source={require('./assets/profile.png')} style={styles.logo} />
            <Text style={styles.name}>Edwin Rozo Gómez</Text>
            <Text style={styles.role}>Desarrollador React Native</Text>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Acerca de mí</Text>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>
                  Diseñador de experiencias móviles con enfoque minimalista. Me apasiona crear apps claras, funcionales y con una paleta azul-gris que transmite profesionalismo.
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Proyectos</Text>
              <Pressable style={styles.projectItem}>
                <View style={styles.projectImagePlaceholder}>
                  <Image source={require('./assets/PA.png')} style={styles.projectImage} />
                </View>
                <View style={styles.projectInfo}>
                  <Text style={styles.projectTitle}>Control de gastos</Text>
                  <Text style={styles.projectSubtitle}>Seguimiento financiero con interfaz moderna y sencilla.</Text>
                </View>
                <Text style={styles.projectArrow}>›</Text>
              </Pressable>
              <Pressable style={styles.projectItem}>
                <View style={styles.projectImagePlaceholder}>
                  <Image source={require('./assets/cg.png')} style={styles.projectImage} />
                </View>
                <View style={styles.projectInfo}>
                  <Text style={styles.projectTitle}>Landing para app</Text>
                  <Text style={styles.projectSubtitle}>Página de bienvenida con estilo minimalista y clara jerarquía.</Text>
                </View>
                <Text style={styles.projectArrow}>›</Text>
              </Pressable>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Estudios</Text>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>
                  Ingeniería de Sistemas · Certificación React Native · Talleres de UI/UX y desarrollo móvil.
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
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    width: 330,
    height: 640,
    backgroundColor: '#152d4d',
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
    backgroundColor: '#1b3c6f',
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
    borderColor: '#dbe7fb',
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
    backgroundColor: '#e8effa',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: '#d6e4f2',
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
});
