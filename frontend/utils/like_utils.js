export const likePost = videoId => (
  $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { videoId }
  })
) 