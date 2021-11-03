export const deleteComment = commentId => {
  // debugger
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${commentId}`
  })
};