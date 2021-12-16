export const makeSub = userId => {
  return $.ajax({
    method: 'POST',
    url: '/api/subscriptions',
    data: { userId }
  })
};

export const deleteSub = (subId, userId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/subscriptions/${subId}`,
    data: { userId }
  })
};