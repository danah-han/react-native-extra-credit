import React from 'react';
import { WebView } from 'react-native';
// import console = require('console');

const VideoDetail = (props) => {
  // what an annoyingly long path
  // eslint-disable-next-line react/destructuring-assignment
  const videoID = props.navigation.state.params.video.id;
  return (
    <WebView
      source={{ uri: `https://www.youtube.com/embed/${videoID}` }}
      automaticallyAdjustContentInsets={false}
    />
  );
};

export default VideoDetail;
