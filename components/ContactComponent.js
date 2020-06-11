import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact Us'
    }

    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Card
                        title='Contact Information'
                        wrapperStyle={{margin: 20}}
                    >
                        <View>
                            <Text>{'1 Nucamp Way\nSeattle, WA 98001\nU.S.A.\n'}</Text>

                            <Text>Phone: 1-206-555-1234</Text>
                            <Text>Email: campsites@nucamp.co </Text>
                        </View>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }
}

export default Contact;