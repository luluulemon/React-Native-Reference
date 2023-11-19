import { View, Text, StyleSheet, Alert } from 'react-native'

import Input from './Input';
import { GlobalStyles } from '../../constants/styles';
import { useState } from 'react'
import Button from '../UI/Button';


function ExpenseForm({onCancel, onSubmit, submitButtonLabel, defaultValues }) {
    const [inputs, setInputs] = useState({
        amount: { 
                value: defaultValues ? defaultValues.amount.toString(): '',
                isValid: true,
            },
        date: {
            value: defaultValues? defaultValues.date.toISOString() : '', 
            isValid: true,
            },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true           
            }
    })
    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputs((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: { value: enteredValue, isValid: true }
            }
        })
    }

    function submitHandler(){ 
        const expenseData = {
            amount: +inputs.amount.value,
            date: new Date(inputs.date.value),
            description: inputs.description.value
        }
        console.log(expenseData);

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid){
            setInputs((curInputs) => {
                return {
                    amount: { value: curInputs.amount.value, isValid: amountIsValid },
                    date: { value: curInputs.amount.date, isValid: dateIsValid },
                    description: { value: curInputs.description.value, isValid: descriptionIsValid },
                }
            })

            return;
        }

        onSubmit(expenseData);
      }

    const formIsInvalid =
      !inputs.amount.isValid ||
      !inputs.date.isValid ||
      !inputs.description.isValid;


    return <View style={styles.form}>
        <Text style={styles.title}> Your Expense </Text>
        <View style={styles.inputsRow}>
            <Input
                style={styles.rowInput}
                invalid={!inputs.amount.isValid}
                label='Amount'
                textInputConfig={{
                    keyboardType: "decimal-pad",
                    onChangeText: inputChangeHandler.bind(this, 'amount'),
                    value: inputs.amount.value
                }} />
            <Input
                style={styles.rowInput}
                label='Date' 
                invalid={!inputs.date.isValid}
                textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: inputs.date.value
                }} />
        </View>
        <Input label='Description' 
            invalid={!inputs.description.isValid}
            textInputConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: inputs.description.value
            }} 
        />
        {formIsInvalid && (<Text style={styles.errorText}> Invalid input values</Text> ) }
        <View style={styles.buttons}>
            <Button style={styles.button} mode="flat" onPress={onCancel}>
                Cancel
            </Button>
            <Button style={styles.button} onPress={submitHandler}>
                {submitButtonLabel}
            </Button>
        </View>
    </View>
}

export default ExpenseForm;

const styles = StyleSheet.create({
    inputsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    },
    form: {
        marginTop: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    },
    errorText:{
        textAlign: 'auto',
        color: GlobalStyles.colors.error500,
        margin: 8,
    }
})