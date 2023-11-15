import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';

const Stack = createNativeStackNavigator();


// function DrawerNavigator(){
//   return <Drawer.Navigator>
//     <Drawer.Screen></Drawer.Screen>
//   </Drawer.Navigator>;
// }

export default function App() {
  return (
    <>
      <StatusBar style="light" />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{
              title: 'All Categories',
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25'}
            }}>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen}/>
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen}/>
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
           
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
