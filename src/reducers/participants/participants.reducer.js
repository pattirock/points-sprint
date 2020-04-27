import PARTICIPANTS_ACTIONS from './participants.actions';

const initialState = window.localStorage.participants
  ? JSON.parse(window.localStorage.participants).map((name) => ({ name, absent: [] })) : [];

const reducer = (participants = initialState, action) => {
  const { type, name, day } = action;
  switch (type) {
    case PARTICIPANTS_ACTIONS.ADD_PARTICIPANT:
      return [...participants, { name, absent: [] }];
    case PARTICIPANTS_ACTIONS.REMOVE_PARTICIPANT:
      return participants.filter((p) => p.name !== name);
    case PARTICIPANTS_ACTIONS.SET_ABSENT:
      return participants.map((participant) => {
        const participantData = { ...participant };
        if (participant.name === name) {
          participantData.absent = [...participant.absent, day];
        }
        return (participant.name === name)
          ? participant
          : { ...participant, abset: [...participant.absent, day] };
      });
    case PARTICIPANTS_ACTIONS.UNSET_ABSENT:
      return participants.map((participant) => {
        const participantData = { ...participant };
        if (participant.name === name) {
          participantData.absent = participant.absent.filter((d) => d !== day);
        }
        return participant;
      });
    default:
      return participants;
  }
};

export default reducer;
