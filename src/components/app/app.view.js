import React from 'react';
import Config from '../config';

const App = () => {
  // const configProps = {startDay, percentage, add_participant, change_start_day, change_percentage};
  return (
    <>
      <div className="fixed header">
        <nav className="top-bar" data-topbar="" role="navigation">
          <div className="row">
            <div className="columns medium-12">
              <h4>Points Calendar - UI Team</h4>
            </div>
          </div>
        </nav>
      </div>
      <Config />
      {/* <ParticipantList {...participantListProps} />
      <Result {...resultProps} />
      <Calendar {...calendarProps} /> */}

      {/* <div className="row">
        <div className="columns medium-12 text-center">
          <p><small>UI Team - Copyright 2016</small></p>
        </div>
      </div> */}
    </>
  );
};

export default App;
