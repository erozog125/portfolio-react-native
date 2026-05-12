import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text,Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={estilos.envoltura}>
      <StatusBar style="light" />
      <View style={estilos.marcoTelefono}>
        <View style={estilos.notch} />
        <LinearGradient colors={['#0b1520', '#0e1e2e']} style={estilos.pantalla}>
          <ScrollView contentContainerStyle={estilos.contenido} showsVerticalScrollIndicator={false}>

            <View style={estilos.tarjetaHero}>
              <View style={estilos.lineaAccento} />
              <View style={estilos.circuloAvatar}>
                <Image style={estilos.inicialesAvatar} source={require('./assets/yo.png')}></Image>
              </View>
              <View style={estilos.infoHero}>
                <Text style={estilos.nombreCompleto}>Jhoan Smith Rodriguez</Text>
                <Text style={estilos.tituloRol}>Desarrollador Fullstack en formación</Text>
                <View style={estilos.filaEtiquetas}>
                  <View style={estilos.etiqueta}><Text style={estilos.textoEtiqueta}>SENA · ADSO</Text></View>
                  <View style={estilos.etiqueta}><Text style={estilos.textoEtiqueta}>Ficha 3194274</Text></View>
                  <View style={estilos.etiqueta}><Text style={estilos.textoEtiqueta}>Montenegro, Quindío</Text></View>
                </View>
              </View>
            </View>

            <View style={estilos.tarjeta}>
              <View style={estilos.cabeceraTarjeta}>
                <Text style={estilos.tituloSeccion}>SOBRE MÍ</Text>
                <View style={estilos.separador} />
              </View>
              <Text style={estilos.textoParrafo}>
                Soy aprendiz del SENA en <Text style={estilos.resaltado}>Análisis y Desarrollo de Software</Text>.
                Me divierte estudiar programación, sobre todo cuando logro que algo funcione por primera vez.
                Estoy en proceso de aprender nuevas tecnologías y cada día entiendo un poco más.
                Fuera del código me gustan los osos pandas y la tranquilidad de vivir en{' '}
                <Text style={estilos.resaltado}>Montenegro, Quindío</Text>.
              </Text>
            </View>

            <View style={estilos.tarjeta}>
              <View style={estilos.cabeceraTarjeta}>
                <Text style={estilos.tituloSeccion}>HABILIDADES TÉCNICAS</Text>
                <View style={estilos.separador} />
              </View>
              <View style={estilos.filaChips}>
                <View style={estilos.chip}><Text style={estilos.textoChip}>Java</Text></View>
                <View style={estilos.chip}><Text style={estilos.textoChip}>Spring Boot</Text></View>
                <View style={estilos.chip}><Text style={estilos.textoChip}>Git</Text></View>
                <View style={estilos.chip}><Text style={estilos.textoChip}>Expo</Text></View>
                <View style={estilos.chip}><Text style={estilos.textoChip}>SCRUM</Text></View>
              </View>
            </View>

            <View style={estilos.tarjeta}>
              <View style={estilos.cabeceraTarjeta}>
                <Text style={estilos.tituloSeccion}>HABILIDADES BLANDAS</Text>
                <View style={estilos.separador} />
              </View>
              <View style={estilos.filaChips}>
                <View style={estilos.chipBlando}><Text style={estilos.textoChipBlando}>Trabajo en equipo</Text></View>
                <View style={estilos.chipBlando}><Text style={estilos.textoChipBlando}>Comunicación</Text></View>
                <View style={estilos.chipBlando}><Text style={estilos.textoChipBlando}>Curiosidad</Text></View>
                <View style={estilos.chipBlando}><Text style={estilos.textoChipBlando}>Adaptabilidad</Text></View>
                <View style={estilos.chipBlando}><Text style={estilos.textoChipBlando}>Puntualidad</Text></View>
                <View style={estilos.chipBlando}><Text style={estilos.textoChipBlando}>Proactividad</Text></View>
              </View>
            </View>

            <View style={estilos.tarjeta}>
              <View style={estilos.cabeceraTarjeta}>
                <Text style={estilos.tituloSeccion}>STACK TECNOLÓGICO</Text>
                <View style={estilos.separador} />
              </View>
              <View style={estilos.rejillaTech}>

                <View style={estilos.itemTech}>
                  <View style={estilos.puntoJava} />
                  <View>
                    <Text style={estilos.nombreTech}>Java</Text>
                    <Text style={estilos.subtituloTech}>Backend · OOP</Text>
                  </View>
                </View>

                <View style={estilos.itemTech}>
                  <View style={estilos.puntoSpring} />
                  <View>
                    <Text style={estilos.nombreTech}>Spring Boot</Text>
                    <Text style={estilos.subtituloTech}>Backend · APIs REST</Text>
                  </View>
                </View>

                <View style={estilos.itemTech}>
                  <View style={estilos.puntoJavaScript} />
                  <View>
                    <Text style={estilos.nombreTech}>JavaScript</Text>
                    <Text style={estilos.aprendiendo}>En aprendizaje ↗</Text>
                  </View>
                </View>

                <View style={estilos.itemTech}>
                  <View style={estilos.puntoAngular} />
                  <View>
                    <Text style={estilos.nombreTech}>Angular</Text>
                    <Text style={estilos.aprendiendo}>En aprendizaje ↗</Text>
                  </View>
                </View>

                <View style={estilos.itemTech}>
                  <View style={estilos.puntoReact} />
                  <View>
                    <Text style={estilos.nombreTech}>React Native</Text>
                    <Text style={estilos.aprendiendo}>En aprendizaje ↗</Text>
                  </View>
                </View>

                <View style={estilos.itemTech}>
                  <View style={estilos.puntoNode} />
                  <View>
                    <Text style={estilos.nombreTech}>Node.js</Text>
                    <Text style={estilos.aprendiendo}>En aprendizaje ↗</Text>
                  </View>
                </View>

                <View style={estilos.itemTech}>
                  <View style={estilos.puntoGit} />
                  <View>
                    <Text style={estilos.nombreTech}>Git & GitHub</Text>
                    <Text style={estilos.subtituloTech}>Control de versiones</Text>
                  </View>
                </View>

                <View style={estilos.itemTech}>
                  <View style={estilos.puntoScrum} />
                  <View>
                    <Text style={estilos.nombreTech}>SCRUM</Text>
                    <Text style={estilos.subtituloTech}>Metodología ágil</Text>
                  </View>
                </View>

              </View>
            </View>

            <View style={estilos.tarjeta}>
              <View style={estilos.cabeceraTarjeta}>
                <Text style={estilos.tituloSeccion}>FORMACIÓN</Text>
                <View style={estilos.separador} />
              </View>
              <View style={estilos.filaFormacion}>
                <Text style={estilos.etiquetaFormacion}>Institución</Text>
                <Text style={estilos.valorFormacion}>SENA</Text>
              </View>
              <View style={estilos.filaFormacion}>
                <Text style={estilos.etiquetaFormacion}>Programa</Text>
                <Text style={estilos.valorFormacion}>ADSO</Text>
              </View>
              <View style={estilos.filaFormacion}>
                <Text style={estilos.etiquetaFormacion}>Ficha</Text>
                <Text style={estilos.valorFormacion}>3194274</Text>
              </View>
              <View style={estilos.filaFormacionFinal}>
                <Text style={estilos.etiquetaFormacion}>Ciudad</Text>
                <Text style={estilos.valorFormacion}>Montenegro, Quindío</Text>
              </View>
            </View>

            <View style={estilos.tarjeta}>
              <View style={estilos.cabeceraTarjeta}>
                <Text style={estilos.tituloSeccion}>CONTACTO</Text>
                <View style={estilos.separador} />
              </View>
              <View style={estilos.rejillaContacto}>
                <View style={estilos.botonContacto} >
                  <Text style={estilos.iconoContacto}>✉</Text>
                  <Text style={estilos.nombreContacto}>Email</Text>
                  <Text style={estilos.textoContacto}>rodriguez.smith{'\n'}.2008@gmail.com</Text>
                </View>
                <View style={estilos.botonContacto}>
                  <Text style={estilos.iconoContacto}>⌥</Text>
                  <Text style={estilos.nombreContacto}>GitHub</Text>
                  <Text style={estilos.textoContacto}>rodriguezsmith{'\n'}2008-web</Text>
                </View>
                <View style={estilos.botonContacto} >
                  <Text style={estilos.iconoContacto}>✆</Text>
                  <Text style={estilos.nombreContacto}>Teléfono</Text>
                  <Text style={estilos.textoContacto}>301 279 7491</Text>
                </View>
              </View>
            </View>

          </ScrollView>
        </LinearGradient>
      </View>
    </View>
  );
}

let estilos = StyleSheet.create({
  envoltura: {
    flex: 1,
    backgroundColor: '#5e6c6c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  marcoTelefono: {
    width: 440,
    height: 880,
    backgroundColor: '#000',
    borderRadius: 40,
    alignItems: 'center',
    padding: 14,
  },
  notch: {
    width: 110,
    height: 8,
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 10,
  },
  pantalla: {
    flex: 1,
    width: '100%',
    borderRadius: 20,
  },
  contenido: {
    padding: 12,
    gap: 10,
    paddingBottom: 24,
  },
  tarjetaHero: {
    backgroundColor: 'rgba(255,255,255,0.04)',
    borderWidth: 0.5,
    borderColor: 'rgba(91,173,216,0.25)',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    overflow: 'hidden',
  },
  lineaAccento: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#5badd8',
    opacity: 0.6,
  },
circuloAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#0e242b',
    borderWidth: 2,
    borderColor: 'rgba(91,173,216,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  inicialesAvatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  infoHero: {
    flex: 1,
    gap: 4,
  },
  nombreCompleto: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    letterSpacing: -0.3,
  },
  tituloRol: {
    color: '#5badd8',
    fontSize: 12,
    fontWeight: '500',
  },
  filaEtiquetas: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 2,
  },
  etiqueta: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: 'rgba(91,173,216,0.25)',
    backgroundColor: 'rgba(91,173,216,0.08)',
  },
  textoEtiqueta: {
    color: '#a8c8e0',
    fontSize: 10,
  },
  tarjeta: {
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.08)',
    borderRadius: 12,
    padding: 14,
    gap: 10,
  },
  cabeceraTarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tituloSeccion: {
    color: '#5badd8',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  separador: {
    flex: 1,
    height: 0.5,
    backgroundColor: 'rgba(91,173,216,0.2)',
  },
  textoParrafo: {
    color: '#9bb5c8',
    fontSize: 13,
    lineHeight: 22,
  },
  resaltado: {
    color: '#e2eaf3',
    fontWeight: '500',
  },
  filaChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: 'rgba(91,173,216,0.08)',
    borderWidth: 0.5,
    borderColor: 'rgba(91,173,216,0.25)',
    borderRadius: 20,
  },
  textoChip: {
    color: '#5badd8',
    fontSize: 12,
    fontWeight: '500',
  },
  chipBlando: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: 'rgba(110,231,183,0.07)',
    borderWidth: 0.5,
    borderColor: 'rgba(110,231,183,0.25)',
    borderRadius: 20,
  },
  textoChipBlando: {
    color: '#6ee7b7',
    fontSize: 12,
    fontWeight: '500',
  },
  rejillaTech: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  itemTech: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    width: '47%',
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.06)',
    borderRadius: 8,
    padding: 10,
  },
  nombreTech: {
    color: '#d0dce8',
    fontSize: 12,
    fontWeight: '500',
  },
  subtituloTech: {
    color: '#5a7a8e',
    fontSize: 10,
    marginTop: 1,
  },
  aprendiendo: {
    color: '#f0db4f',
    fontSize: 10,
    marginTop: 1,
  },
  puntoJava: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#f0a500',
  },
  puntoSpring: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#68b046',
  },
  puntoJavaScript: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#f0db4f',
  },
  puntoAngular: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#dd1b16',
  },
  puntoReact: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#5badd8',
  },
  puntoNode: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#68b046',
  },
  puntoGit: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#f05032',
  },
  puntoScrum: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#888',
  },
  filaFormacion: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  filaFormacionFinal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  etiquetaFormacion: {
    color: '#5a7a8e',
    fontSize: 12,
  },
  valorFormacion: {
    color: '#d0dce8',
    fontSize: 12,
    fontWeight: '500',
  },
  rejillaContacto: {
    flexDirection: 'row',
    gap: 8,
  },
  botonContacto: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.03)',
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.08)',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    gap: 4,
  },
  iconoContacto: {
    color: '#5badd8',
    fontSize: 18,
  },
  nombreContacto: {
    color: '#a8c8e0',
    fontSize: 11,
    fontWeight: '500',
  },
  textoContacto: {
    color: '#5a7a8e',
    fontSize: 10,
    textAlign: 'center',
  },
});