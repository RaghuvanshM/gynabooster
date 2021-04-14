import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet
} from 'react-native'
import { blogsImageUrl } from '../Component/constants'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';
class BlogDetails extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { blogger_image, prd_img,description } = this.props.route.params
        const regx =/(<([^>]+)>)/ig;
        return (
            <ScrollView>
                <Image
                    style={styles.blogimage}
                    source={{ uri: `${blogsImageUrl}${prd_img}` }}
                />
                <Text style={styles.blogdescription}>{description}</Text>
            </ScrollView>
        )
    }
}
export default BlogDetails;
const styles = StyleSheet.create({
    blogimage: {
        resizeMode: "stretch",
        height: hp('30%'),
        width: wp('100%'),
    },
    blogdescription:{
        fontSize:20,
        marginHorizontal:wp('3%'),
        marginVertical:hp('2%')
    }
})