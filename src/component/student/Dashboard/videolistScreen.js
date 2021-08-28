import React, { Component } from 'react'
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native';
import { studentVideoData } from '../../../redux/action/studentdata'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { connect } from 'react-redux'
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Card, Title, Paragraph, Subheading } from 'react-native-paper';
import VideoComponent from '../Component/videolist'
import {
  faArrowLeft,
  faCoffee,
  faPenSquare,
} from '@fortawesome/free-solid-svg-icons';
class VideoListScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courseCategoryid: props.route.params.coursecategeryid
    }
  }
  // componentDidMount(){
  // let { videodata} = this.state
  //  this.props.fetchallVideoData(videodata.id);
  // }
  onVideoCardClick = (id) => {
    let { studentAllVideoData } = this.props;
    var filterData = studentAllVideoData.filter((item) => item.id == id);
    let videoData = { videodata: filterData[0] }
    this.props.navigation.navigate('videoplayer', { ...videoData })
  }
  renderVideo = (item) => {
    let { youtube_video_title, video_url, course_amt, course_name, thumb_img, id } = item.item;
    let videoId = video_url.replace("https://www.youtube.com/watch?v=", "")
    const url = `http://img.youtube.com/vi/${videoId}/sddefault.jpg`
    let { isVisiable } = this.state;
    return (
      <Card style={styles.CourseCard}>
        <TouchableOpacity
          onPress={() => { this.onVideoCardClick(id) }}
        >
          <FastImage
            style={{
              height: hp('20%'),
              width: wp('40%'),
              alignSelf: 'center',
              margin: hp('2%'),
            }}
            source={{
              uri: url,
            }}
          />
          <Card.Content style={{ flexDirection: 'row' }}>
            <Text style={{ marginLeft: wp('2%'), color: 'black' }}>
              {youtube_video_title}
            </Text>
          </Card.Content>
        </TouchableOpacity>
      </Card>
    )
  }
  render() {
    let { videodata } = this.state
    let { studentAllVideoData } = this.props
    if (studentAllVideoData.length >= 1) {
      return (
        <View>
          <View style={{ flexDirection: 'row', margin: hp('3%'), justifyContent: 'space-between' }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                size={25}
                color="#4287f5"
                style={{ marginTop: 5 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('Resultinform', { ...this.state }) }}

            >
              <LinearGradient colors={['#aa4b6b', '#6b6b83', '#3b8d99']} style={styles.TestButton} >
                <Text style={styles.styletext}>Result</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('testinstruction', { ...this.state }) }}

            >
              <LinearGradient colors={['#aa4b6b', '#6b6b83', '#3b8d99']} style={styles.TestButton} >
                <Text style={styles.styletext}>Quiz</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <FlatList
            data={studentAllVideoData}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            // renderItem={(item) => (<VideoComponent items={item} {...this.props} />)}
            renderItem={this.renderVideo}
          />
        </View>
      )
    }
    else {
      return (
        <View>
          <ActivityIndicator size='large' style={{ flex: 1, alignSelf: 'center', marginTop: hp('20%') }} color='red' />
        </View>
      )
    }

  }
}
function mapStateToProps(state) {
  return {
    studentAllVideoData: state.studentVideoData,
    studentCourseData: state.studentCourseData
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchallData: (data) => dispatch(studentdashboarddata(data)),
    fetchallVideoData: (id) => dispatch(studentVideoData(id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(VideoListScreen);
const styles = StyleSheet.create({
  CourseCard: {
    backgroundColor: 'white',
    width: wp('45%'),
    flex: 1,
    alignItems: 'center',
    marginTop: hp('2%'),
    borderRadius: hp('2%'),
    height: hp('30%'),
    marginLeft: wp('4%'),
  },
  TestButton: {
    height: hp('6%'),
    width: wp('30%'),
    borderRadius: wp('2%')
  },
  styletext: {
    fontSize: 20,
    alignSelf: 'center',
    marginTop: hp('0.5%'),
    color: 'white'

  }
});