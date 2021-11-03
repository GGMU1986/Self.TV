export const selectCommentsByVideo = (state, videoId) => {
  if (state.entities.videos[videoId].commentIds === undefined) return [];
  return state.entities.videos[videoId].commentIds
    .map(commentId => state.entities.comments[commentId])
};