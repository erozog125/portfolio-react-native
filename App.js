import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable, Linking } from 'react-native';

export default function App() {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.appBackground}>
      <View style={styles.phone}>
        <View style={styles.dynamicIsland} />

        <View style={styles.screen}>
          <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

            {/* Header / Perfil */}
            <View style={styles.headerCard}>
              <Image source={require('./assets/Juan Jose Moreno Benavides.jpeg')} style={styles.avatar} />
              <Text style={styles.name}>Juan José Moreno Benavides</Text>
              <Text style={styles.role}>Tecnólogo en ADSO</Text>
            </View>

            {/* Sección: Sobre mí */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Sobre mí</Text>
              <View style={styles.glassCard}>
                <Text style={styles.aboutText}>
                  Desarrollador apasionado por el ecosistema Full-stack. Enfocado en soluciones
                  bien estructuradas con Java y React Native.
                </Text>
              </View>
            </View>

            {/* Habilidades */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Habilidades</Text>
              <View style={styles.skillsGrid}>
                {['Spring Boot', 'Java', 'React Native', 'MySQL', 'Git', 'Docker'].map((skill) => (
                  <View key={skill} style={styles.skillBadge}>
                    <Text style={styles.skillText}>{skill}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Sección: Proyectos */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Proyectos Destacados</Text>

              {/* Proyecto 1: Pulse GYM */}
              <Pressable style={[styles.projectCard, { marginBottom: 15 }]}>
                <Image source={require('./assets/image.png')} style={styles.projectImage} />
                <View style={styles.projectDetails}>
                  <Text style={styles.projectTitle}>Pulse GYM</Text>
                  <Text style={styles.projectSubtitle} numberOfLines={2}>
                    Plataforma integral con biometría e IA para rutinas personalizadas.
                  </Text>
                  <View style={styles.tagContainer}>
                    <Text style={styles.tagText}>Spring Boot • Java • MySQL</Text>
                  </View>
                </View>
              </Pressable>

              {/* Proyecto 2: Karolpsia */}
              <Pressable style={styles.projectCard}>
                <Image source={require('./assets/logo empresa.png')} style={styles.projectImage} />
                <View style={styles.projectDetails}>
                  <Text style={styles.projectTitle}>Karolpsia</Text>
                  <Text style={styles.projectSubtitle} numberOfLines={2}>
                    Sitio web dedicado al mundo del maquillaje y la estética.
                  </Text>
                  {/* Tags separados para Karolpsia */}
                  <View style={styles.separateTagsRow}>
                    <View style={[styles.miniTag, { backgroundColor: '#E3F2FD' }]}>
                      <Text style={[styles.tagText, { color: '#1976D2' }]}>HTML5</Text>
                    </View>
                    <View style={[styles.miniTag, { backgroundColor: '#E8F5E9' }]}>
                      <Text style={[styles.tagText, { color: '#388E3C' }]}>CSS3</Text>
                    </View>
                    <View style={[styles.miniTag, { backgroundColor: '#FFF3E0' }]}>
                      <Text style={[styles.tagText, { color: '#F57C00' }]}>JavaScript</Text>
                    </View>
                  </View>
                </View>
              </Pressable>
            </View>

            {/* Contacto */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Contacto</Text>
              <View style={styles.contactContainer}>
                <Pressable style={styles.contactButton} onPress={() => openLink('mailto:juanjosemorenobenavides207@gmail.com')}>
                  <Image source={require('./assets/gmail.png')} style={styles.contactIcon} />
                </Pressable>
                <Pressable style={styles.contactButton} onPress={() => openLink('https://github.com/juanmorenaso15')}>
                  <Image source={require('./assets/github.png')} style={styles.contactIcon} />
                </Pressable>
                <Pressable style={styles.contactButton} onPress={() => openLink('https://instagram.com/juanmoreno0726')}>
                  <Image source={require('./assets/instagram.png')} style={styles.contactIcon} />
                </Pressable>
              </View>
            </View>

          </ScrollView>
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  appBackground: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    width: 350,
    height: 720,
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    padding: 12,
    shadowColor: '#90CAF9',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.3,
    shadowRadius: 30,
    elevation: 20,
  },
  dynamicIsland: {
    width: 100,
    height: 25,
    backgroundColor: '#1E293B',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 15,
  },
  screen: {
    flex: 1,
    backgroundColor: '#F8FBFF',
    borderRadius: 38,
    overflow: 'hidden',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  headerCard: {
    alignItems: 'center',
    marginBottom: 25,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 4,
    borderColor: '#BBDEFB',
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1A237E',
    textAlign: 'center',
  },
  role: {
    fontSize: 14,
    color: '#64B5F6',
    fontWeight: '600',
    marginTop: 2,
  },
  section: {
    width: '100%',
    marginBottom: 22,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#283593',
    marginBottom: 10,
    paddingLeft: 5,
  },
  glassCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  aboutText: {
    color: '#546E7A',
    fontSize: 13,
    lineHeight: 20,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillBadge: {
    backgroundColor: '#E1F5FE',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#B3E5FC',
  },
  skillText: {
    color: '#0288D1',
    fontSize: 12,
    fontWeight: '600',
  },
  projectCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E3F2FD',
  },
  projectImage: {
    width: 70,
    height: 70,
    borderRadius: 15,
    backgroundColor: '#E3F2FD',
  },

  
  projectDetails: {
    flex: 1,
    marginLeft: 15,
  },
  projectTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A237E',
  },
  projectSubtitle: {
    fontSize: 11,
    color: '#78909C',
    marginTop: 2,
  },
  tagContainer: {
    marginTop: 8,
    backgroundColor: '#E8EAF6',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  separateTagsRow: {
    flexDirection: 'row',
    marginTop: 8,
    gap: 5,
  },
  miniTag: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  tagText: {
    fontSize: 10,
    fontWeight: '700',
  },
  contactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  contactButton: {
    backgroundColor: '#FFFFFF',
    width: 50,
    height: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  contactIcon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },
});