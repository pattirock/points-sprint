import React from 'react';
import PropTypes from 'prop-types';
import Participant from './participant';

const ParticipantsList = ({ participants, removeParticipant }) => {
  const lastIndex = participants.length - 1;
  const list = participants.map((participant, index) => {
    const { name } = participant;
    const isLast = index === lastIndex;

    return (
      <Participant
        key={name}
        name={name}
        handleRemove={() => removeParticipant(name)}
        last={isLast}
      />
    );
  });

  return (
    <div>
      <div className="row">
        <div className="medium-10 columns margin-medium t">
          <h3>Participants</h3>
        </div>
      </div>
      <div className="row">{list}</div>
    </div>
  );
};

ParticipantsList.propTypes = {
  participants: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeParticipant: PropTypes.func.isRequired,
};

export default ParticipantsList;
