import { makeSub, deleteSub } from "../utils/subs_util";

export const RECEIVE_SUB = 'RECEIVE_SUB'
export const REMOVE_SUB = 'REMOVE_SUB'

const receiveSub = payload => ({
  type: RECEIVE_SUB,
  payload
})

const removeSub = subId => ({
  type: REMOVE_SUB,
  subId
})

// const receiveSubTo = subTo => ({
//   type: RECEIVE_SUB,
//   subTo
// })

// const removeSubTo = subToId => ({
//   type: REMOVE_SUB,
//   subToId
// })

export const createSub = userId => dispatch => {
  return makeSub(userId).then(sub => {
    return dispatch(receiveSub(sub))
  })
};

export const destroySub = (subId, userId) => dispatch => {
  debugger
  return deleteSub(subId, userId).then(() => {
    debugger
    return dispatch(removeSub(subId))
  })
};