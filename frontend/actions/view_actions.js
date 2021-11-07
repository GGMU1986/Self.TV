import { postView } from '../utils/view_util';

export const RECEIVE_VIEW = 'RECEIVE_VIEW'

const receiveView = view => ({
  type: RECEIVE_VIEW,
  view
})

export const incrementViews = () => dispatch => (
  post.View().then(view => dispatch(receiveView(view)))
);