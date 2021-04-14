import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { Card, Title } from 'react-native-paper';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faArrowLeft,
  faCoffee,
  faPenSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { studentCourseData } from '../../../redux/action/studentdata';
class CoursesList extends Component {
  constructor(props) {
    super(props);
    let { id, className } = props.route.params
    this.state = {
      id: id,
      cotegoryData: [],
      className: className
    };
  }
  componentDidMount() {
    let { id } = this.state;
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
  clickCategory = (id) => {
    this.props.fetchallCourseData(id);
    this.props.navigation.navigate('allcourses')
  }
  renderCotegoryCard = (item) => {
    let { appDarkmode } = this.props;
    return (

      <TouchableOpacity
        onPress={() => { this.clickCategory(item.item.id) }}
      >
        <Card style={appDarkmode ? styles.courseCardDarkmod : styles.courseCard}>
          <View style={{ marginLeft: hp('3%'), marginTop: hp('2%') }}>
            <Text style={appDarkmode ? styles.categorynamedarkmode : styles.categoryname}>{item.item.name}</Text>
            <Text style={appDarkmode ? styles.classesDetailDarmode : styles.classesDetail}>{item.item.description}</Text>
          </View>
        </Card>
      </TouchableOpacity>

    )
  }
  render() {
    let { cotegoryData, className } = this.state;
    let { appDarkmode } = this.props
    if(cotegoryData){
    return (
      <View style={appDarkmode ? styles.cotegorycarddarkmod : styles.categorycard}>
        <View style={{ flexDirection: 'row', margin: hp('3%') }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              size={25}
              color="#4287f5"
              style={{ marginTop: 7 }}
            />
          </TouchableOpacity>
          {/* <Title style={{ marginLeft: wp('30%'), color: '#4287f5' }}>{className}</Title> */}
        </View>

        <View style={{flex:1}}>
          <FlatList
            data={cotegoryData}
            renderItem={this.renderCotegoryCard}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            style={{marginBottom:hp('10%')}}
          />
        </View>
      </View>
    );
  }
  else{
    return(
      <ActivityIndicator color="blue" style={{flex:1,alignSelf:'center'}} />
    )
  }
}
}
function mapStateToProps(state) {
  return {
    studentalldata: state.studentData,
    appDarkmode: state.appdarkmodestate
  };
}
function mapDispatchToProps(dispatch) {
  return {
    fetchallData: (data) => dispatch(studentdashboarddata(data)),
    fetchallCourseData: (id) => dispatch(studentCourseData(id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesList);
const styles = StyleSheet.create({
  classesDetail: {
    marginTop: hp('1%'),
    color: '#a298a3',
    marginLeft: wp('3%'),
  },
  cotegorycarddarkmod: {
    backgroundColor: 'black'
  },
  categorycard: {
    backgroundColor: '#f5ebeb',
    flex: 1
  },
  courseCardDarkmod: {
    width: wp('90%'),
    marginTop: hp('2%'),
    borderRadius: hp('1%'),
    alignSelf: 'center',
    backgroundColor: '#1c1a1a'
  },

  courseCard: {
    width: wp('90%'),
    marginTop: hp('2%'),
    borderRadius: hp('1%'),
    alignSelf: 'center',
  },
  classesDetail: {
    marginTop: hp('1%'),
    color: '#7b5f87',
    fontSize: hp('2%')
  },
  darkmodeCategory: {
    flex: 1,
    backgroundColor: 'black'
  },
  categorynamedarkmode: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 5
  },
  classesDetailDarmode: {
    color: 'white',
    padding: 10
  },
  categoryname: {
    fontSize: 18,
    padding: 5
  },
  classesDetail: {
    padding: 10
  }
});
