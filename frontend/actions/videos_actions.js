import { getAllVideos, getVideo, makeVideo } from "../utils/util_videos";

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO_DETAIL = 'RECEIVE_VIDEO_DETAIL';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO'

const receiveAllVideos = videos => ({
  type: RECEIVE_ALL_VIDEOS,
  videos
});

const receiveVideoDetail = (payload) => ({
  type: RECEIVE_VIDEO_DETAIL,
  payload
});

const recieveVideo = video => ({
  type: RECEIVE_VIDEO,
  video
})

export const fetchVideos = () => dispatch => (
  getAllVideos().then(videos => dispatch(receiveAllVideos(videos)))
);

export const fetchVideo = videoId => dispatch => (
  getVideo(videoId).then(payload => dispatch(receiveVideoDetail(payload)))
); 

export const createVideo = video => dispatch => (
  makeVideo(video).then(video => dispatch(recieveVideo(video)))
);
