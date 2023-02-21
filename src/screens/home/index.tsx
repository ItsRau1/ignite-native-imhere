import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do Evento</Text>
            <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022.</Text>
            <TextInput style={styles.input} placeholder="Olah muindou" placeholderTextColor={"#cfcfcf"}/>
        </View>
    )
}