import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CourseListCard from '../Component/courselistCard';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Card, Title, Paragraph, Subheading} from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  faArrowLeft,
  faCoffee,
  faPenSquare,
} from '@fortawesome/free-solid-svg-icons';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux';
import HoroizontalFlatListCourseCard from '../Component/AllClassHorizontallist';
import {coursethumnail, regex} from '../Component/constants';
import {
  studentCourseData,
  studentVideoData,
} from '../../../redux/action/studentdata';
import {Colors} from 'react-native/Libraries/NewAppScreen';
class AllCourseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courselistData: [],
      filetCourseCard: [],
      categoryid: props.route.params.id,
      allcoursedata: [],
      loading: false,
      isdata: true,
    };
  }
  componentDidMount() {
    let {categoryid} = this.state;
    let data = {
      category_id: categoryid,
    };
    const url =
      'https://gyanbooster.jingleinfo.com/mobileapp/user/view_course_byID';
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-api-key': 'prabhat@123',
        'Cache-Control': 'no-cache',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.response.status) {
          this.setState({
            allcoursedata: response.data,
            loading: true,
          });
          if (response.data.length >= 1) {
            this.setState({isdata: true});
          } else {
            this.setState({
              isdata: false,
            });
          }
        } else {
          this.setState({
            loading: false,
          });
        }
      });
  }
  oncoureImageClicked = (id) => {
    let {allcoursedata} = this.state;
    this.props.fetchallVideoData(id);
    let data = {coursecategeryid: id};
    var filterData = allcoursedata.filter((item) => item.id == id);
    this.props.navigation.navigate('allvideo', {...data});
    // if (parseInt(filterData[0].course_amt)>0) {
    //   this.props.navigation.navigate('productcheckout', { ...filterData });
    // }
    // else {
    //   this.props.navigation.navigate('allvideo', { ...data });
    // }
  };
  onCourseCardClick = (id) => {
    let {studentcData} = this.props;
    var filterData = studentcData.filter((item) => item.id == id);
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
  rendercourselist = (item) => {
    let {course_name, description, thumb_img, course_amt, id} = item.item;
    let {appDarkmode} = this.props;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.oncoureImageClicked(id);
        }}>
        <Card
          style={appDarkmode ? styles.courseCardDarkmode : styles.couseCard}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <FastImage
                style={
                  appDarkmode ? styles.courseImageDark : styles.courseImage
                }
                source={{uri: `${coursethumnail}${thumb_img}`}}
              />
            </View>
            <View style={{margin: hp('3%')}}>
              <Text
                style={appDarkmode ? styles.couresnamedark : styles.cousesname}>
                {course_name}
              </Text>
              <Text
                style={
                  appDarkmode ? styles.coursammountdark : styles.coursammount
                }>
                {' '}
                ₹{course_amt}
              </Text>
              {/* <Pressable
                onPress={() => {
                  this.onCourseCardClick(id);
                }}>
                <View style={{ marginTop: hp('3%') }}>
                  <Text
                    style={
                      appDarkmode
                        ? styles.descriptionDark
                        : styles.description
                    }>
                    Description
               </Text>
                </View>
              </Pressable> */}
            </View>
          </View>
        </Card>
      </TouchableWithoutFeedback>
    );
  };
  render() {
    let {studentcData, appDarkmode} = this.props;
    let {filetCourseCard, allcoursedata, loading} = this.state;
    if (loading && allcoursedata.length >= 1) {
      return (
        <View>
          <View style={{flexDirection: 'row', margin: hp('3%')}}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                size={25}
                color="#4287f5"
                style={{marginTop: 5}}
              />
            </TouchableOpacity>
            <Text
              style={{fontSize: 24, marginLeft: wp('20%'), color: '#4287f5'}}>
              Choose Course
            </Text>
          </View>
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
                <Title
                  style={appDarkmode ? {color: 'white'} : {color: 'black'}}>
                  Description
                </Title>
                {filetCourseCard ? (
                  <Paragraph
                    style={
                      appDarkmode
                        ? styles.rbsheetparagraphdarkmode
                        : styles.rbsheetparagraph
                    }>
                    {filetCourseCard.description}
                  </Paragraph>
                ) : null}
              </View>
            </ScrollView>
          </RBSheet>
          <View style={{marginTop: hp('3%')}}>
            <FlatList
              data={allcoursedata}
              style={{marginBottom: hp('30%')}}
              initialNumToRender={2}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              //  renderItem={(item) => <CourseListCard items={item} {...this.props} />}
              renderItem={this.rendercourselist}
            />
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              size={25}
              color="#4287f5"
              style={{marginLeft: wp('5%'), marginTop: wp('5%')}}
            />
          </TouchableOpacity>
          <ActivityIndicator size="large" color="red" />
          {/* {!this.state.isdata ? <Image
            source={require('../../../assets/nodata.png')}
            style={styles.nodataimage}
          /> : null} */}
          {!this.state.isdata ? (
            <View style={{alignSelf: 'center'}}>
              <Image
                source={require('../../../assets/nodata.png')}
                style={styles.nodataimage}
              />
              <Text style={styles.nodatatext}>No data Found</Text>
            </View>
          ) : null}
        </View>
      );
    }
  }
}
function mapStateToProps(state) {
  return {
    studentalldata: state.studentData,
    studentcData: state.studentCourseData,
    appDarkmode: state.appdarkmodestate,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchallData: (data) => dispatch(studentdashboarddata(data)),
    fetchallCourseData: (id) => dispatch(studentCourseData(id)),
    fetchallVideoData: (id) => dispatch(studentVideoData(id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AllCourseComponent);
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
    fontWeight: 'bold',
    fontSize: 20,
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
  courseImage: {
    height: hp('16%'),
    width: hp('20%'),
    margin: hp('2%'),
    resizeMode: 'stretch',
  },
  couseCard: {
    height: hp('20%'),
    width: wp('95%'),
    marginTop: hp('2%'),
    alignSelf: 'center',
    borderRadius: hp('1%'),
  },
  cousesname: {
    fontWeight: 'bold',
  },
  coursammount: {
    color: '#126eb8',
  },
  description: {
    fontWeight: 'bold',
    color: '#786294',
    fontSize: 20,
  },
  nodataimage: {
    height: hp('20%'),
    width: hp('20%'),
    marginTop: hp('10%'),
  },
  nodatatext: {
    fontSize: 23,
  },
});
