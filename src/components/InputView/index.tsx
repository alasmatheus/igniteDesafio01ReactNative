import { View, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import { theme } from "../../theme";


import { styles } from "./style";

type Props = {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>
    newTask: () => void;
}



export function InputView({ text, setText, newTask }: Props) {
    return (
        <View style={styles.container}>

            <TextInput
                style={styles.input}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={theme.colors.gray300}
                onChangeText={setText}
                value={text}
            />
            <TouchableOpacity
                onPress={() => newTask()}
                style={styles.viewBtn}>

                <Image source={require('../../assets/imgs/plusButton.png')} style={styles.imgBtn} />

            </TouchableOpacity>
        </View>
    )
}