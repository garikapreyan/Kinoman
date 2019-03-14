import {
  NEXT_PAGE,
  PREV_PAGE
} from '../constants';

export const nextPageAction = (page) => ({
  type: NEXT_PAGE,
  payload: page
});

export const prevPageAction = (page) => ({
  type: PREV_PAGE,
  payload: page
});
