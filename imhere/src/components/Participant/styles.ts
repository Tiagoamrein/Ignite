import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#4F4F4F',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    padding:10
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#E23C44',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
})