import React from 'react';
import PropTypes from 'prop-types';

const Participant = ({ name, handleRemove }) => (
  <div>
    <div className="profile-card">
      <button
        onClick={handleRemove}
        type="button"
      >
        -
      </button>
      <div className="profile-info">
        <h4 className="subheader">{name}</h4>
      </div>
    </div>
  </div>
);

Participant.propTypes = {
  name: PropTypes.string,
  handleRemove: PropTypes.func,
};

Participant.defaultProps = {
  name: 'Participant',
  handleRemove: () => {},
};

export default Participant;
