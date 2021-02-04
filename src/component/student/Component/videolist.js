import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Card, Title, Paragraph, Subheading} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faCoffee,
  faPenSquare,
} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';

class VideoListCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisiable: false,
      filetvideoCard: [],
    };
  }
  onVideoCardClick = (id) => {
    let {studentVideoData} = this.props;
    var filterData = studentVideoData.filter((item) => item.id == id);
    let videoData ={videodata:filterData[0]}
    this.props.navigation.navigate('videoplayer',{...videoData})
  };
  render() {
    let {youtube_video_title, video_url,course_amt,course_name, thumb_img, id} = this.props.items.item;
    let videoId = video_url.replace("https://www.youtube.com/watch?v=", "")
    const url = `http://img.youtube.com/vi/${videoId}/sddefault.jpg`
    let {isVisiable} = this.state;
    return (
      <View>
        <Card style={styles.CourseCard}>
          <TouchableOpacity 
           onPress={()=>{this.onVideoCardClick(id)}}
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
            <Card.Content style={{flexDirection: 'row'}}>
              <Text style={{marginLeft: wp('2%'), color: 'black'}}>
                {youtube_video_title}
              </Text>
            </Card.Content>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    studentVideoData: state.studentVideoData,
  };
}
export default connect(mapStateToProps)(VideoListCardComponent);
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
});
