import { getUploads } from "../utils/uploads_utils";

export const RECEIVE_UPLOADS = 'RECEIVE_UPLOADS';

const receiveUploads = uploads => ({
  type: RECEIVE_UPLOADS,
  uploads
});

export const fetchUploads = userId => dispatch => (
  getUploads(userId).then(uploads => dispatch(receiveUploads(uploads)))
);