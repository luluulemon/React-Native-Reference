import { FlatList } from 'react-native'

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from '../components/CategoryGridTile';




function CategoriesScreen({ navigation }) {
    
    function renderCategoryItem(itemData) {
        function onPressHandler(){
            navigation.navigate('MealsOverview', { categoryId: itemData.item.id })
        }
    
        return <CategoryGridTile 
                title={itemData.item.title} color={itemData.item.color}
                onPress={onPressHandler}/>;
    }


    return <FlatList data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderCategoryItem(itemData)}
        numColumns={2}
    />


}

export default CategoriesScreen;