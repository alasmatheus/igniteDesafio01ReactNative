import * as Font from 'expo-font'
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';

export  function LoadFonts() {

    const [isLoadingFonts, setLoadingFonts] = useState(false)

    useEffect(() => {
        async function loadFontAsync() {

            try {
                SplashScreen.preventAutoHideAsync();

                await Font.loadAsync({
                    interLight: require('../assets/fonts/Inter-Light.ttf'),
                    interBold: require('../assets/fonts/Inter-Bold.ttf')
                })

            } catch (e) {
                console.log(e);
            } finally {
                setLoadingFonts(true)
                SplashScreen.hideAsync();
            }

        }

        loadFontAsync();

    }, []);


    return isLoadingFonts

}