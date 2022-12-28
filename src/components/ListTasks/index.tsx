import { View, Text, Image, TouchableOpacity, } from "react-native";
import { styles } from './style'

type Props = {
    description: string;
    finish: boolean;
    removeTask: () => void;
    finishTask: () => void;
}

export function ListTasks({ description, removeTask, finish, finishTask }: Props) {
    return (
        <View style={styles.container}>

            <TouchableOpacity
                onPress={() => finishTask()}
                style={styles.check}>
                <Image source={finish ? require('../../assets/imgs/check.png') : require('../../assets/imgs/unCheck.png')} />
            </TouchableOpacity>

            <Text style={finish ? styles.textListFinish : styles.textList}>{description}</Text>

            <TouchableOpacity
                onPress={() => removeTask()}
                style={styles.delete}>

                <Image source={require('../../assets/imgs/trash.png')} />

            </TouchableOpacity>

        </View >
    )
}