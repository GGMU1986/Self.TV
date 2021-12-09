export const makeSub = userId => (
  $.ajax({
    method: 'POST',
    url: '/api/subscriptions',
    data: userId
  })
);

export const deleteSub = userId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/subscriptions/${userId}`
  })
);