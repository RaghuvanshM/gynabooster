import React, { Component } from 'react';
import { Card } from 'react-native-paper';
import {Text,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import { heightPercentageToDP as hp ,widthPercentageToDP as wp } from 'react-native-responsive-screen';
class TouchtCouresComponent extends Component {
    constructor(props){
        super(props);
       
    }
    render(){
        let {course_name} =this.props.item.item;
        let {appdarkmode} = this.props;
        return(
        <Card style={appdarkmode?styles.coursenamecarddark:styles.coursenamecard}>
            <Text style={appdarkmode?styles.coursenamedark:styles.coursename}>{course_name}</Text>
        </Card>
        )
    }
}
function mapStateToProps(state) {
    return {
      AllCourseGet: state.AllCourse,
      appdarkmode: state.appdarkmodestate,
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
    fetchallAllCourse: () => dispatch(AllCourseGetData()),
    };
  }
  export default connect(mapStateToProps,mapDispatchToProps)(TouchtCouresComponent);

  const styles = StyleSheet.create({
      // //darkmode
      // coursenamecarddark:{
      //   height:hp('25%'),
      //   width:wp('45%'),
      //   marginLeft:hp('3%'),
      //   backgroundColor:'#212326'
      // },
      // coursenamedark:{
      //   margin:hp('2%'),
      //   fontSize:17,
      //   color:'white',
      //   fontWeight:'bold'
      // },


      // // light
      coursenamecard:{
          width:wp('70%'),
          marginTop:hp('2%'),
          alignSelf:'center'
      },
      coursename:{
          margin:hp('2%'),
          fontSize:17
      }
  })