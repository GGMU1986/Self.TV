export const selectCommentsByVideo = (state, videoId) => {
  // // // // debugger
  if (state.entities.videos[videoId].commentIds) {
    // // // // debugger
    return state.entities.videos[videoId].commentIds
      .map(commentId => state.entities.comments[commentId])
  } else {
    // // // // debugger
    return [];
  }
};