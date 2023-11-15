import { View, StyleSheet, FlatList } from 'react-native'
import { useEffect, useLayoutEffect } from 'react'     // used after component is first loaded

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from '../components/MealItem';

function MealsOverviewScreen({ route, navigation }){

    const catId = route.params.categoryId  // pass param through navigation

    const displayedMeals = MEALS.filter((mealItem) => { 
        return mealItem.categoryIds.indexOf(catId) >= 0      // returns 1st index which catId can be found, or -1 if not in array
    })           

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])

    
    function renderMealItem(itemData){
        const item = itemData.item
        const mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration,
        }

        return <View>
            <MealItem {...mealItemProps}/>  
        </View>             // all props under mealItemProps
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals} 
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem} />
        </View>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})