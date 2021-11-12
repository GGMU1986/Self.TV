export const postView = videoId => {
  debugger
  return $.ajax({
    method: 'POST',
    url: '/api/views',
    data: { videoId }
  })
};