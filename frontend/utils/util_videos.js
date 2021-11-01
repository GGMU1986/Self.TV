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