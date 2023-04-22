import { StyleSheet } from "react-native"

 export const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#363636',
    padding: 24

  },
  eventName:{
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 40
    
  },
  eventeDate:{
    color: '#ffffff97',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4  
  },
  input:{
    height: 45,
    flex:1,
    marginTop: 10,
    color:'white',
    borderRadius: 10,
    backgroundColor: '#4F4F4F',
    padding:10,
  },
  buttonText:{
    color: 'white',
    fontSize:20
  },
  button:{
    backgroundColor: '#31cf67',
    width: 40,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  form:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  }

})