
import { StyleSheet, Text, View,Image,SafeAreaView,ScrollView, Platform } from 'react-native';
import {dogs} from "./data"
 const Card = ({name,description,image,size})=>{
  return(
    <View style={{width:360,
      height:560,
    backgroundColor:'gray',
    padding:10,
    borderRadius:30,
    marginBottom:30}}>
      <Image 
      style={{width:"100%",height:420,borderRadius:20}}
      source={{uri:image}} />
      <Text style={{fontSize:50}}>{name}</Text>
      <Text>{description}</Text>
    </View>
  )
 }
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
      contentContainerStyle={{marginHorizontal:15}}
      style={{marginTop:Platform.OS === 'android' && 40}}>
      {
        dogs.map((item,index)=>(
          <Card key={index} {...item} />
        ))
      }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
