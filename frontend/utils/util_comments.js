export const deleteComment = commentId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`
  })
};

export const updateComment = (comment, videoId)=> {
  return $.ajax({
    method: 'PATCH',
    url: `/api/comments/${commentId}`,
    data: { comment, videoId }
  })
};

export const createComment = (comment)=> {
  debugger
  return $.ajax({
    method: 'POST',
    url: `/api/comments`,
    data: { comment }
  })
};