export const getUploads = userId => (
  $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`  
  })
);