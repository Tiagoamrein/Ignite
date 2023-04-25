import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participant"


function handlerParticipantAdd(){
  console.log("participant add")
}
export function Home(){

  return(
    <View style={styles.container}>
    <Text style={styles.eventName}>Criando app react native</Text>
    <Text style={styles.eventeDate}>Sexta, 21 de abril de 2023</Text>
    <View style={styles.form}>
    <TextInput 
    style={styles.input}
    placeholder="Nome do participante"
    placeholderTextColor="#ffffff"
    />
    <TouchableOpacity style={styles.button} onPress={handlerParticipantAdd}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity></View>

    <Participant/>
    <Participant/>
    <Participant/>
    </View>
  )
}