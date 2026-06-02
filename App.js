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

    <View style={styles.appBackground}>

      <View style={styles.phone}>

        <View style={styles.notch} />

        <View style={styles.screen}>

          <View style={styles.blur1} />
          <View style={styles.blur2} />
          <View style={styles.blur3} />

          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
          >

            <View style={styles.header}>

              <Text style={styles.star1}>●●●</Text>
              <Text style={styles.star2}>♥︎</Text>

              <Image
                source={require('./assets/cora.png')}
                style={styles.logo}
              />

              <View style={styles.headerInfo}>

                <Text style={styles.name1}>
                  MARIA JOSÉ
                </Text>

                <Text style={styles.name2}>
                  ROJAS GARIBELLO
                </Text>

                <Text style={styles.role}>
                  Analista y Desarrolladora de Software
                </Text>

                <View style={styles.inicio}>

                  <Image
                    source={require('./assets/cora.png')}
                    style={styles.corazon}
                  />

                  <Text style={styles.datos}>
                    Me gusta crear soluciones, aprender nuevas tecnologías
                    y convertir ideas en experiencias digitales modernas.
                  </Text>

                </View>

              </View>

            </View>


            <View style={styles.infoContainer}>

              <View style={styles.infoBox}>
                <Text style={styles.infoEmoji}></Text>
                <Text style={styles.infoText}>18 años</Text>
              </View>

              <View style={styles.infoBox}>
                <Text style={styles.infoEmoji}></Text>
                <Text style={styles.infoText}>Colombia</Text>
              </View>

              <View style={styles.infoBox}>
                <Text style={styles.infoEmoji}></Text>
                <Text style={styles.infoText}>ADSO</Text>
              </View>

            </View>


            <View style={styles.section}>

              <Text style={styles.sectionTitle}>
                ✦ Sobre mí
              </Text>

              <View style={styles.cardRow}>

                <Image
                  source={require('./assets/ventana.png')}
                  style={styles.ventana}
                />

                <Text style={styles.itemText}>
                  Soy una desarrolladora apasionada por el diseño y
                  la programación. Me encanta crear interfaces modernas,
                  minimalistas y funcionales.
                </Text>

              </View>

            </View>


            <View style={styles.section}>

              <Text style={styles.sectionTitle}>
                ✦ Tecnologías que manejo
              </Text>

              <View style={styles.skillsContainer}>

                <View style={styles.skill}>
                  <View style={styles.skillCircle}>
                    <Image
                      source={require('./assets/css-3.png')}
                      style={styles.skillEmoji}
                    />
                  </View>
                  <Text style={styles.skillText}>CSS</Text>
                </View>

                <View style={styles.skill}>
                  <View style={styles.skillCircle}>
                    <Image
                      source={require('./assets/pngegg.png')}
                      style={styles.skillEmoji}
                    />
                  </View>
                  <Text style={styles.skillText}>HTML</Text>
                </View>

              </View>

            </View>

            <View style={styles.section}>

              <Text style={styles.sectionTitle}>
                ✦ Proyectos
              </Text>

              <Pressable style={styles.projectItem}>

                <Image
                  source={require('./assets/super.jpg')}
                  style={styles.projectImage}
                />

                <View style={styles.projectInfo}>

                  <Text style={styles.projectTitle}>
                    Sistema Supermercado
                  </Text>

                  <Text style={styles.projectSubtitle}>
                    CRUD de productos, proveedores y roles.
                  </Text>

                </View>

              </Pressable>

              <Pressable style={styles.projectItem}>

                <Image
                  source={require('./assets/LOGO.webp')}
                  style={styles.projectImage}
                />

                <View style={styles.projectInfo}>

                  <Text style={styles.projectTitle}>
                    Edu Planner
                  </Text>

                  <Text style={styles.projectSubtitle}>
                    Sistema de organización académica.
                  </Text>

                </View>

              </Pressable>


            </View>

            <View style={styles.section}>

              <Text style={styles.sectionTitle}>
                ✦ Gustos
              </Text>

              <View style={styles.gustosContainer}>

                <View style={styles.gusto}>
                  <Text style={styles.gustoEmoji}>🎮</Text>
                  <Text style={styles.gustoText}>Gaming</Text>
                </View>

                <View style={styles.gusto}>
                  <Text style={styles.gustoEmoji}>🎵</Text>
                  <Text style={styles.gustoText}>Música</Text>
                </View>

                <View style={styles.gusto}>
                  <Text style={styles.gustoEmoji}>💻</Text>
                  <Text style={styles.gustoText}>Programar</Text>
                </View>

                <View style={styles.gusto}>
                  <Text style={styles.gustoEmoji}>🎨</Text>
                  <Text style={styles.gustoText}>Diseño</Text>
                </View>

              </View>

            </View>


            <View style={styles.footer}>

              <Text style={styles.footerTitle}>
                ✦ Contacto
              </Text>

              <Text style={styles.footerText}>
                https://github.com/dashboard
              </Text>

              <Text style={styles.footerText}>
                mariagaribello@gmail.com
              </Text>

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
    backgroundColor: '#cddcff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  phone: {
    width: 430,
    height: 720,
    backgroundColor: '#90b4ff',
    borderRadius: 45,
    padding: 16,
  },

  notch: {
    width: 120,
    height: 8,
    backgroundColor: '#4f6fbf',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 12,
  },

  screen: {
    flex: 1,
    backgroundColor: '#fdfdff',
    borderRadius: 35,
    padding: 22,
    overflow: 'hidden',
  },

  content: {
    paddingBottom: 40,
  },


  blur1: {
    position: 'absolute',
    width: 220,
    height: 220,
    backgroundColor: '#bcd2ff',
    borderRadius: 200,
    top: -40,
    left: -50,
    opacity: 0.5,
  },

  blur2: {
    position: 'absolute',
    width: 180,
    height: 180,
    backgroundColor: '#d8e4ff',
    borderRadius: 200,
    bottom: 120,
    right: -40,
    opacity: 0.5,
  },

  blur3: {
    position: 'absolute',
    width: 120,
    height: 120,
    backgroundColor: '#edf3ff',
    borderRadius: 200,
    top: 260,
    right: -20,
    opacity: 0.7,
  },

  header: {
    backgroundColor: '#ffffff',
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#8ba4ff',
    padding: 20,
    shadowColor: '#b7c9ff',
    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.2,
    shadowRadius: 12,

    elevation: 5,

    marginBottom: 28,
    alignItems: 'center',
  },

  logo: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#dce7ff',
    marginBottom: 18,
  },

  headerInfo: {
    alignItems: 'center',
  },

  name1: {
    fontSize: 30,
    fontWeight: '900',
    color: '#4c6fe7',
    textAlign: 'center',
  },

  name2: {
    fontSize: 30,
    fontWeight: '900',
    color: '#8ba4ff',
    textAlign: 'center',
    marginBottom: 8,
  },

  role: {
    fontSize: 15,
    color: '#6b7a99',
    textAlign: 'center',
    marginBottom: 18,
  },

  inicio: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a9c2ff',
    padding: 18,
    borderRadius: 24,
  },

  corazon: {
    width: 26,
    height: 26,
    marginRight: 12,
  },

  datos: {
    flex: 1,
    fontSize: 13,
    color: '#ffffff',
    lineHeight: 20,
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },

  infoBox: {
    width: '31%',
    backgroundColor: '#f3f6ff',
    borderRadius: 24,
    paddingVertical: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dfe8ffc3',

    shadowColor: '#c4d4ff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,

    elevation: 3,
  },

  infoText: {
     color: '#99a6ca',
  },

  section: {
    marginBottom: 28,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#4d6ddc',
    marginBottom: 16,
  },

  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f9ff',
    borderRadius: 28,
    padding: 22,
    borderWidth: 1,
    borderColor: '#dce5ff',
    shadowColor: '#c4d4ff',
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.15,
    shadowRadius: 8,

    elevation: 3,
  },
  ventana: {
    height: 150,
    width: 100,
    marginRight: 20,
  },
  itemText: {
    color: '#4b5563',
    lineHeight: 25,
    fontSize: 14,
  },

  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  skill: {
    width: '23%',
    alignItems: 'center',
    marginBottom: 14,
  },

  skillCircle: {
    width: 70,
    height: 70,
    borderRadius: 60,
    backgroundColor: '#f7f9ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#dce5ff',

    shadowColor: '#c4d4ff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,

    elevation: 3,
  },

  skillEmoji: {
    width:40,
    height:40,
    bottom:3,
  },

  skillText: {
    marginTop: 8,
    color: '#4b5b7c',
    fontSize: 12,
  },

  projectItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 28,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#dce5ff',

    shadowColor: '#c4d4ff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,

    elevation: 3,
  },

  projectImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
    marginRight: 16,
  },

  projectInfo: {
    flex: 1,
  },

  projectTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#31456a',
    marginBottom: 6,
  },

  projectSubtitle: {
    fontSize: 13,
    color: '#64748b',
  },

  gustosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  gusto: {
    width: '48%',
    backgroundColor: '#f7f9ff',
    borderRadius: 24,
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#dce5ff',

    shadowColor: '#c4d4ff',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,

    elevation: 3,
  },

  gustoEmoji: {
    fontSize: 24,
  },

  gustoText: {
    marginTop: 8,
    fontSize: 12,
    color: '#4b5b7c',
  },

  footer: {
    backgroundColor: '#a9c2ff',
    padding: 24,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },

  footerTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#ffffff',
    marginBottom: 12,
  },

  footerText: {
    color: '#eef4ff',
    marginBottom: 6,
  },

  star1: {
    position: 'absolute',
    top: 20,
    left: 20,
    fontSize: 18,
    color: '#89a8ff',
  },

  star2: {
    position: 'absolute',
    top: 30,
    right: 30,
    fontSize: 22,
    color: '#8ba4ff',
  },

  star3: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    fontSize: 16,
    color: '#89a8ff',
  },

});