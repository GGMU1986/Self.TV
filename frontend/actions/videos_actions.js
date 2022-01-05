import { 
  getAllVideos, 
  getVideo, 
  makeVideo, 
  deleteVideo
} from "../utils/util_videos";

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO_DETAIL = 'RECEIVE_VIDEO_DETAIL';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO'
export const REMOVE_VIDEO = 'REMOVE_VIDEO'


const receiveAllVideos = videos => ({
  type: RECEIVE_ALL_VIDEOS,
  videos
});

const receiveVideoDetail = payload => ({
  type: RECEIVE_VIDEO_DETAIL,
  payload
});

const receiveVideo = video => ({
  type: RECEIVE_VIDEO,
  video
})

const removeVideo = videoId => ({
  type: REMOVE_VIDEO,
  videoId
})

export const fetchVideos = () => dispatch => (
  getAllVideos().then(videos => dispatch(receiveAllVideos(videos)))
);

export const fetchVideo = videoId => dispatch => (
  getVideo(videoId).then(payload => dispatch(receiveVideoDetail(payload)))
); 

export const createVideo = video => dispatch => {
  return makeVideo(video).then(video => {
    return dispatch(receiveVideo(video))})
};

export const destroyVideo = videoId => dispatch => {
  return deleteVideo(videoId).then(() => {
    return dispatch(removeVideo(videoId))})
};
