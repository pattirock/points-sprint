import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from '../../utils/date.util';

const Config = ({
  addParticipant,
  changeStartDay,
  changePercentage,
  startDay,
  percentage,
}) => {
  const [participant, setParticipant] = useState();
  const setStartDay = (e) => {
    const { target: { value } } = e;
    if (value) {
      changeStartDay(value);
    }
  };
  const setPercentage = (e) => {
    const { target: { value } } = e;
    const percentageValue = parseInt(value, 10);
    if (percentageValue && percentageValue > 0 && percentageValue <= 100) {
      changePercentage(percentageValue);
    }
  };

  const addNewParticipant = () => {
    addParticipant(participant);
    setParticipant('');
  };

  return (
    <>
      <input onChange={setStartDay} type="date" value={format(startDay)} />
      <input onChange={setPercentage} className="input-group-field" type="number" value={percentage} />
      <form className="add-participant" onSubmit={addNewParticipant}>
        <input
          value={participant}
          onChange={({ target: { value } }) => setParticipant(value)}
          type="text"
          name="new-user"
          placeholder="Add a new participant"
          className="input-group-field"
        />
        <button
          onClick={addNewParticipant}
          type="button"
        >
          +
        </button>
      </form>
    </>
  );
};

Config.propTypes = {
  addParticipant: PropTypes.func,
  changeStartDay: PropTypes.func,
  changePercentage: PropTypes.func,
  startDay: PropTypes.instanceOf(Date),
  percentage: PropTypes.number,
};

Config.defaultProps = {
  addParticipant: () => {},
  changeStartDay: () => {},
  changePercentage: () => {},
  startDay: new Date(),
  percentage: 100,
};

export default Config;
