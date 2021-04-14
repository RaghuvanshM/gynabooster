import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions, ActivityIndicator } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { WebView } from 'react-native-webview';
import YouTube from 'react-native-youtube';
class VideoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: ''
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
  componentDidMount() {
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: this.isPortrait() ? 'portrait' : 'landscape'
      });
    })
  }
  rhtmlspecialchars = (str) => {
    if (typeof (str) == "string") {
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
  handleWebViewNavigationStateChange = (newNavState) => {
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   loading?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }
    const { url } = newNavState;
    if (!url) return;

    // handle certain doctypes
    if (url.includes('.pdf')) {
      this.webview.stopLoading();
      // open a modal with the PDF viewer
    }

    // one way to handle a successful form submit is via query strings
    if (url.includes('?message=success')) {
      this.webview.stopLoading();
      // maybe close this view?
    }

    // one way to handle errors is via query string
    if (url.includes('?errors=true')) {
      this.webview.stopLoading();
    }

    // redirect somewhere else
    if (url.includes('google.com')) {
      const newURL = 'https://reactnative.dev/';
      const redirectTo = 'window.location = "' + newURL + '"';
      this.webview.injectJavaScript(redirectTo);
    }
  }
  render() {
    let { video_url, course_desc } = this.props.route.params.videodata;
    let videoid = video_url.replace('https://www.youtube.com/watch?v=', '');
    if(video_url!=''){
    return (
      <View >
        {
         this.state.orientation!=='landscape' ?<View style={{height: '70%', width: '100%'}}>
          <WebView
          mediaPlaybackRequiresUserAction={true}
          allowsInlineMediaPlayback={true}
          javaScriptEnabled={true}
          allowsFullscreenVideo={true}
          onNavigationStateChange={this.handleWebViewNavigationStateChange}
          domStorageEnabled={true}
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
          mediaPlaybackRequiresUserAction={true}
          allowsInlineMediaPlayback={true}
          javaScriptEnabled={true}
          allowsFullscreenVideo={true}
          domStorageEnabled={true}
          onNavigationStateChange={this.handleWebViewNavigationStateChange}
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
      else{

     
        return(
          <ActivityIndicator size='large' color='red' style={{flex:1,alignSelf:'center',marginTop:20}} />
        )
      }
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
