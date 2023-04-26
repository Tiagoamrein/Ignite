import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participant"


function handlerParticipantAdd(){
  console.log("participant add")
}

function handlerParticipantRemove(){
  console.log("participant remove")
}
export function Home(){
  const participant = ['Tiago', 'Pedro', 'Mateus', 'man', 'Fare', 'Test', 'Function','ola','outro']
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

    <FlatList  
    data={[]}
    keyExtractor={item=> item}
    renderItem={({item})=> (
    <Participant 
    name={item}
    key={item}
    onRemove={handlerParticipantRemove}
    />
    )}
    ListEmptyComponent={()=>{
      return(
        
          <Text style={styles.empty}>Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.</Text>
        
      )
    }}
    />
    
    </View>
  )
}