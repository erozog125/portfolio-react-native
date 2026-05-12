import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient
      colors={['#0f172a', '#1e3a8a', '#38bdf8']}
      style={styles.appBackground}
    >
      <View style={styles.phone}>
        <View style={styles.notch} />
        <View style={styles.screen}>
          <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
    
              <Image source={require('./assets/portfolio.jpeg')} style={styles.logo} />
              <Text style={styles.hola}>Hola</Text>
              <Text style={styles.name}>Andres Felipe Echeverri</Text>
              <View style={styles.progressBarBackground}>
                
              <LinearGradient
                colors={['#2563eb', '#38bdf8']}
                style={styles.progressBarFill}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            </View>


          </ScrollView>
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
    width: 330,
    height: 640,
    backgroundColor: '#000000',
    borderRadius: 40,
    padding: 7,
    alignItems: 'center',
  },
  notch: {
    width: 110,
    height: 5,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginBottom: 10,
  },
  screen: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f4f7fb',
    borderRadius: 40,
    padding: 20,
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingBottom: 24,
  },

  logo: {
    width: 130,
    height: 130,
    resizeMode: 'cover',
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#dbe7fb',
    marginBottom: 16,
  },

  hola: {
    color: '#102a43',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 4,
  },

  name: {
    color: '#102a43',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },


  progressBarBackground: {
  width: 220,
  height: 6,
  backgroundColor: '#d1d5db',
  borderRadius: 10,
  marginTop: 20,
  overflow: 'hidden',
},

progressBarFill: {
  width: '50%',
  height: '100%',
  borderRadius: 10,
},



});

