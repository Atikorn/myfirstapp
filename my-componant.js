import react from "react";
import { View,Text,StyleSheet} from "react-native";

export default function MyComponant(){
    return(
        <View Style={Styles.container}>
            <Text Style={Styles.TextTitle}>Hello My Componant</Text>
            <Text Style={Styles.textPara}>React-Native JavaScript Framwork...</Text>
            <Text Style={{color:'red',fontweight:'bold'}}>Contack React Native...dsasda</Text>
        </View> 
    )
}
const Styles = StyleSheet.create({
    container: {
        paddingTop:30,
        padding:20,
        backgroundColor:'#00BFFF'//มันคือสีพื้นหลังจ้า
    },
    TextTitle:{
        color:'blue', //สีตัวอักษร
        fontSize:20,
        fontweight: 'bold',
        margintop:15
    },
    textPara:{
        fontSize:16
    }
})