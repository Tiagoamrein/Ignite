import { View, Text, TextInput, TouchableOpacity, FlatList,Alert,  } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participant"
import React, {useState} from "react"




export function Home(){
  const [participant, SetParticipant]  = useState <string[]>([])
  const [participantName, SetParticipantName]= useState('')

  function handlerParticipantAdd(){
    if(participant.includes('Tiago')){
      return Alert.alert('Participante existe', 'Ja existe o participante na lista')
    }
    
    if(participantName.length==0){
      return Alert.alert('Informe o nome do participante')
    }

    
    SetParticipant(prevState=> [...prevState, participantName])
    SetParticipantName('')
    }
    
    function handlerParticipantRemove(name: string){
      
      Alert.alert("Remover", `Remover o participante ${name}?`, [
        {
          text: 'Sim',
          onPress:()=> SetParticipant(prevState=> prevState.filter(p=> p!==name))
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ])
    }


  return(
    <View style={styles.container}>
    <Text style={styles.eventName}>Nome do Evento</Text>
    <Text style={styles.eventeDate}>Sexta, 21 de abril de 2023</Text>
    <View style={styles.form}>
    <TextInput 
    style={styles.input}
    placeholder="Nome do participante"
    placeholderTextColor="#ffffff"
    onChangeText={SetParticipantName}
     value={participantName}
    />
    <TouchableOpacity style={styles.button} onPress={handlerParticipantAdd}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity></View>

    <FlatList  
    data={participant}
    keyExtractor={item=> item}
    renderItem={({item})=> (
    <Participant 
    name={item}
    key={item}
    onRemove={() => handlerParticipantRemove(item)}
   
    />
    )}
    ListEmptyComponent={()=>{
      return(
          <Text style={styles.empty}>Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.</Text>
      )
    }}
    showsVerticalScrollIndicator ={false}
    />
    
    </View>
  )
}