import React from 'react';
import Calendar from '../calendar';
import Config from '../config';
import ParticipantList from '../participantsList';
import Result from '../result';

const App = () => (
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
    <ParticipantList />
    <Result />
    <Calendar />
  </>
);

export default App;
