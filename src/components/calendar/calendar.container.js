import { connect } from 'react-redux';
import Calendar from './calendar.view';
import PARTICIPANTS_ACTIONS from '../../reducers/participants/participants.actions';
import HOLIDAYS_ACTIONS from '../../reducers/holidays/holidays.actions';

const mapStateToProps = (state) => {
  const { holidays, participants, sprint: { startDay } } = state;
  return {
    holidays,
    participants,
    startDay,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setAbsent: (name, day) => dispatch({ type: PARTICIPANTS_ACTIONS.SET_ABSENT, name, day }),
  unsetAbsent: (name, day) => dispatch({ type: PARTICIPANTS_ACTIONS.UNSET_ABSENT, name, day }),
  addHoliday: (dayIndex) => dispatch({ type: HOLIDAYS_ACTIONS.ADD_HOLIDAY, dayIndex }),
  removeHoliday: (dayIndex) => dispatch({ type: HOLIDAYS_ACTIONS.REMOVE_HOLIDAY, dayIndex }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);
