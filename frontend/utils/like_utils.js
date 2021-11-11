export const postLike = like => {
  return $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { like } 
  })
};

export const updateLike = like => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/likes/${like.id}`,
    data: { like } 
  })
};


