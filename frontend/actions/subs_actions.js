import { makeSub, deleteSub } from "../utils/subs_util";

export const RECEIVE_SUB = 'RECEIVE_SUB'
export const REMOVE_SUB = 'REMOVE_SUB'

const receiveSub = payload => ({
  type: RECEIVE_SUB,
  payload
})

const removeSub = payload => ({
  type: REMOVE_SUB,
  payload
})

export const createSub = userId => dispatch => {
  return makeSub(userId).then(sub => {
    return dispatch(receiveSub(sub))
  })
};

export const destroySub = (subId, userId) => dispatch => {
  debugger
  return deleteSub(subId, userId).then(sub => {
    debugger
    return dispatch(removeSub(sub))
  })
};