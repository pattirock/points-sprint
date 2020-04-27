import React from 'react';
import PropTypes from 'prop-types';
import Day from './day';

const sprintDays = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Calendar = ({
  startDay,
  participants,
  holidays,
  setAbsent,
  unsetAbsent,
  addHoliday,
  removeHoliday,
}) => {
  const renderWeek = (daysOfWeek) => {
    const days = sprintDays.map((d) => holidays.includes(d));
    const weekDays = days.map((isHoliday, dayIndex) => {
      if (!daysOfWeek.includes(dayIndex)) {
        return null;
      }
      const key = `day-${dayIndex}`;

      return (
        <Day
          key={key}
          setAbsent={(p) => setAbsent(p, dayIndex)}
          unsetAbsent={(p) => unsetAbsent(p, dayIndex)}
          addHoliday={() => addHoliday(dayIndex)}
          remove_holiday={() => removeHoliday(dayIndex)}
          isSprintPlanDay={dayIndex === days.indexOf(false)}
          isDemoDay={dayIndex === days.lastIndexOf(false)}
          isHoliday={isHoliday}
          dayIndex={dayIndex}
          startDay={startDay}
          participants={participants}
        />
      );
    });

    return (
      <div className="row">
        <div className="row points-calendar__header">
          <div className="columns medium-2">Monday</div>
          <div className="columns medium-2">Tuesday</div>
          <div className="columns medium-2">Wednesday</div>
          <div className="columns medium-2">Thursday</div>
          <div className="columns medium-2 end">Friday</div>
        </div>
        <div className="row points-calendar margin-large b">{weekDays}</div>
      </div>
    );
  };
  return (
    <div>
      <div className="row">
        <div className="medium-10 columns margin-medium tb">
          <h3>Calendar</h3>
        </div>
      </div>
      {renderWeek([0, 1, 2, 3, 4])}
      {renderWeek([5, 6, 7, 8, 9])}
    </div>
  );
};

Calendar.propTypes = {
  startDay: PropTypes.instanceOf(Date),
  participants: PropTypes.arrayOf(PropTypes.object).isRequired,
  holidays: PropTypes.bool,
  setAbsent: PropTypes.func.isRequired,
  unsetAbsent: PropTypes.func.isRequired,
  addHoliday: PropTypes.func.isRequired,
  removeHoliday: PropTypes.func.isRequired,
};

Calendar.defaultProps = {
  startDay: new Date(),
  holidays: false,
};

export default Calendar;
