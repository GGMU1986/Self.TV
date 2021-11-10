export const postView = videoId => (
  $.ajax({
    method: 'POST',
    url: '/api/views',
    data: { videoId }
  })
);