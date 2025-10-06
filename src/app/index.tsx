import { router } from "expo-router";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function Index() {
  return (
      <View style={styles.containerSuperior}>
        <Image
          source={require("../.././assets/images/login.png")}
          style={styles.imagem}
        />

        <View style={styles.containerInferior}>
          <Text style={styles.texto}>BOAS VINDAS!</Text>
          <Text style={styles.subtexto}>
            Pronto para organizar suas finanças? Acesse agora
          </Text>
          
          <View style={styles.containercaixa}>
            <TextInput
              style={styles.a}
              placeholder="Nome"
              placeholderTextColor={'#a1a2a1'}
            />
              
            <TextInput
              style={styles.a}
              placeholder="E-mail"
              placeholderTextColor={'#a1a2a1'}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.a}
              placeholder="Senha"
              placeholderTextColor={'#a1a2a1'}
              secureTextEntry={true}
            />

            <TouchableOpacity style={styles.button} onPress={() => router.push('./homex')}>
              <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  containerSuperior: {
    flex: 1,
    backgroundColor: '#fff'
  },

  imagem: {
    width: 366,
    height: 359,
    borderRadius: 12,
    alignSelf: 'center',
  },

  containerInferior: {
    flex: 1,
    marginTop: 40,
    justifyContent: 'flex-start',
  },

  texto: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 32,
  },

  subtexto: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'normal',
    marginTop: 10,
    marginHorizontal: 32,
  },

  containercaixa: {
    marginHorizontal: 32,
    marginTop: 28,
    gap: 12,
  },

  a: {
    backgroundColor: '#eff0ef',
    height: 48,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: '400',
    paddingHorizontal: 16,
  },

  button: {
    backgroundColor: '#da4bdd',
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 56,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});