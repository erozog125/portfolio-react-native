import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.phoneShell}>
          <View style={styles.phoneScreen}>
            <View style={styles.notch} />

            <View style={styles.hero}>
              <Image
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/1.jpg',
                }}
                style={styles.avatar}
              />
              <Text style={styles.title}>José Lemus</Text>
              <Text style={styles.role}>Desarrollador de software</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionHeading}>Acerca de mí</Text>
              <View style={styles.aboutPanel}>
                <Text style={styles.description}>
                  Estudiante de desarrollo de software enfocado en backend.
                </Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionHeading}>Proyectos</Text>
              <Pressable
                style={({ pressed }) => [
                  styles.projectCard,
                  pressed && styles.projectCardPressed,
                ]}
                onPress={() => console.log('INKLUSPORT')}
              >
                <Image
                  source={{
                    uri: 'https://picsum.photos/seed/inklusport/120/120',
                  }}
                  style={styles.projectThumb}
                />
                <View style={styles.projectBody}>
                  <Text style={styles.projectTitle}>INKLUSPORT</Text>
                  <Text style={styles.projectDescription}>
                    Plataforma de gestión para deportes inclusivos.
                  </Text>
                </View>
                <Text style={styles.chevron}>›</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const shellShadow = {
  shadowColor: '#1f2937',
  shadowOffset: { width: 0, height: 16 },
  shadowOpacity: 0.18,
  shadowRadius: 28,
  elevation: 14,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 28,
    paddingBottom: 40,
  },
  phoneShell: {
    width: '100%',
    maxWidth: 380,
    borderRadius: 46,
    borderWidth: 14,
    borderColor: '#db2777',
    padding: 12,
    backgroundColor: '#fce7f3',
    ...shellShadow,
  },
  phoneScreen: {
    borderRadius: 38,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 22,
    paddingTop: 18,
    paddingBottom: 26,
    gap: 22,
  },
  notch: {
    alignSelf: 'center',
    width: 112,
    height: 8,
    borderRadius: 999,
    backgroundColor: '#f1f5f9',
    marginBottom: 4,
  },
  hero: {
    alignItems: 'center',
    gap: 12,
    paddingTop: 8,
    paddingBottom: 4,
  },
  avatar: {
    width: 118,
    height: 118,
    borderRadius: 59,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    shadowColor: '#db2777',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.22,
    shadowRadius: 14,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#9d174d',
    textAlign: 'center',
    letterSpacing: -0.4,
  },
  role: {
    fontSize: 18,
    fontWeight: '500',
    color: '#64748b',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 12,
  },
  section: {
    gap: 12,
    width: '100%',
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: '700',
    color: '#9d174d',
    letterSpacing: -0.2,
  },
  aboutPanel: {
    backgroundColor: '#fdf2f8',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#fbcfe8',
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: '#475569',
    lineHeight: 21,
  },
  projectCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#db2777',
    shadowColor: '#9f1239',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  projectCardPressed: {
    opacity: 0.92,
    transform: [{ scale: 0.992 }],
  },
  projectThumb: {
    width: 58,
    height: 58,
    borderRadius: 14,
    backgroundColor: '#fce7f3',
  },
  projectBody: {
    flex: 1,
    gap: 6,
    minWidth: 0,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#9d174d',
    letterSpacing: -0.2,
  },
  projectDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#64748b',
    lineHeight: 20,
  },
  chevron: {
    fontSize: 26,
    fontWeight: '600',
    color: '#db2777',
    paddingLeft: 4,
    marginTop: -2,
  },
});
