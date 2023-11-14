import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([])

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function addGoalhandler(enteredGoalText){
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, 
                                            { text: enteredGoalText, id: Math.random().toString() } ])
  } // add input text to array on Press

  function deleteGoalhandler(id){
    console.info(id);
    setCourseGoals((currentCourseGoals) => { 
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }


  return (
    <View style={styles.container}>
      <Button title='Add New Goal' color='purple' onPress={startAddGoalHandler}/>
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalhandler}/>

      <View style={styles.goalsContainer}>
        <FlatList
          data = {courseGoals}
          renderItem = {(itemData) =>         
            { return <GoalItem 
                      text={itemData.item.text} 
                      id={itemData.item.id}
                      onDeleteItem={deleteGoalhandler}
                    /> 
            }
          } 
          keyExtractor= {(item, index) => 
            { return item.id;}
          } 
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer:{
    flex:3
  },
});
