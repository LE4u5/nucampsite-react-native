import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: '',
            remember: false
        };
    }

    static navigationOptions = {
        title: 'Login'
    }

    handleLogin(){
        console.log(JSON.stringify(this.state));
        if(this.state.remember){
            SecureStore.setItemAsync('userinfo', JSON.stringify({
                username: this.state.username, password: this.state.password
            })).catch(error => console.log('could not save user info', error));
        }else {
            SecureStore.deleteItemAsync('userinfo')
            .catch(error => console.log('Could not delete user info', error));
        }
    }

    componentDidMount() {
        SecureStore.getItemAsync('userinfo')
        .then(userdata => {
            const userinfo = JSON.parse(userdata);
            if(userinfo) {
                this.setState({username: userinfo.username})
                this.setState({password: userinfo.password})
                this.setState({remember: true})
            }
        });
    }

    render(){
        return (
            <View style={StyleSheet.container}>
                <Input
                    placeholder='Username'
                    leftIcon={{type: 'font-awesome', name: 'user-o'}}
                    onChangeText={username => this.setState({username})}
                    value={this.state.username}
                    containerStyle={StyleSheet.formInput}
                    leftIconContainerStyle={StyleSheet.formIcon}
                />
                <Input
                    placeholder='Password'
                    leftIcon={{type: 'font-awesome', name: 'key'}}
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                    containerStyle={StyleSheet.formInput}
                    leftIconContainerStyle={StyleSheet.formIcon}
                />
                <CheckBox
                    title='Remember Me'
                    center
                    checked={this.state.remember}
                    onPress={() => this.setState({remember: !this.state.remember})}
                    containerStyle={StyleSheet.formCheckbox}
                />
                <View style={StyleSheet.formButton}>
                    <Button
                        onPress={() => this.handleLogin()}
                        title='Login'
                        color='#5637DD'
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        margin: 20
    },
    formIcon: {
        marginRight: 10
    },
    formInput: {
        padding: 10
    },
    formCheckbox: {
        margin: 10,
        backgroundColor: null
    },
    formButton: {
        margin: 40
    }
});

export default Login;