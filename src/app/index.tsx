import { FlatList, StyleSheet, View } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {AmaticSC_700Bold} from '@expo-google-fonts/amatic-sc'
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import DayListItemn from '../components/DayListItemn';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  let [fontsLoaded, fontError] = useFonts({
    Inter : Inter_900Black,
    Amatic : AmaticSC_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const days:string[] = [...Array(24)].map((val,index)=>String(index+1))

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <FlatList
        data={days}
        contentContainerStyle={styles.flatList}
        numColumns={2}
        columnWrapperStyle={styles.columnStyle}
        renderItem={({item})=><DayListItemn day={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flatList:{
    gap:10,
    padding:10
  },
  columnStyle:{
    gap:10,
  },
});
