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
  Pressable,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Card, Title, Paragraph, Subheading} from 'react-native-paper';
import {showMessage, hideMessage} from 'react-native-flash-message';
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

class CourseListCardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisiable: false,
      filetCourseCard: [],
    };
  }
  onCourseCardClick = (id) => {
    let {studentCourseData} = this.props;
    var filterData = studentCourseData.filter((item) => item.id == id);
    if (filterData[0].description) {
      this.RBSheet.open();
    } else {
      showMessage({
        message: 'No Description found for this course',
        type: 'info',
      });
    }
    this.setState({filetCourseCard: filterData[0]});
  };
  oncoureImageClicked = (id) => {
    let {studentCourseData} = this.props;
    var filterData = studentCourseData.filter((item) => item.id == id);
    let data = {filtervideodata: filterData};
    this.props.navigation.navigate('allvideo', {...data});
  };
  rhtmlspecialchars = (str) => {
    if (typeof str == 'string') {
      str = str.replace(/&gt;/gi, '');
      str = str.replace(/&lt;/gi, '');
      str = str.replace(/&#039;/g, '');
      str = str.replace(/&quot;/gi, '');
      str = str.replace(/&amp;/gi, '');
      str = str.replace(/rdquo;/gi, '');
      str = str.replace(/ldquo;/gi, '');
      str = str.replace(/nbsp;/gi, '');
      str = str.replace(/rsquo;/gi, '');
      str = str.replace(/p;/g, '');
    }
    return str;
  };
  render() {
    let {course_amt, course_name, thumb_img, id} = this.props.items.item;
    let {filetCourseCard} = this.state;
    let {appDarkmode} = this.props;
    const url =
      'http://gyanbooster.jingleinfo.com/admin/thumb_img/' + thumb_img;
    let {isVisiable} = this.state;
    return (
      <View>
        <TouchableOpacity
           onPress={() => {
            this.oncoureImageClicked(id);
          }}>
          <Card
            style={appDarkmode ? styles.courseCardDarkmode : styles.couseCard}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <FastImage
                  style={
                    appDarkmode ? styles.courseImageDark : styles.courseImage
                  }
                  source={{
                    uri: url,
                  }}
                />
              </View>
              <View style={{margin: hp('3%')}}>
                <Text
                  style={
                    appDarkmode ? styles.couresnamedark : styles.cousesname
                  }>
                  {course_name}
                </Text>
                <Text
                  style={
                    appDarkmode ? styles.coursammountdark : styles.coursammount
                  }>
                  {' '}
                  ₹{course_amt}
                </Text>
                <Pressable
                  onPress={() => {
                    this.onCourseCardClick(id);
                  }}>
                  <View style={{marginTop: hp('1%')}}>
                    <Text
                      style={
                        appDarkmode
                          ? styles.descriptionDark
                          : styles.description
                      }>
                      Description
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </Card>
        </TouchableOpacity>
        <RBSheet
          ref={(ref) => {
            this.RBSheet = ref;
          }}
          closeOnPressBack={true}
          closeOnPressMask={true}
          dragFromTopOnly={true}
          height={hp('70%')}
          closeOnDragDown={true}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
              borderRadius: 30,
            },
            draggableIcon: {
              backgroundColor: '#71a9bd',
            },
          }}>
          {filetCourseCard ? (
            <Title numberOfLines={1} style={{alignSelf: 'center'}}>
              {filetCourseCard.course_name}
            </Title>
          ) : null}

          <ScrollView
            style={appDarkmode ? styles.rbsheetdarkmode : styles.rbsheet}>
            <View>
              <Title style={appDarkmode ? {color: 'white'} : {color: 'black'}}>
                Description
              </Title>
              {filetCourseCard ? (
                <Paragraph
                  style={
                    appDarkmode
                      ? styles.rbsheetparagraphdarkmode
                      : styles.rbsheetparagraph
                  }>
                  {this.rhtmlspecialchars(filetCourseCard.description)}
                </Paragraph>
              ) : null}
            </View>
          </ScrollView>
        </RBSheet>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    studentCourseData: state.studentCourseData,
    appDarkmode: state.appdarkmodestate,
  };
}
export default connect(mapStateToProps)(CourseListCardComponent);

const styles = StyleSheet.create({
  //dark mode
  courseImageDark: {
    height: hp('16%'),
    width: hp('20%'),
    margin: hp('2%'),
  },
  courseCardDarkmode: {
    height: hp('20%'),
    width: wp('95%'),
    marginTop: hp('2%'),
    alignSelf: 'center',
    borderRadius: hp('1%'),
    backgroundColor: '#2e2d2a',
  },
  couresnamedark: {
    color: 'white',
    fontWeight: 'bold',
  },
  coursammountdark: {
    color: 'white',
    marginTop: hp('1%'),
  },
  descriptionDark: {
    color: 'white',
    fontWeight:'bold'
  },
  rbsheetdarkmode: {
    backgroundColor: 'black',
    flex: 1,
  },
  rbsheetparagraphdarkmode: {
    color: 'white',
    lineHeight: 25,
    fontSize: 18,
  },

  // light mode
  courseImage:{
    height: hp('16%'),
    width: hp('20%'),
    margin: hp('2%'),
  },
  couseCard:{
    height: hp('20%'),
    width: wp('95%'),
    marginTop: hp('2%'),
    alignSelf: 'center',
    borderRadius: hp('1%'),
  },
  cousesname:{
    fontWeight: 'bold',
  },
  coursammount:{
    color:'#126eb8'
  },
  description:{
    fontWeight:'bold',
    color:'#786294'

  }
  
});
