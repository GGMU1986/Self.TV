export const getAllVideos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/videos'
  })
);

export const getVideo = videoId => (
  $.ajax({
    method: 'GET',
    url: `/api/videos/${videoId}`
  })
);

export const makeVideo = video => {
  debugger
  return $.ajax({
    method: 'POST',
    url: `/api/videos`,
    data: video, 
    contentType: false,
    processData: false
  })
};