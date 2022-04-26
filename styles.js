import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#efcae0",
    flexDirection: "column",
    height:"90%",
  },
  container: {
    backgroundColor: "#b7d9ac",
    flex: 1,
    padding: 20,
  },
  footer: {
    backgroundColor: "#8479bf",
    height: 40,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  mainButton: {
    backgroundColor: 'red',
    flex: 1,
  },
  list: {
    margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 3,
    padding: 3,
    margin: 10,
    backgroundColor: "#fefefe",
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start"
  }
})
