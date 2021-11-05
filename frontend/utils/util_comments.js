export const deleteComment = commentId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`
  })
};

export const updateComment = (comment)=> {
  return $.ajax({
    method: 'PATCH',
    url: `/api/comments/${commentId}`,
    data: { comment }
  })
};

export const createComment = (comment, videoId)=> {
  // debugger
  return $.ajax({
    method: 'POST',
    url: `/api/comments`,
    data: { comment, videoId }
  })
};

export const fetchComment = commentId => {
  return $.ajax({
    method: 'GET',
    url: `/api/comments/${commentId}`
  })
}