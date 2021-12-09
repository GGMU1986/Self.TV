import { makeSub, deleteSub } from "../utils/subs_util";

export const RECEIVE_SUB = 'RECEIVE_SUB'
export const REMOVE_SUB = 'REMOVE_SUB'

const receiveSub = sub => ({
  type: RECEIVE_SUB,
  sub
})

const removeSub = userId => ({
  type: REMOVE_SUB,
  userId
})

export const createSub = userId => dispatch => {
  return makeSub(userId).then(sub => {
    return dispatch(receiveSub(sub))
  })
};

export const destroySub = userId => dispatch => {
  return deleteSub(userId).then(() => {
    return dispatch(removeSub(userId))
  })
};