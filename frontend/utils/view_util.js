export const postView = videoId => {
  return $.ajax({
    method: 'POST',
    url: '/api/views',
    data: { videoId }
  })
};