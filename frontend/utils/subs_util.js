export const makeSub = userId => {
  // debugger
  return $.ajax({
    method: 'POST',
    url: '/api/subscriptions',
    data: { userId }
  })
};

export const deleteSub = (subId, userId) => {
  debugger
  return $.ajax({
    method: 'DELETE',
    url: `/api/subscriptions/${subId}`,
    data: { userId }
  })
};