import HOLIDAYS_ACTIONS from './holidays.actions';

const reducer = (holidays = [], action) => {
  const { type, dayIndex } = action;
  switch (type) {
    case HOLIDAYS_ACTIONS.ADD_HOLIDAY:
      return [...holidays, dayIndex];
    case HOLIDAYS_ACTIONS.REMOVE_HOLIDAY:
      return holidays.filter((day) => day !== dayIndex);
    default:
      return holidays;
  }
};

export default reducer;
