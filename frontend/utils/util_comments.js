export const deleteComment = commentId => {
  // // debugger
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`
  })
};

export const updateComment = (comment, videoId)=> {
  // // debugger
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