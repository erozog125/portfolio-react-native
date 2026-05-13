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
            <Image source={require('./assets/FOTO.jpg')} style={styles.logo} />
            <Text style={styles.name}>Isabela Ocampo Núñez</Text>
            <Text style={styles.role}>Tecnólogo en Análisis y Desarrollo de Software</Text>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Sobre mí</Text>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>
                  Soy una desarrolladora en formación apasionada por la tecnología y la creación 
                  de soluciones digitales. Tengo conocimientos en desarrollo web, bases de datos 
                  y diseño de aplicaciones, con interés tanto en el frontend como en el backend. 
                  Me gusta aprender constantemente y fortalecer mis habilidades en programación, 
                  arquitectura de software y desarrollo de sistemas. Además, disfruto trabajar 
                  en proyectos que combinen funcionalidad, organización y una buena experiencia 
                  para el usuario.
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
              <View style={styles.skillsContainer}>
                <View style={styles.skillBadge}><Text style={styles.skillText}>Java</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>Spring Boot</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>TypeScript</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>JavaScript</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>HTML5/CSS3</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>MySQL</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>Git/GitHub</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>APIs REST</Text></View>
                <View style={styles.skillBadge}><Text style={styles.skillText}>Postman</Text></View>
              </View>
            </View>

            {/* Proyecto Destacado */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Proyecto Destacado</Text>
              <Pressable style={styles.projectItem}>
                <View style={styles.projectImagePlaceholder}>
                  <Image source={require('./assets/morfik.png')} style={styles.projectImage} />
                </View>
                <View style={styles.projectInfo}>
                  <Text style={styles.projectTitle}>MORFIK</Text>
                  <Text style={styles.projectSubtitle}>
                    Este proyecto impulsa el emprendimiento colombiano mediante una plataforma 
                    web que permite crear y gestionar tiendas digitales de forma fácil, segura 
                    y sin conocimientos técnicos.
                  </Text>
                  <Text style={styles.projectTech}>
                    Java 21 - Spring Boot - MySQL - Angular
                  </Text>
                </View>
                <Text style={styles.projectArrow}>›</Text>
              </Pressable>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Contacto</Text>
              <Pressable style={styles.contactItem} onPress={() => openLink('isabelaocampo736qgmail.com')}>
                <Image source={require('./assets/gmail.png')} style={styles.contactImage} />
                <Text style={styles.contactText}>isabelaocampo736qgmail.com</Text>
              </Pressable>
              <Pressable style={styles.contactItem} onPress={() => openLink('https://github.com/isabelaocampo09')}>
                <Image source={require('./assets/github.png')} style={styles.contactImage} />
                <Text style={styles.contactText}>GitHub: isabelaocampo09</Text>
              </Pressable>
              <Pressable style={styles.contactItem} onPress={() => openLink('https://instagram.com/isa_on_09')}>
                <Image source={require('./assets/instagram.png')} style={styles.contactImage} />
                <Text style={styles.contactText}>Instagram: @isa_on_09</Text>
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
    backgroundColor: '#0a0a0a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    width: 330,
    height: 640,
    backgroundColor: '#1a1a1a',
    borderRadius: 44,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 22 },
    shadowOpacity: 0.5,
    shadowRadius: 34,
    elevation: 14,
  },
  notch: {
    width: 110,
    height: 8,
    backgroundColor: '#2a2a2a',
    borderRadius: 5,
    marginBottom: 14,
  },
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: '#121212',
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
    borderColor: '#00b4d8',
    marginBottom: 16,
  },
  name: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 4,
    textAlign: 'center',
  },
  role: {
    color: '#00b4d8',
    fontSize: 13,
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    width: '100%',
    marginBottom: 18,
  },
  sectionTitle: {
    color: '#00f5d4',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  listItem: {
    width: '100%',
    backgroundColor: '#1e1e1e',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: '#2a2a2a',
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
    backgroundColor: '#1e1e1e',
    borderRadius: 22,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#2a2a2a',
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
    color: '#00f5d4',
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