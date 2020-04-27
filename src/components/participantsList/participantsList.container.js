import { connect } from 'react-redux';
import ParticipantsList from './participantsList.view';
import PARTICIPANTS_ACTIONS from '../../reducers/participants/participants.actions';

const mapStateToProps = (state) => {
  const { participants } = state;
  return {
    participants,
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeParticipant: (name) => dispatch({ type: PARTICIPANTS_ACTIONS.REMOVE_PARTICIPANT, name }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ParticipantsList);
