import React, {Component} from 'react';
import {Text, View, Button, FlatList, TouchableOpacity} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CourseListCard from '../Component/courselistCard';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faCoffee,
  faPenSquare,
} from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import HoroizontalFlatListCourseCard from '../Component/AllClassHorizontallist';
import {studentCourseData} from '../../../redux/action/studentdata';
class AllCourseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Cotegory_id: props.route.params.cotegoryId.id,
      courselistData: [],
    };
  }
  componentDidMount() {
    let {Cotegory_id} = this.state;
    this.props.fetchallCourseData(Cotegory_id);
  }
  render() {
    let {studentCourseData} = this.props;
    let listData = [
      'pshysics',
      'chemistory',
      'math',
      'biology',
      'psysics',
      'chemistory',
      'math',
      'biology',
      'data',
      'structure',
    ];
    let listDataHorizontal = [
      'pshysics',
      'chemistory',
      'math',
      'biology',
      'psysics',
      'chemistory',
      'math',
      'biology',
      'data',
      'structure',
    ];
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
          <Text style={{fontSize: hp('4%'), marginLeft: wp('20%'),color:'#4287f5'}}>Choose Course</Text>
        </View>
        <View style={{marginTop: hp('3%')}}>
          <FlatList
            data={studentCourseData}
            style={{marginBottom: hp('30%')}}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={(item) => <CourseListCard items={item} {...this.props} />}
          />
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    studentalldata: state.studentData,
    studentCourseData: state.studentCourseData,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchallData: (data) => dispatch(studentdashboarddata(data)),
    fetchallCourseData: (id) => dispatch(studentCourseData(id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AllCourseComponent);
