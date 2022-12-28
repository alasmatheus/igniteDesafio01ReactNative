import { StyleSheet } from "react-native";
import { theme } from "../theme";
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.gray700,
        marginTop: Constants.statusBarHeight,
        paddingTop: 70 - Constants.statusBarHeight,
        alignItems: 'center'
    },
    taskView: {
        width: 327,
        marginTop: 32, 
    },
    infoMainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:12
    },
    infoView: {
        flexDirection: 'row',
    },
    createTasksView: {
    },
    createTasksText: {
        fontFamily: theme.fonts.interBold,
        fontSize: 14,
        color: theme.colors.blue
    },
    finishTasksText: {
        fontFamily: theme.fonts.interBold,
        fontSize: 14,
        color: theme.colors.purple
    },
    counter: {
        width: 25,
        backgroundColor: theme.colors.gray400,
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    textCounter: {
        fontFamily: theme.fonts.interBold,
        fontSize: 12,
        color: theme.colors.gray200
    },

    list: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth:1,
        borderColor: theme.colors.gray400,
        paddingTop:40,
        marginTop:19

    },

    listText: {
        fontFamily: theme.fonts.interLight,
        fontSize: 14,
        color: theme.colors.gray300
    },
    listTextBold: {
        fontFamily: theme.fonts.interBold,
        fontSize: 14,
        color: theme.colors.gray300
    },
    imgClip:{
        marginBottom:16
    }
    
})