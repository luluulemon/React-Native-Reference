import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props){
    return (
        <View style={styles.goalItem}>
            <Pressable  android_ripple={{ color: 'grey'}} 
                        style={ ({pressed }) => pressed && styles.pressedItem}
                        onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}, {props.id}</Text>

            </Pressable>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem:{
        margin: 3,
        borderRadius: 6,
        backgroundColor: 'purple'
      },
      goalText:{
        color: 'white',
        padding: 8,
      },
      pressedItem: {
        opacity: 0.5
      }
})