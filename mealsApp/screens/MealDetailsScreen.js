import { ScrollView, Text, View, Image, StyleSheet, Button } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import IconButton from '../components/IconButton';
import { useLayoutEffect } from 'react'

function MealDetailsScreen({ route, navigation }) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler(){
        console.log('Pressed!')
    }

    useLayoutEffect( () => {
       navigation.setOptions({
            headerRight: () => {
                return <IconButton 
                        onPress={headerButtonPressHandler}
                        icon="star" color='white'
                    > </IconButton>
            }
        })
    }, [navigation, headerButtonPressHandler]);

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title} </Text>
            <MealDetail duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>            
                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Ingredients</Text>
                    </View>
                    
                    <View style={styles.listItem}>
                        {selectedMeal.ingredients.map((ingredient) => <Text style={styles.itemText} key={ingredient}> {ingredient} </Text>)}
                    </View>

                    <View style={styles.subtitleContainer}>
                        <Text style={styles.subtitle}>Steps</Text>
                    </View>

                    <View style={styles.listItem}>
                        {selectedMeal.steps.map((step) => <Text style={styles.itemText} key={step}> {step} </Text>)}
                    </View>
                </View>
            </View>
        </ScrollView>
    )


}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    subtitleContainer: {
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        padding: 6,
        margin: 4,
        marginHorizontal: 24,
        marginVertical: 4,
    },
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemText: {
        color: '#351401',
        textAlign: 'center',
    },
    listContainer: {
        width: '80%'
    },
    listOuterContainer: {
        alignItems: 'center'
    }
    

})