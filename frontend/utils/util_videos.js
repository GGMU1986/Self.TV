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
  console.log(video)
  return $.ajax({
    method: 'POST',
    url: `/api/videos`,
    data: video, 
    contentType: false,
    processData: false
  })
};

export const deleteVideo = videoId => {
  debugger
  return $.ajax({
    method: 'DELETE',
    url: `/api/videos/${videoId}`
  })
};