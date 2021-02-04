import React, { Component } from 'react'
import {
Text,
View,
Button
} from 'react-native'
class ApiTestComponent extends Component{
    fetchAllData=()=>{
        debugger
        const url = 'https://gyanbooster.jingleinfo.com/mobileapp/user/view_class'
        fetch(url, {
          headers: {
              'x-api-key': 'prabhat@123'
          },
      }).then(res => res.json())
          .then(data => {
    
      })
    }
    render(){
        return(
            <View>
            <Text>hello</Text>
            <Button   
            title="click buttom"
            onPress={()=>{this.fetchAllData()}}
            />
            </View>
        )
    }
}
export default ApiTestComponent;

//<img src="http://img.youtube.com/vi/youtube id/0.jpg"/>
