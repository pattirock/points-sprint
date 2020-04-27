import { connect } from 'react-redux';
import Config from './config.view';
import PARTICIPANTS_ACTIONS from '../../reducers/participants/participants.actions';
// import { increment, decrement, reset } from './actionCreators'

const mapStateToProps = (state) => {
  console.debug(state);
  const { sprint: { startDay, percentage } } = state;
  return {
    startDay,
    percentage,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addParticipant: (name) => dispatch({ type: PARTICIPANTS_ACTIONS.ADD_PARTICIPANT, name }),
  removeParticipant: (name) => dispatch({ type: PARTICIPANTS_ACTIONS.REMOVE_PARTICIPANT, name }),
  setAbset: (name, day) => dispatch({ type: PARTICIPANTS_ACTIONS.SET_ABSENT, name, day }),
  unsetAbset: (name, day) => dispatch({ type: PARTICIPANTS_ACTIONS.UNSET_ABSENT, name, day }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Config);
