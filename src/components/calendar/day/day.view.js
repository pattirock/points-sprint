import React from 'react';
import PropTypes from 'prop-types';
import { addDay, format } from '../../../utils/date.util';

const Day = ({
  isHoliday,
  dayIndex,
  addHoliday,
  removeHoliday,
  setAbsent,
  unsetAbsent,
  isSprintPlanDay,
  isDemoDay,
  startDay,
  participants,
}) => {
  const toggleHoliday = () => {
    if (isHoliday) {
      removeHoliday(dayIndex);
    } else {
      addHoliday(dayIndex);
    }
  };

  const list = (!isHoliday) && (!isDemoDay)
    && participants.map((participant) => {
      const { name, absent } = participant;
      const isAbsent = absent.includes(dayIndex);
      const toggleAbsent = isAbsent ? () => unsetAbsent(name) : () => setAbsent(name);
      return (
        <span
          onClick={toggleAbsent}
          key={name}
          className={`badge badge-medium ${isAbsent ? 'alert' : 'success'}`}
          role="button"
          tabIndex="-1"
          onKeyDown={() => {}}
        >
          {name[0]}
        </span>
      );
    });
  const day = format(addDay(startDay, dayIndex < 5 ? dayIndex : dayIndex + 2), 'DD/MM/YYYY');

  return (
    <div className="columns medium-2 text-center">
      <h4>
        <span
          onClick={toggleHoliday}
          role="button"
          tabIndex="-1"
          onKeyDown={() => {}}
        >
          HOLIDAY
        </span>
      </h4>
      <h4>
        <small>
          [
          {day}
          ]
        </small>
      </h4>
      {isSprintPlanDay ? <p>SPRINT PLAN</p> : null}
      {isDemoDay ? <p>DEMO</p> : null}
      {isHoliday ? <p>HOLIDAY</p> : null}
      {list ? <ul className="menu">{list}</ul> : null}
    </div>
  );
};

Day.propTypes = {
  isHoliday: PropTypes.bool,
  dayIndex: PropTypes.number,
  addHoliday: PropTypes.func.isRequired,
  removeHoliday: PropTypes.func.isRequired,
  setAbsent: PropTypes.func.isRequired,
  unsetAbsent: PropTypes.func.isRequired,
  isSprintPlanDay: PropTypes.bool,
  isDemoDay: PropTypes.bool,
  startDay: PropTypes.instanceOf(Date),
  participants: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Day.defaultProps = {
  isHoliday: false,
  dayIndex: 0,
  isSprintPlanDay: false,
  isDemoDay: false,
  startDay: new Date(),
};

export default Day;
