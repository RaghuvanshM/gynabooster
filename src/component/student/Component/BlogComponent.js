import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Pressable
} from 'react-native';
import { Avatar, Card,Button, Title, Paragraph } from 'react-native-paper';
import { blogsImageUrl } from '../Component/constants'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
class BlogComponent extends Component {
    constructor(props) {
        super(props)
    }
    cancel=()=>{
       let  date1 = new Date()
    }
    render() {
        let { about_blogger, blogger_image, blogger_name, created_at, d_profile, description, prd_img, tag_line, title } = this.props.item.item
        return (
            <View style={styles.container}>
                <Pressable
                onPress={()=>{this.props.navigation.navigate('blogdetails',{...this.props.item.item})}}
                >
                <Card style={styles.singleCard}>
                    <View>
                        <View style={{ padding: 20 }}>
                            <Text style={{ fontWeight: 'bold', color: '#3b3d3d' }}>{blogger_name}</Text>
                        </View>
                      
                    </View>
                    <Image
                        style={styles.blogimage}
                        source={{ uri: `${blogsImageUrl}${prd_img}` }}
                    />
                    <View style={styles.blogcardbottom}>
                        <Text>this is good</Text>
                    </View>
                </Card>
                </Pressable>
            </View>
        )
    }
}
export default BlogComponent;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d7dbd9',
        width: wp('90%'),
        alignSelf: 'center'
    },
    singleCard: {
        marginTop: hp('3%'),
        borderRadius: hp('3%'),
        //   backgroundColor:'#b1bab8'
    },
    blogimage: {
        resizeMode: "stretch",
        height: hp('30%'),
        width: wp('90%')
    },
    blogcardbottom:{
        padding:20
    }
})