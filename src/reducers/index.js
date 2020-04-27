import { createStore, combineReducers, compose } from 'redux';
import participants from './participants';
import sprint from './sprint';
import holidays from './holidays';

const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f,
)(createStore);

const store = finalCreateStore(combineReducers({
  holidays,
  participants,
  sprint,
}));

/* store.subscribe(() => {
  const { sprint: { percentage }, participants: participantsState } = store.getState();
  window.localStorage.setItem('percentage', percentage);
  window.localStorage.setItem('participants', JSON.stringify(participantsState.map((participant) => participant.name)));
}); */

export default store;
