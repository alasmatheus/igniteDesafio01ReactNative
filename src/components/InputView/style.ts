import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({

    container: {
        width: 327,
        height: 54,
        flexDirection: 'row',
    },

    input: {
        backgroundColor: theme.colors.gray500,
        width: 271,
        height: 54,
        color: theme.colors.gray100,
        padding: 16,
        borderWidth: 1,
        borderRadius: 6,
        marginRight:4
    },

    viewBtn: {
        backgroundColor: theme.colors.blueDark,
        justifyContent: 'center',
        alignItems: 'center',
        width: 52,
        height: 52,
        borderRadius: 6,
    },
    imgBtn: {
        height:15.97,
        width:15.97
    }
})