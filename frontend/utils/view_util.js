export const postView = () => (
  $.ajax({
    method: 'POST',
    url: '/api/views'
  })
);