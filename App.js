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
            <View style={styles.headerGradient}>
              <Image source={require('./assets/FOTO.png')} style={styles.logo} />
              <Text style={styles.name}>Camilo Gallego Palacio</Text>
              <Text style={styles.role}>Estudiante de Tecnología ADSO | Técnico en Programación de Software</Text>
            </View>
            
            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionIcon}>📖</Text>
                <Text style={styles.sectionTitle}>Sobre mí</Text>
              </View>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>
                  Bachiller técnico con especialización en programación de software, diplomado en pensamiento 
                  algorítmico en la Universidad EAM. Actualmente estudiante de Tecnología en Análisis y Desarrollo 
                  de Software (ADSO) en el SENA. Apasionado por el desarrollo y análisis de software, con interés 
                  en culminar la tecnología para posteriormente realizar la ingeniería de software. 
                  Me destaco por mi pensamiento analítico y capacidad de liderazgo en proyectos tecnológicos.
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionIcon}>⚡</Text>
                <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
              </View>
              <View style={styles.skillsContainer}>
                <View style={styles.skillBadge}><Text style={styles.skillText}>Python</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>Flask</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>JavaScript</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>TypeScript</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>Node.js</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>React</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>Angular</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>Java</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>Spring Boot</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>API REST</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>HTML5/CSS3</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>Bootstrap</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>MySQL</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>PHPMyAdmin</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>Git</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>Scrum</Text></View>
              </View>
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionIcon}>🚀</Text>
                <Text style={styles.sectionTitle}>Proyectos Destacados</Text>
              </View>
              
              <Pressable style={styles.projectItem}>
                <View style={styles.projectImageContainer}>
                  <Image source={require('./assets/proyecto1.jpeg')} style={styles.projectImage} />
                </View>
                <View style={styles.projectInfo}>
                  <Text style={styles.projectTitle}>SuaviCremas - Ecommerce</Text>
                  <Text style={styles.projectSubtitle}>
                    Tienda online de cremas y artefactos de limpieza con arquitectura monolito.
                  </Text>
                  <View style={styles.projectTechContainer}>
                    <Text style={styles.projectTech}>Python</Text>
                    <Text style={styles.projectTech}>Flask</Text>
                    <Text style={styles.projectTech}>MySQL</Text>
                  </View>
                </View>
                <Text style={styles.projectArrow}>→</Text>
              </Pressable>

              <Pressable style={styles.projectItem}>
                <View style={styles.projectImageContainer}>
                  <Image source={require('./assets/image.png')} style={styles.projectImage} />
                </View>
                <View style={styles.projectInfo}>
                  <Text style={styles.projectTitle}>MusicIA</Text>
                  <Text style={styles.projectSubtitle}>
                    Recomendación musical basada en estado de ánimo con Gemini y Spotify APIs.
                  </Text>
                  <View style={styles.projectTechContainer}>
                    <Text style={styles.projectTech}>Python</Text>
                    <Text style={styles.projectTech}>Gemini API</Text>
                    <Text style={styles.projectTech}>Spotify API</Text>
                  </View>
                </View>
                <Text style={styles.projectArrow}>→</Text>
              </Pressable>

              <Pressable style={styles.projectItem}>
                <View style={styles.projectImageContainer}>
                  <Image source={require('./assets/pulsegym.png')} style={styles.projectImage} />
                </View>
                <View style={styles.projectInfo}>
                  <Text style={styles.projectTitle}>Pulse GYM</Text>
                  <Text style={styles.projectSubtitle}>
                    Plataforma integral para gimnasios con control de acceso biométrico e IA.
                  </Text>
                  <View style={styles.projectTechContainer}>
                    <Text style={styles.projectTech}>Java 21</Text>
                    <Text style={styles.projectTech}>Spring Boot</Text>
                    <Text style={styles.projectTech}>Angular</Text>
                  </View>
                </View>
                <Text style={styles.projectArrow}>→</Text>
              </Pressable>
            </View>

            <View style={styles.section}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionIcon}>📱</Text>
                <Text style={styles.sectionTitle}>Contacto</Text>
              </View>
              <Pressable style={styles.contactItem} onPress={() => openLink('mailto:c.gallego3029@gmail.com')}>
                <View style={styles.contactIconContainer}>
                  <Image source={require('./assets/gmail.png')} style={styles.contactImage} />
                </View>
                <Text style={styles.contactText}>c.gallego3029@gmail.com</Text>
              </Pressable>
              <Pressable style={styles.contactItem} onPress={() => openLink('https://github.com/gallegohp')}>
                <View style={styles.contactIconContainer}>
                  <Image source={require('./assets/github.png')} style={styles.contactImage} />
                </View>
                <Text style={styles.contactText}>github.com/gallegohp</Text>
              </Pressable>
              <Pressable style={styles.contactItem} onPress={() => openLink('https://www.instagram.com/gallegohp/')}>
                <View style={styles.contactIconContainer}>
                  <Image source={require('./assets/instagram.png')} style={styles.contactImage} />
                </View>
                <Text style={styles.contactText}>@gallegohp</Text>
              </Pressable>
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
    width: 350,
    height: 680,
    backgroundColor: '#1e293b',
    borderRadius: 48,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: 0.5,
    shadowRadius: 35,
    elevation: 15,
    borderWidth: 1,
    borderColor: '#334155',
  },
  notch: {
    width: 120,
    height: 10,
    backgroundColor: '#0f172a',
    borderRadius: 6,
    marginBottom: 16,
  },
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0f172a',
    borderRadius: 36,
    padding: 20,
  },
  content: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  headerGradient: {
    alignItems: 'center',
    marginBottom: 24,
    width: '100%',
  },
  logo: {
    width: 130,
    height: 130,
    resizeMode: 'cover',
    borderRadius: 65,
    borderWidth: 3,
    borderColor: '#38bdf8',
    marginBottom: 16,
    backgroundColor: '#1e293b',
  },
  name: {
    color: '#f8fafc',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
    textAlign: 'center',
  },
  role: {
    color: '#38bdf8',
    fontSize: 12,
    textAlign: 'center',
    opacity: 0.9,
  },
  section: {
    width: '100%',
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  sectionTitle: {
    color: '#38bdf8',
    fontSize: 18,
    fontWeight: '600',
  },
  listItem: {
    width: '100%',
    backgroundColor: '#1e293b',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  itemText: {
    color: '#cbd5e1',
    fontSize: 13,
    lineHeight: 20,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillBadge: {
    backgroundColor: '#1e293b',
    borderWidth: 1,
    borderColor: '#38bdf8',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginRight: 10,
    marginBottom: 10,
  },
  skillText: {
    color: '#38bdf8',
    fontSize: 11,
    fontWeight: '500',
  },
  projectItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    borderRadius: 20,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  projectImageContainer: {
    width: 55,
    height: 55,
    borderRadius: 16,
    marginRight: 12,
    backgroundColor: '#0f172a',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  projectInfo: {
    flex: 1,
  },
  projectTitle: {
    color: '#f8fafc',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  projectSubtitle: {
    color: '#94a3b8',
    fontSize: 11,
    lineHeight: 15,
    marginBottom: 6,
  },
  projectTechContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  projectTech: {
    color: '#38bdf8',
    fontSize: 9,
    backgroundColor: '#0f172a',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  projectArrow: {
    color: '#38bdf8',
    fontSize: 20,
    marginLeft: 8,
  },
  contactItem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    borderRadius: 20,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#334155',
  },
  contactIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  contactImage: {
    width: 20,
    height: 20,
  },
  contactText: {
    color: '#cbd5e1',
    fontSize: 13,
    flex: 1,
  },
});