import react from "react";
import { View,Text,StyleSheet} from "react-native";

export default function Array(){
    let cars = ['Toyota','Benz','Audi']
    return(
        <View>
            <Text>รถลำดับที่ 1 = {cars[0]}</Text>
            <Text>รถลำดับที่ 2 = {cars[1]}</Text>
            <Text>รถลำดับที่ 3 = {cars[2]}</Text>
        </View>
    )
}