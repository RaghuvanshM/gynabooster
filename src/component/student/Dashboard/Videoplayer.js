import React, {Component} from 'react';
import {Text, StyleSheet, View,Dimensions,ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
class VideoComponent extends Component {
  constructor(props) {
    super(props);
    this.state={
      orientation:''
    }
  }
   isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
};

/**
 * Returns true of the screen is in landscape mode
 */
isLandscape = () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
};
  componentDidMount(){
  Dimensions.addEventListener('change', () => {
    this.setState({
        orientation: this.isPortrait() ? 'portrait' : 'landscape'
    });
})
  }
  rhtmlspecialchars=(str)=> {
    if (typeof(str) == "string") {
     str = str.replace(/&gt;/ig, "");
     str = str.replace(/&lt;/ig, "");
     str = str.replace(/&#039;/g, "");
     str = str.replace(/&quot;/ig, '');
     str = str.replace(/&amp;/ig, '');
     str = str.replace(/rdquo;/ig, '');
     str = str.replace(/ldquo;/ig, '');
     str = str.replace(/nbsp;/ig, '');
     str = str.replace(/rsquo;/ig, '');
     str = str.replace(/p;/g, '');

   
     }
    return str;
    }
  render() {
    let {video_url,course_desc} = this.props.route.params.videodata;
    let videoid = video_url.replace('https://www.youtube.com/watch?v=', '');
    return (
      <View >
        {
         this.state.orientation!=='landscape' ?<View style={{height: '70%', width: '100%'}}>
          <WebView
          ref={(ref) => {
            this.videoPlayer = ref;
          }}
          scalesPageToFit={true}
          allowsFullscreenVideo={true}
          source={{
            html:
              '<html><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /><iframe src="https://www.youtube-nocookie.com/embed/' +
              videoid +
              '?modestbranding=1&playsinline=1&rel=0&controls=1" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></html>',
          }}
        />
        <Text style={{marginTop:'5%', fontFamily: 'Arial'}}>{this.rhtmlspecialchars(course_desc)}</Text>
        </View>:
        <View style={{height:'100%',width:'100%'}}>
           <WebView
          ref={(ref) => {
            this.videoPlayer = ref;
          }}
          controls
          
          source={{
            html:
              '<html><meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" /><iframe src="https://www.youtube-nocookie.com/embed/' +
              videoid +
              '?modestbranding=1?autoplay=1" frameborder="0" style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px" height="100%" width="100%"></iframe></html>',
          }}
          startInLoadingState
          renderLoading={() => (
            <View style={{ flex: 1, alignItems: 'center' }}>
              <ActivityIndicator size="large" />
            </View>
          )}
          allowsBackForwardNavigationGestures
    
        />
          </View>}
      </View>
    );
  }
}
export default VideoComponent;
const styles = StyleSheet.create({
  youtubeVideo: {
    flex: 1,
    marginHorizontal: 8,
    backgroundColor: '#000',
  },
});
