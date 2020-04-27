import SPRINT_ACTIONS from './sprint.actions';
import { nextMonday } from '../../utils/date.util';

const initialState = {
  percentage: parseInt(window.localStorage.percentage, 10) || 70,
  startDay: nextMonday(),
};

const reducer = (sprint = initialState, action) => {
  const { type, percentage, date } = action;
  switch (type) {
    case SPRINT_ACTIONS.CHANGE_PERCENTAGE:
      return percentage;
    case SPRINT_ACTIONS.CHANGE_START_DAY:
      return date;
    default:
      return sprint;
  }
};

export default reducer;
