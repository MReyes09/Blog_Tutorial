import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
//import test from '../../api/test';
//Los hooks usan estados en componentes de funcion que no tienen estado
//import text from '../../api/test'
import createUser from '../../api/user';

export class CreateUser extends Component{
    constructor(props){
        super(props);

        this.state = {
            Email: null,
            Password: null,
            Phone: null
        }
    }

    componentDidMount(){ 
        //Conexion y uso de AXIOS
        //test.get().then(res => console.log({ res }))
    }

    render(){
        const { Email, Password, Phone} = this.state;

        return (
            <View style={styles.container}>
                <Text style={styles.title} >Email:</Text>
                <TextInput
                    style={styles.textInput}
                    value={ Email }
                    onChangeText={val => this.setState({Email: val})}
                />

                <Text style={styles.title} >Password:</Text>
                <TextInput
                    //secureTextEntry: cifra los datos que se visualizan en el input (excelente en las contraseñas)
                    //el cifrado solo es para el cliente, al solicitarlo, se vera sin cifrado
                    secureTextEntry = { true }
                    style={styles.textInput}
                    value={ Password }
                    onChangeText={val => this.setState({Password: val})}
                />

                <Text style={styles.title} >Phone:</Text>
                <TextInput
                    style={styles.textInput}
                    value={ Phone }
                    onChangeText={val => this.setState({Phone: val})}
                />

                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                        console.log({ Email, Password, Phone });
                        const usr = {
                            email: Email,
                            phoneNumber: Phone,
                            password: Password,
                            displayName: 'Persona X'
                        };

                        createUser.post(usr)
                            .then(rows => console.log({ rows }));
                    }}
                >
                    <Text style={styles.title} >Save</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e',
        paddingVertical: 20,
        paddingHorizontal: 30
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    textInput: {
        borderWidth: 1.3,
        borderColor: 'white',
        height: 45,
        width: '100%',
        paddingHorizontal: 10,
        color: 'white'
    },
    btn: {
        borderWidth: 1.3,
        borderColor: 'white',
        height: 45,
        width: '100%',
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
});