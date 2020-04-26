import React from 'react';

const Config = ({ startDay, percentage, add_participant, change_start_day, change_percentage }) => (
  <div className="row">
    <div className="medium-10 columns">
      <div className="row">
        <div className="medium-2 columns">
          <input onChange={this.setStartDay.bind(this)} type="date" value={moment(startDay).format('YYYY-MM-DD')} />
        </div>
        <div className="medium-2 columns">
          <div className="input-group">
            <input onChange={this.setPercentage.bind(this)} className="input-group-field" type="number" value={percentage} />
            <span className="input-group-label">%</span>
          </div>
        </div>
        <div className="medium-6 columns">
          <form className="add-participant" onSubmit={addParticipant} >
            <div className="input-group">
              <input value={this.state.participant} onChange={this.handleParticipantInput.bind(this)}
                type="text" name="new-user" placeholder="Add a new participant" className="input-group-field" />
              <span onClick={addParticipant} className="input-group-label">
                <i className="fa fa-user-plus fa-inverse" />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default Config;
