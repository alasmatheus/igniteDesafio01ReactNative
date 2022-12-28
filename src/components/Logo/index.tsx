import { useState } from "react";
import { View, Image } from "react-native";


import { styles } from "./style";

export function Logo() {

    return (
        <View style={styles.container}>
            <Image style={styles.imgLogoRocket} source={require('../../assets/imgs/rocket.png')} />
            <Image style={styles.imgLogoTo} source={require('../../assets/imgs/to.png')} />
            <Image style={styles.imgLogoDo} source={require('../../assets/imgs/do.png')} />

        </View>
    )
}