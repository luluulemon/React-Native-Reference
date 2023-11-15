import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';


import MealDetail from './MealDetail';

function MealItem( {id, title, imageUrl, duration, complexity, affordability}){
    const navigation = useNavigation();

    function pressMealHandler(){
        navigation.navigate('MealDetails', {mealId: id})
    }

    return ( 
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: '#ccc'}} onPress={pressMealHandler}
                style={({pressed}) => pressed ? styles.buttonPressed : null    }>
                <View>
                    <View>
                        <Image source={ { uri: imageUrl } } style={styles.image}/>
                        <Text style={styles.title}> {title} </Text>
                    </View>
                    <MealDetail duration={duration} complexity={complexity} affordability={affordability}/>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius:8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowOpacity: 0.25,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    buttonPressed: {
        opacity: 0.5
    },
})