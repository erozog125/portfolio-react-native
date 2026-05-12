import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.appBackground}>
      <View style={styles.phone}>
        {/* Notch superior del marco del teléfono */}
        <View style={styles.notch} />
        
        <View style={styles.screen}>
          <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            
            {/* Foto de Perfil */}
            <Image 
              source={require('./assets/cARLOS.jpeg')} 
              style={styles.logo} 
            />
            
            <Text style={styles.name}>Carlos Rivera</Text>
            <Text style={styles.role}>Desarrollador de Software | Backend</Text>

            {/* Sección Acerca de mí */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Acerca de mí</Text>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>
                  Estudiante de desarrollo de software enfocado en backend. Actualmente combino mi formación profesional con experiencia laboral en tiendas Ara.
                </Text>
              </View>
            </View>

            {/* Sección Proyectos */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Proyectos</Text>
              
              {/* Proyecto 1 */}
              <Pressable style={styles.projectItem}>
                <View style={styles.projectImagePlaceholder}>
                  <Image source={require('./assets/inklu.jpeg')} style={styles.projectImage} />
                </View>
                <View style={styles.projectInfo}>
                  <Text style={styles.projectTitle}>InkluSport</Text>
                  <Text style={styles.projectSubtitle}>Plataforma de gestión para deportes inclusivos.</Text>
                </View>
                <Text style={styles.projectArrow}>›</Text>
              </Pressable>

              {/* Proyecto 2 */}
              <Pressable style={styles.projectItem}>
                <View style={styles.projectImagePlaceholder}>
                  <Image source={require('./assets/mikto_market.jpeg')} style={styles.projectImage} />
                </View>
                <View style={styles.projectInfo}>
                  <Text style={styles.projectTitle}>Micro_Marlet</Text>
                  <Text style={styles.projectSubtitle}>Sistema de inventarios y ventas en Java.</Text>
                </View>
                <Text style={styles.projectArrow}>›</Text>
              </Pressable>
            </View>

            {/* Sección Estudios */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Estudios</Text>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>
                  Bachiller técnico en software, marketing y pediatría.
                </Text>
              </View>
            </View>
            
          </ScrollView>
        </View>
      </View>
      {/* Barra de estado en modo oscuro para fondo blanco */}
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  appBackground: {
    flex: 1, // Ocupa todo el espacio [cite: 100]
    backgroundColor: '#FFFFFF', // Blanco
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    width: 330,
    height: 640,
    backgroundColor: '#E11D48', // Rojo vibrante
    borderRadius: 44,
    padding: 16,
    alignItems: 'center',
    elevation: 14, // Sombra para Android [cite: 164]
  },
  notch: {
    width: 110,
    height: 8,
    backgroundColor: '#9F1239', // Rojo oscuro
    borderRadius: 5,
    marginBottom: 14,
  },
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
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
    borderRadius: 70, 
    borderWidth: 4,
    borderColor: '#FEE2E2',
    marginBottom: 16,
  },
  name: {
    color: '#9F1239',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  role: {
    color: '#4B5563', 
    fontSize: 14,
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginBottom: 18,
  },
  sectionTitle: {
    color: '#E11D48',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  listItem: {
    width: '100%',
    backgroundColor: '#FFF1F2',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  itemText: {
    color: '#1F2937',
    fontSize: 13,
    lineHeight: 20,
  },
  projectItem: {
    width: '100%',
    flexDirection: 'row', // Alineación horizontal [cite: 106]
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#FCA5A5',
  },
  projectImagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 12,
    marginRight: 12,
  },
  projectImage: {
    width: 50,
    height: 50,
    borderRadius: 12,
  },
  projectInfo: {
    flex: 1, 
  },
  projectTitle: {
    color: '#9F1239',
    fontSize: 15,
    fontWeight: '700',
  },
  projectSubtitle: {
    color: '#6B7280', 
    fontSize: 12,
  },
  projectArrow: {
    color: '#E11D48',
    fontSize: 22,
    marginLeft: 8,
  },
});