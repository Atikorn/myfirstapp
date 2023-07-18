import react from "react";
import { View,Text,StyleSheet} from "react-native";

export default function Variables(){
    let x = 10
    let y = 18.6543
    let z =-12
    let name = 'Likit'
    let tel = ''
    return(
        <View>
            <Text>เเสดงค่าจากตัวเเปร</Text>
            <Text>x = {x}</Text>
            <Text>y = {y}</Text>
            <Text>z = {z}</Text>
            <Text>Name = {name}</Text>
            <Text>Tel = {tel}</Text>
        </View>
    )
}
