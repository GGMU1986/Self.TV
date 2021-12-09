import { getUser } from "../utils/users_utils";

export const RECEIVE_USER_DETAIL = 'RECEIVE_USER_DETAIL';

const receiveUserDetail = payload => ({
  type: RECEIVE_USER_DETAIL,
  payload
});

export const fetchUser = userId => dispatch => (
  getUser(userId).then(payload => dispatch(receiveUserDetail(payload)))
);