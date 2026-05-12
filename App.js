import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function App() {
  const [tab, setTab] = useState('inicio');

  return (
    <LinearGradient colors={['#0f172a', '#1e3a8a', '#38bdf8']} style={styles.appBackground}>
      <StatusBar style="light" />
      <View style={styles.phone}>
        <View style={styles.notch} />
        <View style={styles.screen}>
          <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

            {tab === 'inicio' && (
              <>
                <LinearGradient colors={['#1e3a8a', '#2563eb']} style={styles.hero}>
                  <Image source={require('./assets/yo.png')} style={styles.avatar} />
                  <Text style={styles.hola}>Hola, soy</Text>
                  <Text style={styles.nombre}>Andres Felipe Echeverri</Text>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>Desarrollador de Software</Text>
                  </View>
                  <Text style={styles.ubicacion}>📍 Armenia, Quindío · Colombia</Text>
                </LinearGradient>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Sobre mí</Text>
                  <Text style={styles.parrafo}>
                    Me gusta construir apps y aprender cosas nuevas. Estoy empezando en el mundo del desarrollo
                    y me enfoco en el desarrollo móvil y web.
                  </Text>
                </View>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Educación</Text>
                  <View style={styles.eduCard}>
                    <Text style={styles.eduIcon}>📜</Text>
                    <View>
                      <Text style={styles.eduTitulo}>Técnico en Programación de Software</Text>
                      <Text style={styles.eduInst}>SENA</Text>
                      <Text style={styles.eduPeriodo}>2025 – Actual</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Contacto</Text>
                  <View style={styles.contactRow}>
                    <Text>✉️  andresf.echeverric08@gmail.com</Text>
                  </View>
                  <View style={styles.contactRow}>
                    <Text>🐙  github.com/iRay1h</Text>
                  </View>
                </View>
              </>
            )}

            {tab === 'skills' && (
              <>
                <View style={styles.tabTop}>
                  <Text style={styles.tabTopTitle}>⚡ Skills</Text>
                </View>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Lenguajes</Text>

                  <Text style={styles.skillLabel}>JavaScript  90%</Text>
                  <View style={styles.barBg}>
                    <LinearGradient colors={['#facc15', '#f59e0b']} style={[styles.barFill, { width: '90%' }]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} />
                  </View>

                  <Text style={styles.skillLabel}>Python  70%</Text>
                  <View style={styles.barBg}>
                    <LinearGradient colors={['#a78bfa', '#7c3aed']} style={[styles.barFill, { width: '70%' }]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} />
                  </View>

                  <Text style={styles.skillLabel}>SQL  75%</Text>
                  <View style={styles.barBg}>
                    <LinearGradient colors={['#f87171', '#dc2626']} style={[styles.barFill, { width: '75%' }]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} />
                  </View>
                </View>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Frameworks</Text>

                  <Text style={styles.skillLabel}>React Native  85%</Text>
                  <View style={styles.barBg}>
                    <LinearGradient colors={['#38bdf8', '#0ea5e9']} style={[styles.barFill, { width: '85%' }]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} />
                  </View>

                  <Text style={styles.skillLabel}>React.js  80%</Text>
                  <View style={styles.barBg}>
                    <LinearGradient colors={['#34d399', '#10b981']} style={[styles.barFill, { width: '80%' }]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} />
                  </View>

                  <Text style={styles.skillLabel}>Node.js  65%</Text>
                  <View style={styles.barBg}>
                    <LinearGradient colors={['#6ee7b7', '#059669']} style={[styles.barFill, { width: '65%' }]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} />
                  </View>
                </View>

                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Herramientas</Text>
                  <View style={styles.chipGrid}>
                    <View style={styles.chip}><Text>💻 VS Code</Text></View>
                    <View style={styles.chip}><Text>🎨 Figma</Text></View>
                    <View style={styles.chip}><Text>🔀 Git & GitHub</Text></View>
                    <View style={styles.chip}><Text>📡 Postman</Text></View>
                    <View style={styles.chip}><Text>📓 Notion</Text></View>
                  </View>
                </View>
              </>
            )}

            {tab === 'proyectos' && (
              <>
                <View style={styles.tabTop}>
                  <Text style={styles.tabTopTitle}>🚀 Proyectos</Text>
                </View>

                <View style={styles.section}>
                  <LinearGradient colors={['#1e3a8a', '#2563eb']} style={styles.projectCard}>
                    <Text style={styles.projectName}>App de Finanzas Personales</Text>
                    <Text style={styles.projectDesc}>App móvil para gestión de gastos e ingresos con gráficas.</Text>
                    <View style={styles.techBadge}>
                      <Text style={styles.techText}>React Native</Text>
                    </View>
                  </LinearGradient>

                  <LinearGradient colors={['#064e3b', '#059669']} style={styles.projectCard}>
                    <Text style={styles.projectName}>Portfolio Web</Text>
                    <Text style={styles.projectDesc}>Sitio web personal con secciones interactivas.</Text>
                    <View style={styles.techBadge}>
                      <Text style={styles.techText}>React.js · CSS</Text>
                    </View>
                  </LinearGradient>

                  <LinearGradient colors={['#4c1d95', '#7c3aed']} style={styles.projectCard}>
                    <Text style={styles.projectName}>API REST – Inventario</Text>
                    <Text style={styles.projectDesc}>Backend para sistema de inventario con autenticación JWT.</Text>
                    <View style={styles.techBadge}>
                      <Text style={styles.techText}>Node.js · Express · SQL</Text>
                    </View>
                  </LinearGradient>
                </View>
              </>
            )}

          </ScrollView>

          <View style={styles.tabBar}>
            <Pressable style={styles.tabItem} onPress={() => setTab('inicio')}>
              <Text>🏠</Text>
              <Text style={[styles.tabLabel, tab === 'inicio' && { color: '#2563eb' }]}>Inicio</Text>
            </Pressable>
            <Pressable style={styles.tabItem} onPress={() => setTab('skills')}>
              <Text>⚡</Text>
              <Text style={[styles.tabLabel, tab === 'skills' && { color: '#2563eb' }]}>Skills</Text>
            </Pressable>
            <Pressable style={styles.tabItem} onPress={() => setTab('proyectos')}>
              <Text>🚀</Text>
              <Text style={[styles.tabLabel, tab === 'proyectos' && { color: '#2563eb' }]}>Proyectos</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    width: 340,
    height: 680,
    backgroundColor: '#111827',
    borderRadius: 44,
    padding: 7,
    alignItems: 'center',
  },
  notch: {
    width: 110,
    height: 5,
    backgroundColor: '#374151',
    borderRadius: 5,
    marginBottom: 8,
  },
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f1f5f9',
    borderRadius: 38,
    overflow: 'hidden',
  },
  content: {
    paddingBottom: 16,
  },
  hero: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 22,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 4,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#bfdbfe',
    marginBottom: 10,
    resizeMode: 'cover',
  },
  hola: {
    color: '#bfdbfe',
    fontSize: 13,
    fontWeight: '600',
  },
  nombre: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 10,
  },
  badge: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 8,
  },
  badgeText: {
    color: '#e0f2fe',
    fontSize: 12,
    fontWeight: '600',
  },
  ubicacion: {
    color: '#bfdbfe',
    fontSize: 11,
  },
  section: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1e293b',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  parrafo: {
    fontSize: 12.5,
    color: '#475569',
    lineHeight: 20,
  },
  eduCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 12,
    alignItems: 'flex-start',
  },
  eduIcon: {
    fontSize: 22,
    marginRight: 12,
  },
  eduTitulo: {
    fontSize: 12.5,
    fontWeight: '700',
    color: '#1e293b',
  },
  eduInst: {
    fontSize: 11.5,
    color: '#2563eb',
    fontWeight: '600',
  },
  eduPeriodo: {
    fontSize: 11,
    color: '#94a3b8',
  },
  contactRow: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 8,
  },
  tabTop: {
    backgroundColor: '#1e293b',
    alignItems: 'center',
    paddingVertical: 18,
  },
  tabTopTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '800',
  },
  skillLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 5,
    marginTop: 10,
  },
  barBg: {
    height: 7,
    backgroundColor: '#e2e8f0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 10,
  },
  chipGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 7,
  },
  chip: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  projectCard: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
  },
  projectName: {
    color: '#ffffff',
    fontSize: 13.5,
    fontWeight: '800',
    marginBottom: 5,
  },
  projectDesc: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 11.5,
    lineHeight: 17,
    marginBottom: 10,
  },
  techBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.18)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  techText: {
    color: '#e0f2fe',
    fontSize: 10.5,
    fontWeight: '700',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 38,
    borderBottomRightRadius: 38,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 10,
    color: '#94a3b8',
    fontWeight: '600',
    marginTop: 2,
  },
});