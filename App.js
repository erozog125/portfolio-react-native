import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.fondo}>
      <StatusBar style="light" />

      <View style={styles.phone}>
        <View style={styles.notch} />
        <View style={styles.screen}>
          <ScrollView
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.card}>
              <Image source={require("./assets/d.png")} style={styles.image} />
              <Text style={styles.text}>Welcome</Text>
            </View>

            <View style={styles.contenido}>
              <Text style={styles.texto}>JHON DAYRON</Text>
              <Text style={styles.textoCargo}>Programming Technician</Text>
              <Image
                source={require("./assets/d.png")}
                style={styles.images1}
              />
            </View>

            <View style={styles.tarjetaAbajo}>
              <View style={styles.filaContacto}>
                <View>
                  <Text style={styles.textoChico}>¿Puedo ayudarle?</Text>
                  <Text style={styles.textoGrande}>¿Trabajamos?</Text>
                </View>
                <TouchableOpacity style={styles.boton}>
                  <Text style={styles.botonTexto}>Contactame</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.filaTarjetas}>
                <TouchableOpacity
                  style={[styles.tarjetita, styles.tarjetaRosa]}
                >
                  <Text style={styles.tarjetaIcono}>💼</Text>
                  <Text style={styles.tarjetaTexto}>Mis trabajos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.tarjetita, styles.tarjetaVerde]}
                >
                  <Text style={styles.tarjetaIcono}>🪪</Text>
                  <Text style={styles.tarjetaTexto}>Sobre mi</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.tarjetita, styles.tarjetaAzul]}
                >
                  <Text style={styles.tarjetaIcono}>📍</Text>
                  <Text style={styles.tarjetaTexto}>Referencias</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5b5b5d",
  },
  phone: {
    width: 300,
    height: 600,
    backgroundColor: "#2a2e3d",
    borderRadius: 40,
    alignItems: "center",
  },
  notch: {
    position: "absolute",
    width: 130,
    height: 17,
    backgroundColor: "#fffefe",
    borderRadius: 15,
    top: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  screen: {
    width: 280,
    height: 540,
    marginTop: 40,
    backgroundColor: "#fff",
    borderRadius: 25,
    overflow: "hidden",
  },
  
  card: {
    width: "100%",
    height: 540,
    backgroundColor: "#7541ad",
    borderRadius: 20,
    overflow: "hidden",
  },
  text: {
    textShadowColor: "rgb(36, 31, 35)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    position: "absolute",
    right: 50,
    top: 190,
    fontSize: 90,
    fontWeight: "bold",
    color: "white",
    transform: [{ rotate: "-90deg" }],
  },
  image: {
    width: 350,
    height: 540,
    position: "absolute",
    right: -70,
  },
  contenido: {
    width: "auto",
    height: 380,
    borderRadius: 20,
    backgroundColor: "#7541ad",
  },
  images1: {
    width: 200,
    height: 250,
    borderRadius: 20,
    resizeMode: "cover",
    top: 20,
    alignSelf: "center",
  },
  texto: {
    top: 10,
    left: 10,
    fontSize: 15,
    color: "white",
  },
  textoCargo: {
    top: 10,
    left: 10,
    fontSize: 13,
    color: "#d4b8ff",
  },

  tarjetaAbajo: {
    backgroundColor: "white",
    height: 170,
    borderRadius: 20,
    padding: 14,
    gap: 10,
  },
  filaContacto: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textoChico: {
    fontSize: 11,
    color: "#9aa0b8",
  },
  textoGrande: {
    fontSize: 14,
    fontWeight: "700",
    color: "#1a2040",
  },
  boton: {
    backgroundColor: "#8b5cf6",
    borderRadius: 20,
    paddingVertical: 9,
    paddingHorizontal: 16,
  },
  botonTexto: {
    color: "white",
    fontWeight: "700",
    fontSize: 12,
  },
  filaTarjetas: {
    top: 10,
    flexDirection: "row",
    gap: 8,
  },
  tarjetita: {
    top: 10,
    height: 80,
    flex: 1,
    borderRadius: 14,
    padding: 10,
    gap: 6,
  },
  tarjetaRosa: { backgroundColor: "#e8a070" },
  tarjetaVerde: { backgroundColor: "#2ec4b6" },
  tarjetaAzul: { backgroundColor: "#6faee8" },
  tarjetaIcono: { fontSize: 16 },
  tarjetaTexto: {
    fontSize: 10,
    fontWeight: "700",
    color: "white",
    lineHeight: 15,
  },
});
