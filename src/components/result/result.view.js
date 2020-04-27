import React from 'react';
import PropTypes from 'prop-types';

const sum = (arr) => {
  let rdo = 0;

  if (arr.length > 0) {
    rdo = arr.reduce((a, b) => a + b);
  }

  return rdo;
};
const sprintDays = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Result = ({ participants, percentage, holidays }) => {
  const calculateResultWithoutPercentage = () => {
    const days = sprintDays.map((d) => holidays.includes(d));
    console.debug({ days });
    const total = days.map((isHoliday, dayIndex) => {
      if (isHoliday || (days.lastIndexOf(false) === dayIndex)) {
        return 0;
      }
      return sum(participants.map((participant) => {
        if (participant.absent.includes(dayIndex)) {
          return 0;
        }
        return (days.indexOf(false) === dayIndex) ? 1 : 2;
      }));
    });

    return sum(total);
  };

  const calculateResult = (withoutPercentage) => {
    const a = 10 * withoutPercentage * (percentage / 100);
    return Math.round(a) / 10;
  };
  const withoutPercentage = calculateResultWithoutPercentage();

  return (
    <div>
      <div className="row">
        <div className="medium-10 columns margin-medium tb">
          <h3>Points</h3>
        </div>
      </div>
      <div className="row">
        <div className="medium-10 columns">
          <h3>
            <span className="subheader">
              {`${withoutPercentage} points - ${100 - percentage}% = `}
            </span>
            <span>
              {`${calculateResult(withoutPercentage)} points`}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

Result.propTypes = {
  holidays: PropTypes.arrayOf(PropTypes.number).isRequired,
  percentage: PropTypes.number.isRequired,
  participants: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Result;
