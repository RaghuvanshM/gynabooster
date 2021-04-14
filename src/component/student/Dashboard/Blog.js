import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList
} from 'react-native';

import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import BlogComponent from '../Component/BlogComponent';
import { BlogData } from '../../../redux/action/studentdata'
import { connect } from 'react-redux';
class BlogScreen extends Component {
    // componentDidMount() {
    //     this.props.fetchBlogsdata()
    // }
    render() {
     let {allblogsdata} = this.props
        return (
            <View style={styles.container}>
               {allblogsdata.length>=1? <FlatList
                    data={allblogsdata}
                    renderItem={(item) => <BlogComponent item ={item} {...this.props} />}
                    keyExtractor={(index, i) => String(i)}
                    showsVerticalScrollIndicator={false}
                    style={{ marginBottom: hp('5%') }}
                />:null}
            </View>
        )
    }
}
function mapStateToProps(state) {
    return {
        allblogsdata: state.AllBlogs
    }
}
function mapDispatchToProps(dispatch) {
    return {
        fetchBlogsdata: () => { BlogData() }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BlogScreen);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d7dbd9'
    }
})