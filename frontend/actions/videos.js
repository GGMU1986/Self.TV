import { getAllVideos, getVideo } from "../utils/videos";

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_ALL_VIDEO';

const receiveAllVideos = videos => ({
  type: RECEIVE_ALL_VIDEOS,
  videos
});

const receiveVideo = video => ({
  type: RECEIVE_ALL_VIDEO,
  video
});

export const fetchVideos = () => dispatch => (
  getAllVideos().then(videos => dispatch(receiveAllVideos(videos)))
);

export const fetchVideo = videoId => dispatch => (
  getVideo(videoId).then(video => dispatch(receiveVideo(video)))
); 
