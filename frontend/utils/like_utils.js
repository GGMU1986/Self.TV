export const postLike = like => {
  debugger
  return $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { like } 
  })
};

export const updateLike = like => {
  // debugger
  return $.ajax({
    method: 'PATCH',
    url: `/api/likes/${like.id}`,
    data: { like } 
  })
};

// export const destroylike = likeId => (
//   $.ajax({
//     method: 'POST',
//     url: `/api/likes/likerId`
//   })
// );

