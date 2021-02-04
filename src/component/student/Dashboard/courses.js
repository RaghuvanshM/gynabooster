import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Card, Title} from 'react-native-paper';
import CotegoryCard from '../Component/CotegoryCard';
import { connect } from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faCoffee,
  faPenSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
class CoursesList extends Component {
  constructor(props) {
    super(props);
    let {id,className} =props.route.params
    this.state = {
      id:id,
      cotegoryData: [],
      className:className
    };
  }
  componentDidMount() {
    let {id} = this.state;
    const url =
      'https://gyanbooster.jingleinfo.com/mobileapp/user/student_get_category';
    let data = {
      class_id: parseInt(id),
    };
    fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'prabhat@123',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res2) => {
        if (res2.response.status) {
          this.setState({
            cotegoryData: res2.data,
          });
        }
       
      });
  }
  render() {
    let {cotegoryData,className} = this.state;
    let {appDarkmode} = this.props
    return (
      <View style={appDarkmode?styles.cotegorycarddarkmod:styles.categorycard}>
        <View style={{flexDirection: 'row', margin: hp('3%')}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              size={25}
              color="#4287f5"
              style={{marginTop: 7}}
            />
          </TouchableOpacity>
          <Title style={{marginLeft: wp('30%'),color:'#4287f5'}}>{className}</Title>
        </View>

        <View>
          <FlatList
            data={cotegoryData}
            renderItem={(item) => <CotegoryCard item={item.item} {...this.props} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              flexGrow: 1,
            }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    studentalldata: state.studentData,
    appDarkmode:state.appdarkmodestate
  };
}
export default connect(mapStateToProps)(CoursesList);
const styles = StyleSheet.create({
  courseCard: {
    height: hp('10%'),
    width: wp('90%'),
    marginTop: hp('2%'),
    borderRadius: hp('1%'),
    alignSelf: 'center',
  },
  classesDetail: {
    marginTop: hp('1%'),
    color: '#a298a3',
    marginLeft: wp('3%'),
  },
  cotegorycarddarkmod:{
    backgroundColor:'black'
  },
  categorycard:{
    backgroundColor:'#f5ebeb',
    flex:1
  }
});
