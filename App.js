import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.appBackground}>
      <View style={styles.phone}>
        <View style={styles.notch} />
        <View style={styles.screen}>
          <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <Image source={require('./assets/thomas.jpeg')} style={styles.logo} />
            <Text style={styles.name}>Thomas David Castañeda</Text>
            <Text style={styles.role}>Desarrollador Junior Full Stack</Text>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Acerca de mí</Text>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>
                  Estudiante de Análisis y Desarrollo de Software en el SENA, con formación en tecnologías de desarrollo y bases de datos. Experiencia en atención al cliente en entornos de alta demanda, desarrollando habilidades como comunicación efectiva, resolución de problemas y trabajo bajo presión. Me destaco por ser una persona responsable, proactiva y con gran capacidad de aprendizaje.
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Proyectos</Text>
              <Pressable style={styles.projectItem}>
                <View style={styles.projectImagePlaceholder}>
                  <Image source={require('./assets/PulseGYM.jpg')} style={styles.projectImage} />
                </View>
                <View style={styles.projectInfo}>
                  <Text style={styles.projectTitle}>Pulse GYM</Text>
                  <Text style={styles.projectSubtitle}>Sistema de gestión para gimnasios que usa control biométrico e IA para generar rutinas y planes nutricionales personalizados, incluye app móvil</Text>
                </View>
                <Text style={styles.projectArrow}>›</Text>
              </Pressable>
              <Pressable style={styles.projectItem}>
                <View style={styles.projectImagePlaceholder}>
                  <Image source={require('./assets/working.png')} style={styles.projectImage} />
                </View>
                <View style={styles.projectInfo}>
                  <Text style={styles.projectTitle}>Working</Text>
                  <Text style={styles.projectSubtitle}>Pagina web de trabajo con estilo minimalista y clara jerarquía.</Text>
                </View>
                <Text style={styles.projectArrow}>›</Text>
              </Pressable>
              <Pressable style={styles.projectItem}>
                <View style={styles.projectImagePlaceholder}>
                  <Image source={require('./assets/micromarkett.jpg')} style={styles.projectImage} />
                </View>
                <View style={styles.projectInfo}>
                  <Text style={styles.projectTitle}>MicroMarkett</Text>
                  <Text style={styles.projectSubtitle}>Sistema de gestion de mercados de productos de consumo y servicios.</Text>
                </View>
                <Text style={styles.projectArrow}>›</Text>
              </Pressable>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Estudios</Text>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>
                  - Tecnico en analisis y desarrollo de software en el SENA
                </Text>
                <Text style={styles.itemText}>
                  - Tecnologo en analisis y desarrollo de software en el SENA
                </Text>
              </View>
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Experiencia laboral</Text>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>
                  <ul></ul>
                  - Atención al cliente en restaurante turístico, brindando asesoría sobre el menú.
                    Toma y gestión de pedidos de manera eficiente.
                    Servicio de alimentos y bebidas garantizando una buena experiencia al cliente.
                    Manejo de pagos y apoyo en caja.
                    Trabajo en equipo en ambientes de alta demanda.
                </Text>
                <Text style={styles.itemText}>
                  - Atencion al cliente en papeleria, manejando el area de sistemas y computacion.
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Contacto</Text>
              <View style={styles.listItem}>
                <Text style={styles.itemText}>
                  <ul>
                    <li>Email: castanedamunoz23@gmail.com</li>
                    <li>Git Hub: thomasx4</li>
                    <li>Telefono: 318 775 2639</li>
                  </ul>
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
    backgroundColor: '#5593c5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    width: 330,
    height: 640,
    backgroundColor: '#000000e0',
    borderRadius: 44,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 22 },
    shadowOpacity: 0.28,
    shadowRadius: 34,
    elevation: 14,
  },
  notch: {
    width: 110,
    height: 8,
    backgroundColor: '#817b7b',
    borderRadius: 5,
    marginBottom: 14,
  },
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
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
    borderColor: '#000000',
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
    alignItems: 'center',
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginBottom: 18,
  },
  sectionTitle: {
    color: '#2a3858',
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
    borderColor: '#1e1f4700',
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
