import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.appBackground}>
      <View style={styles.phoneFrame}>
        <View style={styles.speaker} />
        
        <View style={styles.screen}>
          <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            {/* Header / Perfil */}
            <View style={styles.header}>
              <Image source={require('./assets/profile.jpeg')} style={styles.profilePic} />
              <Text style={styles.name}>Samuel Lara Grandas</Text>
              <Text style={styles.role}>Desarrollador Java & Javascript</Text>
            </View>

            {/* Sección Acerca de mí */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Acerca de mí</Text>
              <View style={styles.card}>
                <Text style={styles.cardHighlight}>Habilidades Técnicas</Text>
                <Text style={styles.cardText}>
                  <ul>
                    <li>Especialista en aplicaciones móviles y desarrollo Full Stack, con fuerte dominio en Java y el ecosistema Javascript.</li>
                    <li>Experto en el desarrollo de aplicaciones web y móviles.</li>
                    <li>Experto en el desarrollo de aplicaciones móviles y web.</li>
                    <li>B2 en Inglés</li>
                  </ul>  
                </Text>
                
                <View style={styles.divider} />
                
                <Text style={styles.cardHighlight}>Habilidades Blandas</Text>
                <Text style={styles.cardText}>
                  <ul>
                    <li>Disciplinado.</li>
                    <li>Creativo.</li>
                    <li>Activo.</li>
                    <li>Con una alta capacidad para el trabajo colaborativo en equipos ágiles.</li>
                  </ul>
                </Text>
              </View>
          </View>

          {/* sección de experiencia profesional  */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experiencia profesional</Text>
            <View style={styles.badgeContainer}>
              <Text style={styles.badge}>MySQL</Text>
              <Text style={styles.badge}>MongoDB</Text>
              <Text style={styles.badge}>HTML</Text>
              <Text style={styles.badge}>CSS</Text>
              <Text style={styles.badge}>Javascript</Text>
              <Text style={styles.badge}>React Native</Text>
              <Text style={styles.badge}>Node.js</Text>
              <Text style={styles.badge}>JAVA</Text>
              <Text style={styles.badge}>Angular</Text>
            </View>
          </View>

            {/* Sección Proyectos */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Proyectos Destacados</Text>
              
              <Pressable style={styles.projectCard}>
                <Image source={require('./assets/666.png')} style={styles.projectIcon} />
                <View style={styles.projectInfo}>
                  <ul>
                    <li><Text style={styles.projectTitle}>InkluSport</Text></li>
                      <Text style={styles.projectSubtitle}>Plataforma de deportes adaptados.</Text>
                  </ul>
                </View>
                <Text style={styles.projectArrow}>›</Text>
              </Pressable>

              <Pressable style={styles.projectCard}>
                <Image source={require('./assets/cg.png')} style={styles.projectIcon} />
                <View style={styles.projectInfo}>
                  <ul>
                    <li><Text style={styles.projectTitle}>Sistema de Fiado</Text></li>
                      <Text style={styles.projectSubtitle}>Sistema de fiado sencillo para la gestión de la información.</Text>
                  </ul>
                  
                </View>
                <Text style={styles.projectArrow}>›</Text>
              </Pressable>
            </View>

            {/* Sección Contacto */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Educación & Contacto</Text>
              <View style={styles.card}>
                <Text style={styles.cardText}>
                  ADSO - SENA Galán Armenia (2026)
                </Text>
                <View style={styles.contactRow}>
                  <Text style={styles.contactLabel}>📞 Tel:</Text>
                  <Text style={styles.contactValue}> +57 300 482 9908</Text>
                </View>
                <View style={styles.contactRow}>
                  <Text style={styles.contactLabel}>📧 Email:</Text>
                  <Text style={styles.contactValue}> samularagran1408@gmail.com</Text>
                </View>
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
      backgroundColor: '#1a2e0e', 
      alignItems: 'center',
      justifyContent: 'center',
    },
    phoneFrame: {
      width: 360, 
      height: 720,
      backgroundColor: '#000',
      borderRadius: 40,
      padding: 12,
      borderWidth: 4,
      borderColor: '#333',
      elevation: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.5,
      shadowRadius: 20,
    },
    speaker: {
      width: 60,
      height: 6,
      backgroundColor: '#222',
      borderRadius: 3,
      alignSelf: 'center',
      marginBottom: 10,
    },
    screen: {
      flex: 1,
      backgroundColor: '#F8FAFC', 
      borderRadius: 28,
      overflow: 'hidden',
    },
    content: {
      padding: 20,
      alignItems: 'center',
    },
    header: {
      alignItems: 'center',
      marginBottom: 25,
    },
    profilePic: {
      width: 100,
      height: 120,
      borderRadius: 60,
      borderWidth: 3,
      borderColor: '#698535',
      marginBottom: 14,
    },
    name: {
      fontSize: 20,
      fontWeight: '800',
      color: '#0F172A',
    },
    role: {
      fontSize: 14,
      color: '#64748B',
      fontWeight: '500',
    },
    section: {
      width: '100%',
      marginBottom: 20,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '700',
      color: '#1E293B',
      marginBottom: 10,
      paddingLeft: 4,
    },
    card: {
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      padding: 16,
      width: '100%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
    },
    cardHighlight: {
      fontWeight: '700',
      color: '#388E3C',
      fontSize: 14,
      marginBottom: 4,
    },
    badgeContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap', 
      justifyContent: 'flex-start',
      gap: 10,
      width: '100%',
    },
    badge: {
      backgroundColor: '#FFFFFF',
      color: '#388E3C', 
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 8,
      fontSize: 12,
      fontWeight: '700',
      borderWidth: 1,
      borderColor: '#E2E8F0',
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
    cardText: {
      fontSize: 13,
      color: '#475569',
      lineHeight: 20,
    },
    divider: {
      height: 1,
      backgroundColor: '#085caf',
      marginVertical: 12,
    },
    projectCard: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      padding: 12,
      marginBottom: 10,
      borderWidth: 1,
      borderColor: '#F1F5F9',
    },
    projectIcon: {
      width: 50,
      height: 50,
      borderRadius: 12,
    },
    projectInfo: {
      flex: 1,
      marginLeft: 12,
    },
    projectTitle: {
      fontSize: 15,
      fontWeight: '700',
      color: '#0F172A',
    },
    projectSubtitle: {
      fontSize: 12,
      color: '#64748B',
    },
    projectArrow: {
      fontSize: 20,
      color: '#CBD5E1',
      fontWeight: 'bold',
    },
    contactRow: {
      flexDirection: 'row',
      marginTop: 8,
    },
    contactLabel: {
      fontWeight: '700',
      fontSize: 12,
      color: '#1E293B',
    },
    contactValue: {
      fontSize: 12,
      color: '#475569',
    },
});