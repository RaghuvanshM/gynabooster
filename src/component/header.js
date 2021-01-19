import React, { Component } from 'react'
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    Image
} from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { faBars } from '@fortawesome/free-solid-svg-icons';
class HeaderComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    onPress={() => { this.props.navigation.openDrawer() }}
                >
                    <FontAwesomeIcon icon={faBars} style={{ marginLeft: wp('3%'), marginTop: hp('2%'), color: 'white' }} size={hp('4%')} />
                </TouchableOpacity>
            </View>
        )
    }
}
export default HeaderComponent;