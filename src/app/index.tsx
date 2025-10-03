import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";
export default function Index() {
  return (
    <View
      style={styles.containerSuperior}>
      <Image
        source={require("../assets/images/login.png")}
        style={styles.imagem}
      />

      <View
        style={styles.containerInferior}>
        <Text style={styles.texto}>
          BOAS VINDAS!</Text>
        <Text style={styles.subtexto}>Pronto para organizar suas finanças? Acesse agora</Text>

        <View style={styles.containercaixa}>

          <TextInput
            style={styles.a}
            placeholder="Nome"
            placeholderTextColor={'#a1a2a1'}
          ></TextInput>
            
          <TextInput
            style={styles.a}
            placeholder="E-mail"
            placeholderTextColor={'#a1a2a1'}
          ></TextInput>

          <TextInput
            style={styles.a}
            placeholder="Senha"
            placeholderTextColor={'#a1a2a1'}
           
          ></TextInput>


         <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} >ENTRAR</Text>
             </TouchableOpacity>


         </View>


        </View>
      </View>
    </View>
  );
}

//Ordem que prefiro - Campari, by
//Importações de imagens ou outros primeiro no stylesheet, depois ordem de containeres
//E por fim conteúdos dos containeres
const styles = StyleSheet.create(
  {
  imagem: { //I
    width: 366,
    height: 359,
    marginTop: 55,
    borderRadius: 12,
    alignSelf: 'center',
  },

  containerSuperior: { //C
    flex: 1,
    justifyContent: "center",
    alignItems: "center",


  },

  containerInferior: {//C
    flex: 1,
    marginTop: 40,
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    gap: 5
  },


  texto: { //c
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal:32,

  },

  subtexto: {
    color: 'black',
    fontWeight: 'normal',
    marginTop: 10,
    marginHorizontal:32,
  },

  a: {

    backgroundColor: '#eff0ef',
    height: 48,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: '400',
  },

  logBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width:326,
    height:48,
    marginLeft: 24,
    padding: 12
  },
  button: {
    backgroundColor: '#da4bdd',
    width: 326,
    height:48,
    borderRadius:8,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 56
  },
  buttonText:{
    color:'white',
    fontWeight:'bold'
  },


  containercaixa: {
    borderRadius: 8,
    gap: 12,
    marginHorizontal:32,
    marginTop: 28


  },


}
);