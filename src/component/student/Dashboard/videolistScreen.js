import React, { Component } from 'react'
import {
    Text,
    View,
    FlatList
} from 'react-native';
import {studentVideoData} from '../../../redux/action/studentdata'
import {connect} from 'react-redux'
import VideoComponent from '../Component/videolist'

class VideoListScreen extends Component{
    constructor(props){
    
        super(props)
          let {filtervideodata} = props.route.params
         this.state={
             videodata:filtervideodata[0]
         }
    }
    componentDidMount(){
    let { videodata} = this.state
     this.props.fetchallVideoData(videodata.id);
    }
    render(){
        let {videodata}= this.state
        let  {studentAllVideoData} = this.props
        return(
          <View>
              <FlatList 
              data={studentAllVideoData}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem ={(item)=>(<VideoComponent items={item} {...this.props} />)}
              />
          </View>
        )
    }
}
function mapStateToProps(state) {
    return {
     studentAllVideoData:state.studentVideoData,
     studentCourseData:state.studentCourseData
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      fetchallData: (data) => dispatch(studentdashboarddata(data)),
      fetchallVideoData: (id) => dispatch(studentVideoData(id)),
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(VideoListScreen);