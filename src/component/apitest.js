import React, { Component } from 'react'
import {
    Text,
    View,
    Button,
    Image
} from 'react-native'
class ApiTestComponent extends Component {
    fetchAllData = () => {
        let data = {
            category_id:2
          }
        debugger
        const url = 'https://gyanbooster.jingleinfo.com/mobileapp/user/view_course_byID'
        fetch(url, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
                'Content-Type': 'application/json',
                'x-api-key': 'prabhat@123',
                'Cache-Control': 'no-cache'
            },
            credentials: 'include',
            body:JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {

            })
    }
    render() {
        return (
            <View>
                <Text>hello</Text>
                <Button
                    title="click buttom"
                    onPress={() => { this.fetchAllData() }}
                />
                <Image 
                 source={require('../assets/ndp.png')}
                />
            </View>
        )
    }
}
export default ApiTestComponent;

//<img src="http://img.youtube.com/vi/youtube id/0.jpg"/>
