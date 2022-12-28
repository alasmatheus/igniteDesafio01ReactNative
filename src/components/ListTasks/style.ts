import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({

    container: {
        backgroundColor: theme.colors.gray500,
        minHeight: 64,
        marginBottom: 12,
        borderRadius: 8,
        paddingLeft: 12,
        paddingRight: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textList: {
        color: theme.colors.gray100,
        fontSize: 14,
        fontFamily: theme.fonts.interLight,
        textAlign: 'justify',
        maxWidth: 235,
        marginLeft: 8,
        marginRight: 8,
    },
    textListFinish: {
        color: theme.colors.gray100,
        fontSize: 14,
        fontFamily: theme.fonts.interLight,
        textAlign: 'justify',
        maxWidth: 235,
        marginLeft: 8,
        marginRight: 8,
        textDecorationLine:'line-through'
    },
    check: {
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    delete: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center'
    }


})